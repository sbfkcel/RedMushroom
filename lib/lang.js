const osLocale = require('os-locale');


module.exports = async key=>{
    let lang = await osLocale();

    lang = lang === 'zh_CN' ? 'cn' : 'en';
    
    let obj = {
        error:{
            cn:'中文',
            en:'英文'
        }
    };

    if(obj[key] && obj[key][lang]){
        return obj[key][lang];
    }else{
        return undefined;
    };
};