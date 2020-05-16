function showPic(which_pic) {
    var source = which_pic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);

    var text = which_pic.getAttribute("title");
    var description = document.getElementById("description");
    //修改p元素节点中的第一子节点，即文本节点的值
    description.firstChild.nodeValue = text;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.nodeType);
}

// window.onload = countBodyChildren;

function prepareGallery() {
    if (!document.getElementsByTagName) {
        return false;
    }
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementById("image-gallery")) {
        return false;
    }
    var gallery = document.getElementById("image-gallery");
    var links = gallery.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            showPic(links[i]);
            return false;
        };
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }

}