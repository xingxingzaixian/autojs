// 等待开启无障碍模式
auto.waitFor();

function JDFinancial() {
    this.openApp = function(){
        toastLog('即将打开京东金融');

        launchApp('京东金融');

        toastLog('等待首页加载完成');
    };

    // 点击每日签到按钮
    this.click_qiandao_btn = function() {
        var times = 0;
        do {
            var popup_btn = id('ibtn_zc_product_popup_close');
            if (popup_btn.exists()) {
                var bound = popup_btn.findOne().bounds();
                click(bound.centerX(), bound.centerY());
            };

            var qiandao_btn = text('每日签到');
            if (qiandao_btn.exists()) {
                var bound = qiandao_btn.findOne().bounds();
                click(bound.centerX(), bound.centerY());
                break;
            }

            sleep(2000);
        } while (times < 10);
        

    };

    this.click_claim_gift = function() {
        toastLog('判断是否已经签到');
        descContains('签到').waitFor();
        toastLog('判断是否需要签到');

        sleep(1000);
        
        var gift_btn1 = descStartsWith('已连续签到');
        if (gift_btn1.exists()) {
            toastLog('今天已经签到了');
            return
        };

        var gift_btn = desc('签到领钢镚');
        gift_btn.waitFor();

        toastLog('开始签到');

        var bound = gift_btn.findOne().bounds();
        click(bound.centerX(), bound.centerY());
    };

    this.work = function() {
        this.click_qiandao_btn();
        
        toastLog('进入签到页面');

        this.click_claim_gift();
        
        toastLog('签到成功');
    };
}

jd = new JDFinancial();

// 打开软件
jd.openApp();

// 签到
jd.work();