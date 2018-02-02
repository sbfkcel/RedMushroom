const osLocale = require('os-locale'),
    data = require('./languagePacks');

module.exports = async key=>{
    let lang = await osLocale();
    lang = lang === 'zh_CN' ? 'cn' : 'en';

    if(data[key] && data[key][lang]){
        return data[key][lang];
    }else{
        return undefined;
    };
};