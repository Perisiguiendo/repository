/**
 * 关系：（1）省会下标（索引）========> city（城市对象）
 *      （2）省市前边的数据的数字 =======> 学校对象里的属性值
 */

var selectBoss = {
    province: ["河北省", "山西省", "辽宁省", "吉林省", "黑龙江省", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "台湾省", "河南省", "湖北省", "湖南省", "广东省", "海南省", "四川省", "贵州省", "云南省", "陕西省", "甘肃省", "青海省"],
    city: [

    ],
    school: [],

    provinceNode: document.getElementsByClassName('province')[0],
    cityNode: document.getElementsByClassName('city')[0],
    schoolNode: document.getElementsByClassName('school')[0],
    li_province: null,
    li_city: null,

    //渲染省会
    init: function () {
        this.showCity(); //鼠标滑过，展现城市
    },

    showCity: function () {
        var len = this.province.length;
        var provinceStr = '';
        var li_len = this.li_province.length;
        for (var i = 0; i < len; i++) {
            provinceStr += '<li>' + this.province[i] + '</li>';
        }
        this.provinceNode.innerHTML = provinceStr;
        //
        this.li_province = this.provinceNode.getElementsByTagName('li');
        for (var j = 0; j < li_len; j++) {
            this.li_province[i].index = j;
            this.li_province.addEventListener('mouseenter', this.provinceEnter.bind(this));
        }
    },

    provinceEnter: function (e) {
        console.log(e.target.index);
        for (var i = 0 ; i < this.li_province.length; i++) {
            this.li_province[i].style.backgroundColor = "#ffffff";
        }
        e.target.style.backgroundColor = "edf0f3";

        var cityArr = this.city[e.target.index];
        var len = cityArr.length;
        var cityStr = '';

        for (var i = 0; i < len; i++) {
            cityStr += '<li>' + this.cityArr[i][1] + '</li>';
        }
        this.cityNode.innerHTML = cityStr;
        //

        this.li_city = this.document.getElementsByTagName('li');
        var li_len = this.li_city.length;
        for (var j = 0; j < li_len; j++) {
            this.city[i].index = cityArr[j][0];
            this.li_city.addEventListener('mouseenter', this.cityEnter.bind(this));
        }
    },

    cityEnter: function (e) {
        for (var i = 0 ; i < this.li_city.length; i++) {
            this.li_city[i].style.backgroundColor = "#ffffff";
        }
        e.target.style.backgroundColor = "edf0f3";
        
        var schoolArr = this.school[e.target.index];
        var len = schoolArr.length;
        var schoolStr = '';

        for (var i = 0; i < len; i++) {
            schoolStr += '<li>' + this.schoolArr[i][2] + '</li>';
        }
        this.schoolNode.innerHTML = schoolStr;
        // 
    }
}