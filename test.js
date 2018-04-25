const user = {
  id: 339,
  name: 'Fred',
  age: 42
};
const {education: {school: {name} = {}} = {}} = user;


const resp = {
    data: {
        response: {
            data: {
                mnemonic,
                title,
                address
            }       
        }
    }
}
const { data: { response: { data: { mnemonic, title, address }} = {} } = {} } = resp