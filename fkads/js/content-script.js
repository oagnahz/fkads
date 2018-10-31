// console.log('开始去除广告');
var ad=document.getElementsByClassName('ad');
for ( let i = ad.length-1; i >=0; i--){
    ad[i].remove()
}


var el = window.document.body;//声明一个变量，默认值为body
window.document.body.onmouseover = function(event){
    el = event.target;//鼠标每经过一个元素，就把该元素赋值给变量el
}
document.onkeydown=function(e){
    if(e.keyCode  ==81 &&e.ctrlKey){
        console.log('您删除了'+el.innerHTML);
        el.remove();
    }
}
