/**
 * 根据最小值和最大值得到指定范围的随机整数
 * @param {*} min 最小值 
 * @param {*} max 最大值 （取不到）
 */
function getRandom(min, max) {
    //Math.random()  0~1
    //floor向下取整
    return Math.floor(Math.random() * (max - min) + min);
}

var divCards = document.getElementsById('cards');

/**
 * 创建一个愿望卡片
 * @param {*} content 卡片内容 
 */
function createWish(content) {
    var div = document.createElement('div');
    div.className = item;

    var divWords = document.createElement('div');
    divWords.className = "words";
    divWords.innerText = content;

    var spanClose = document

}
