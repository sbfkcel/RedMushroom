const adb = require('./adb');

/**
 * 获取Android SDK版本
 */
module.exports = ()=>{
    return new Promise((resolve,reject)=>{
        adb(`shell getprop ro.build.version.sdk`).then(v => {
            let sdkVersion = (()=>{
                if(v.data && v.data.stdout){
                    return +(v.data.stdout.split('\r')[0]);
                };
            })();

            if(sdkVersion){
                resolve({
                    status:'success',
                    msg:'获取SDK版本成功',
                    data:sdkVersion
                });
            }else{
                reject({
                    status:'error',
                    msg:'获取不到SDK版本',
                    data:sdkVersion
                });
            };
        }).catch(e => {
            reject({
                status:'error',
                msg:'获取SDK版本失败',
                data:v.data
            });
        });
    });
};