const Module = require('module');

const originalRequire = Module.prototype.require;

Module.prototype.require = function () {
    // const name = args[0];
    // if (name.endsWith('.css')) {
    //     return null;
    // }
    console.log('name', arguments);
    return originalRequire.apply(this, arguments);
};
