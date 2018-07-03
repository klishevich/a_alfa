//this part should be templated by project
def artifact_name = 'corp-tariffs-ui'
def project = 'corp-tariffs'
def scripts_repository = 'corp-tariffs-ansible'

//url's definitions
def git_url = 'ssh://git@git.moscow.alfaintra.net'

def artifact_tag = artifact_name.replaceAll('-', '_')

//default version and commit hash identifier
def version = 'latest'
def commit_hash = 'UNKNOWN'

// Mark the code checkout 'stage'
stage 'Collect info'

//checkout and definition stage
node('build') {
    git credentialsId: 'jenkins-git', url: "${git_url}/${project}/${artifact_name}.git", poll: false, changelog: false, branch: "${sourceBranch}"

    sh('git rev-parse --short HEAD > COMMIT_HASH')
    commit_hash = readFile('COMMIT_HASH').trim()

    tool ('nodejs')

    sh('node -e "console.log(require(\'./package.json\').version)" > PACKAGE_VERSION')
    def package_version = readFile('PACKAGE_VERSION').trim()
    package_version = package_version.find('[0-9]*\\.[0-9]*\\.[0-9]*')
    version = "${package_version}-${commit_hash}"

    echo "Version is ${version}"
}

// Mark build 'stage'
stage 'Build'

//build/test and push artifact into artifactory
node('build') {
    git credentialsId: 'jenkins-git', url: "${git_url}/${project}/${artifact_name}.git", poll: false, changelog: false, branch: "${sourceBranch}"

    tool ('nodejs')

    sh ('git config --global user.email "jenkins@alfabank.ru"')
    sh ('git config --global user.name "jenkins"')
    sh ('git config --global push.default simple')
    sh ("npm --no-git-tag-version --ignore-scripts version ${version} -m 'chore(*) shapshot' --unsafe-perm")

    sh ('npm run docker-build')
}

//Mark deploy test stage
stage 'Deploy To Test'

//play ansible playbook on test node
node('test') {
    git credentialsId: 'jenkins-git', url: "${git_url}/${project}/${scripts_repository}.git", poll: false, changelog: false

    sh('rm -rf shared_roles')
    sh('ansible-galaxy install -r requirements.yml')

    def extraVars = "--extra-vars \"marathon_lb_app_path=/${commit_hash}-${artifact_name} marathon_lb_proxypass_path=/${commit_hash}-${artifact_name} front_app_id=${commit_hash}-${artifact_name} front_context_root=/${commit_hash}-${artifact_name} ${artifact_tag}_version=${version}\" --skip-tags=\"config_server,corp_config_server\""

    ansiblePlaybook(
            credentialsId: 'jenkins-ansible',
            installation: 'ansible',
            playbook: 'play-mesos.yml',
            inventory: 'inv-integration',
            tags: artifact_name,
            extras: extraVars
    )

    echo "Test enviroment is now available on http://corpint4/${commit_hash}-${artifact_name}"
}

input 'Can I clean up?'

stage 'Clean up'

node('test') {
    git credentialsId: 'jenkins-git', url: "${git_url}/${project}/${scripts_repository}.git", poll: false, changelog: false

    sh('rm -rf shared_roles')
    sh('ansible-galaxy install -r requirements.yml')

    def extraVars = "--extra-vars \"marathon_lb_app_path=/${commit_hash}-${artifact_name} marathon_lb_proxypass_path=/${commit_hash}-${artifact_name} front_app_id=${commit_hash}-${artifact_name} front_context_root=/${commit_hash}-${artifact_name} ${artifact_tag}_version=${version} delete_app=true\""

    ansiblePlaybook(
            credentialsId: 'jenkins-ansible',
            installation: 'ansible',
            playbook: 'play-mesos.yml',
            inventory: 'inv-integration',
            tags: artifact_name,
            extras: extraVars
    )

    echo "Test enviroment is deleted from /${commit_hash}-${artifact_name}"
}
