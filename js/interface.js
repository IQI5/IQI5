/**
 * Created by SunshineLXH on 2016/4/26.
 */
var header = document.getElementsByClassName('header')[0],
    musicNumber = document.getElementById('music_number'),
    makeMusic = document.getElementsByClassName('make_music')[0],
    saveMusic = document.getElementsByClassName('save_music')[0],
    uploadMusic = document.getElementsByClassName('upload_music')[0],
    lookMusic = document.getElementsByClassName('look_music')[0],
    shareMusic = document.getElementsByClassName('share_music')[0];

addEvent(makeMusic, 'click', function() {
    musicNumber.innerHTML = '';
});

addEvent(saveMusic, 'click', function() {

});

addEvent(uploadMusic, 'click', function() {

});

addEvent(lookMusic, 'click', function() {
    musicNumber.innerHTML = '';
    musicNumber.innerHTML = '<ul><li>作者：' + 'aa' + '</li><li>歌曲名：' + 'bb' + '</li><li>音乐时长：' + 'cc' + '</li><li>歌曲信息：' + 'dd' + '</li></ul>';

});

addEvent(shareMusic, 'click', function() {

});

function addEvent(obj, ev, fn) {
    if (obj.attachEvent) {
        obj.attachEvent('on' + ev, fn);
    }
    else {
        obj.addEventListener(ev, fn);
    }
}

function addEvent1(obj, ev, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(ev, fn, false);
    }
    else {
        obj.attachEvent('on' + ev, fn);
    }
}

function removeEvent(obj, ev, fn) {
    if (obj.detachEvent) {
        obj.detachEvent('on' + ev, fn);
    }
    else {
        obj.removeEventListener(ev, fn, false);
    }
}






