module.exports = (command)=>{
    const os = require('os'),
        fs = require('fs'),
        path = require('path'),
        execFile = require('child_process').execFile;

    //获取系统名称和ADB命令路径
    let osName = (()=>{
            let name = os.type();
            return name === 'Darwin' ? 'mac' : name === 'Linux' ? 'linux' : 'win';
        })(),
        adbFile = (()=>{
            let extensionName = osName === 'win' ? '.exe' : '';
            return path.join(__dirname,'../','tool','adb',osName,'adb' + extensionName);
        })();
    return new Promise((resolve,reject)=>{
        execFile(adbFile,command.split(' '),null,(error,stdout,stderr)=>{
            if(error){
                reject({
                    status:'error',
                    msg:`<adb ${command}> 执行错误`,
                    data:error
                });
            }else{
                resolve({
                    status:'success',
                    msg:`<adb ${command}> 执行成功`,
                    data:{
                        stdout:stdout,
                        stderr:stderr
                    }
                });
            };
        });
    });
};