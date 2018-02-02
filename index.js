class RedMushroom {
    constructor(){
        const _ts = this;
        _ts.m = {
            adb:require('./lib/adb'),
            getSdkVer:require('./lib/getSdkVer'),
            getCpuType:require('./lib/getCpuType'),
            lang:require('./lib/lang'),
            clipboardy:require('clipboardy')
        };

    }
    init(){
        const _ts = this,
            m = _ts.m;
        //m.clipboardy.writeSync('内容文字');
        let a = m.clipboardy.readSync();
        console.log(a);
    
        //获取SDK版本号
        m.getSdkVer().then(v => {
            console.log(v);
        }).catch(e => {
            console.log(e.msg);
        });
        
        //获取CPU类型
        m.getCpuType().then(v => {
            console.log(v);
        }).catch(e => {
            console.log(e.msg);
        });

        //获取语言包
        m.lang('error').then(v => {
            console.log(v);
        });
    }

};


new RedMushroom().init();

