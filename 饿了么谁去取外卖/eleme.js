/** 
 * 1.随机数字 把数字随即渲染到dom（ul / li）
 * 2.列表实现滚动
 * 3.找到最小值，给最小值加上不同的样式
 * 4.当出现最小值的时候不可能重复
 * 5.若找到最小值，最小值到顶部的时候，新出现的数比最小值大，则最小值固定在顶部
 */

(function () {
    var logoNode = document.getElementById('logo');
    var closeNode = document.getElementById('close');
    var maskNode = document.getElementsByClassName('mask')[0];
    var buttonNode = document.getElementsByTagName('button')[0];
    var takeBox = document.getElementById('takeBox');
    var min = null;
    var minIndex = null;
    var arrlist = [];

    //弹出层
    logoNode.onclick = function () {
        maskNode.style.display = 'block';
        closeNode.onclick = function () {
            maskNode.style.display = 'none';
        }
    }

    buttonNode.onmouseenter = function () {
        this.style.backgroundColor = '#8898d7';
        this.onmouseleave = function () {
            this.style.backgroundColor = '#4698c7';
        }
    }

    buttonNode.onmouseup = function () {
        this.style.backgroundColor = 'white';
    }

    buttonNode.onmousedown = function () {
        createNum();
    }

    function createNum() {
        var someOne = Math.floor(Math.random() * 100);
        if (someOne == 0) {
            createNum();
            return;
        }
        arrlist.push(someOne);
        console.log(arrlist);
        if (arrlist.length > 9) {
            if (minIndex == 0 && someOne > min) {
                arrlist.splice(1, 1);
            } else {
                arrlist.shift();
            }
        }
        min = arrlist.min();
        minIndex = arrlist.indexOf(min);
        refubishDom(arrlist, minIndex);
    }

    function refubishDom(arr, index) {
        var len = arr.length;
        var str = '';
        for (var i = 0; i < len; i++) {
            str += '<li>扔了一个' + arr[i] + '</li>';
        }
        takeBox.innerHTML = str;
        takeBox.getElementsByTagName('li')[index].className = 'takeout';
    }

    //封装数组求最小值的方法
    Array.prototype.min = function () {
        var min = this[0];
        var len = this.length;
        for (var i = 0; i < len; i++) {
            if (this[i] < min) {
                min = this[i];
            }
        }
        return min;
    }

})()