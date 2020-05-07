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
