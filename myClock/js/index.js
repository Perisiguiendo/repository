(function () {
    var clock = document.getElementsByClassName('clock')[0];

    window.onload = function () {
        clock.classList.add('init');
        getClock();
        //定时刷新s
        this.setInterval(function () {
            window.location.reload();
        }, 2000000);
    }


    function getClock() {
        var hourNode = document.getElementsByClassName('hour')[0];
        var minuteNode = document.getElementsByClassName('minute')[0];
        var secondNode = document.getElementsByClassName('second')[0];
        // 创建一个Date对象
        var date = new Date();
        // 获得当前时间的小时
        var h = date.getHours();
        //转换成12进制小时
        h = h > 12 ? (h - 12) : h;
        // 获得当前时间的分钟
        var min = date.getMinutes();
        // 获得当前时间的秒数
        var sec = date.getSeconds();

        console.log(h, min, sec);

        var x = 5 * min / 10;
        // 把h,sec,min转换为度数
        var sec_deg = sec * 6;
        var min_deg = min * 6;
        var h_deg = h * 30 + x;

        console.log(h_deg, min_deg, sec_deg);

        //对应的角度转换成度数
        hourNode.style.transform = 'rotate(' + h_deg + 'deg)';
        minuteNode.style.transform = 'rotate(' + min_deg + 'deg)';
        secondNode.style.transform = 'rotate(' + sec_deg + 'deg)';
    }

})()