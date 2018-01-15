const adb = require('./lib/adb'),
    getSdkVer = require('./lib/getSdkVer'),
    getCpuType = require('./lib/getCpuType'),
    lang = require('./lib/lang');

lang('error').then(v => {
    console.log(v);
});

getSdkVer().then(v => {
    console.log(v);
});

getCpuType().then(v => {
    console.log(v);
});

