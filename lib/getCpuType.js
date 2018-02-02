const adb = require('./adb');

/**
 * 获取Android设备CPU类型
 */
module.exports = ()=>{
    return new Promise((resolve,reject)=>{
        adb(`shell getprop ro.product.cpu.abi`).then(v => {
            let cpuType = (()=>{
                if(v.data && v.data.stdout){
                    return v.data.stdout.split('\r')[0];
                };
            })();

            if(cpuType){
                resolve({
                    status:'success',
                    msg:'获取CPU类型成功',
                    data:cpuType
                });
            }else{
                reject({
                    status:'error',
                    msg:'获取不到CPU类型',
                    data:cpuType
                });
            };
        }).catch(e => {
            reject({
                status:'error',
                msg:'获取CPU类型失败',
                data:e.data
            });
        });
    });
};