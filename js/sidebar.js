/**
 * Created by Administrator on 2015-8-12.
 */
$(function(){
    sidebarFunction ("hot-news");
    sidebarFunction ("hot-topics");
    sidebarFunction ("hot-topics");
});
function sidebarFunction (id) {
    var wrap = document.getElementById(id);
    var getUl = wrap.getElementsByTagName("ul")[0];
    var getLi = getUl.getElementsByTagName("li");
    var getDiv = wrap.getElementsByTagName("div");
    var i, j;
    for (i = 0; i < getLi.length; i++) {
        getLi[i].index = i; //
        getLi[i].onmouseover = function() {
            //遍历每个li,绑定
            for (j = 0; j < getLi.length; j++) {
                removeClass(getLi[j],"sidebar-active");
                addClass(getDiv[j+1],"sidebar-hide");
            }
            addClass(this,"sidebar-active");
            removeClass(getDiv[this.index + 1],"sidebar-hide");
            addClass(getDiv[this.index + 1],"sidebar-active")
        };
    }
}


function hasClass(obj,cls) {
    return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}

function addClass(obj,cls) {
    if(!this.hasClass(obj,cls)){
        obj.className += " " + cls;
    }
}

function removeClass(obj,cls){
    if(hasClass(obj,cls)){
        var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
        obj.className = obj.className.replace(reg,"");
    }
}