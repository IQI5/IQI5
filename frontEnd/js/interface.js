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

var musicCache;  // 数组  ajax拉取的music数据缓存  

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
        var fragment = document.createDocumentFragment();
        for(var i = 0, len = res.length; i < len; i++) {
            var ul = document.createElement('ul');
            ul.className = 'listBox';
            ul.setAttribute('data-id', i);
            var str = '<li class="music-list">'+res[i].author+'</li><li class="music-list">'+res[i].name+'</li>' +
                '<li class="music-list">'+JSON.parse(res[i].melody).length+'</li><li class="music-list">'+res[i].description+'</li><li class="music-list"><div class="play-music-btn"><div></div></div></li>';

            ul.innerHTML = str;
            fragment.appendChild(ul);
        }
        melody.appendChild(fragment);

        // 点击音乐播放事件
        eventUtil.delegate(melody, 'music-list', 'click', function(e) {
            var e = e || window.event;
            var trg = e.target || e.srcElement;
            var id = trg.parentElement.getAttribute('data-id');
            console.log(trg.parentElement);
            console.log(musicCache);

            var this_music = new Music(musicCache[id].name, "piano", JSON.parse(musicCache[id].melody), 500, audio);
            this_music.play();
        }); 
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






