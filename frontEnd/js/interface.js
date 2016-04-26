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
    melody = document.getElementsByClassName('melody')[0];
var madeflag = true;

var musicCache;  // ajax拉取的music数据缓存 数组

makeMusic.addEventListener('click', function() {
    if(madeflag) {
        //调用事件函数
        documentEvent();
        madeflag = false;
        this.innerHTML = '<span>重新制作</span>';
    }
    else {
        music_number.innerHTML = '';
    }

}), false;



lookMusic.addEventListener('click', function() {
    melody.innerHTML = '';
    melody.innerHTML = '<ul><li class="list-title">作者</li><li class="list-title">歌曲名</li>' +
        '<li class="list-title">音乐时长</li><li class="list-title">歌曲信息</li></ul>';

    ajax.getAllMusic(function(res) {
        musicCache = JSON.parse(res);
        console.log(res); 
        var res = JSON.parse(res);
        // console.log(JSON.parse(res[0].melody));
        var fragment = document.createDocumentFragment();
        for(var i = 0, len = res.length; i < len; i++) {
            var ul = document.createElement('ul');
            ul.className = 'listBox';
            ul.setAttribute('data-id', i);
            var str = '<li class="music-list">'+res[i].author+'</li><li class="music-list">'+res[i].name+'</li>' +
                '<li class="music-list">'+JSON.parse(res[i].melody).length+'</li><li class="music-list">'+res[i].description+'</li>';
            ul.innerHTML = str;
            fragment.appendChild(ul);
        }
        melody.appendChild(fragment);
    });

}, false);


function removeEvent(obj, ev, fn) {
    if (obj.detachEvent) {
        obj.detachEvent('on' + ev, fn);
    }
    else {
        obj.removeEventListener(ev, fn, false);
    }
}






