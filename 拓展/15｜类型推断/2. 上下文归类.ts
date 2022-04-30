window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.button);   //<- OK
    console.log(mouseEvent.kangaroo); //<- Error!
};

// 明确地为函数参数类型赋值来覆写上下文类型
window.onscroll = function (uiEvent: any) {
    console.log(uiEvent.button); 
}