/**
 * Created by SunshineLXH on 2016/4/25.
 */

var kDown, kUp, tOfDuration;
var json = {}, arr=[];

//按键按下时记录时间
window.document.onkeydown = function(ev) {
    ev = ev ? ev || window.event;
    kDown = ev.timeStamp;
};

//按键抬起时，查看键值，及按下的持续时间
window.document.onkeyup = function(ev) {
    ev = ev ? ev : window.event;
    kUp = ev.timeStamp;
    tOfDuration = kUp - kDown;

    switch(ev.keyCode) {
        case 49:
            addObj(1);
            break;
        case 50:
            addObj(2);
            break;
        case 51:
            addObj(3);
            break;
        case 52:
            addObj(4);
            break;
        case 53:
            addObj(5);
            break;
        case 54:
            addObj(6);
            break;
        case 55:
            addObj(7);
            break;
        case 48:
            addObj(0);
            break;
    }
    console.log(arr);
    return arr;
};

function addObj(node) {
    json = {};
    json.mNotation = node;
    json.tOfDuration = tOfDuration;
    arr.push(json);
}