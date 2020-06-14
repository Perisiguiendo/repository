var dls = document.querySelectorAll('dl:not(.select)');
var selected = document.querySelector('.select');


for (var i = 0; i < dls.length; i++) {
    //mark属性，false不用创建标签
    dls[i].mark = false;
    select(i);
}

/**
 * 
 */
function select(n) {
    var dds = dls[n].querySelectorAll('dd');
    var dd = null;
    var prev = null; //上一次选中的一个标签
    var span = null;
    var num = 0;
    for (var i = 0; i < dds.length; i++) {
        // prev && (prev.className = '');
        if (prev) {
            prev.className = '';
        }
        dds[i].onclick = function () {
            if (num != 0) {
                prev.className = '';
            }
            num++;
            this.className = 'active';
            prev = this;

            var parent = this.parentNode;
            if (!parent.mark) {
                dd = document.createElement('dd');
                dd.innerHTML = this.innerHTML;
                selected.appendChild(dd);
                parent.mark = true;

            } else {
                dd.innerHTML = this.innerHTML;
            }
            span = document.createElement('span');
            span.innerHTML = '×';
            span.onclick = function () {
                selected.removeChild(dd);
                //下次点击能够在创建标签
                parent.mark = false;
                prev.className = '';
            }
            dd.appendChild(span);
        }
    }
}