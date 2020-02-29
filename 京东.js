// 等待开启无障碍模式
auto.waitFor();

// setScreenMetrics(1080, 1920);

function JDMall() {
    this.openApp = function(){
        toastLog('即将打开京东商城');

        launchApp('京东');

        toastLog('等待首页加载完成');
    };

    this.work = function() {
        // 检测是否出现领京豆按钮
        var btn1 = text('领京豆');
        btn1.waitFor();

        toastLog('首页加载完毕，点击领京豆按钮');        

        var bound = btn1.findOne().bounds();
        // 点击领京豆按钮
        click(bound.centerX(), bound.centerY());

        // 判断是否出现签到字样
        textContains('签到').waitFor();

        // 如果已经签到了，就退出
        var btn2 = text('已连续签到');
        if (btn2.exists()) {
            toastLog('已经签到完毕');
            return
        };

        // 查找签到按钮
        var btn3 = text('签到领京豆');
        btn3.waitFor();
        bound = btn3.findOne().bounds();
        click(bound.centerX(), bound.centerY());
        
        toastLog('签到成功');
    };
}

jd = new JDMall();

// 打开软件
jd.openApp();

// 签到
jd.work();
