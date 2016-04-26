/**
 * Created by SunshineLXH on 2016/4/26.
 */
var header = document.getElementsByClassName('header')[0],
    musicNumber = document.getElementById('music_number'),
    makeMusic = document.getElementsByClassName('make_music')[0],
    saveMusic = document.getElementsByClassName('save_music')[0],
    uploadMusic = document.getElementsByClassName('upload_music')[0],
    lookMusic = document.getElementsByClassName('look_music')[0],
    shareMusic = document.getElementsByClassName('share_music')[0],
    cancel = document.getElementById('cancel'),
    submit = document.getElementById('submit'),
    save = document.getElementById('save');

var madeflag = true;

makeMusic.addEventListener('click', function() {
    if(madeflag) {
        //调用事件函数
        documentEvent();
        saveMusic.disabled = false;
        madeflag = false;
        this.innerHTML = '<span>重新制作</span>';
    }
    else {
        documentEvent();

        music_number.innerHTML = '';
    }

}, false);

saveMusic.addEventListener('click', function() {
    save.style.display = 'block';
    document.onkeydown = null;
    document.onkeyup = null;
}, false);

lookMusic.addEventListener('click', function() {
    musicNumber.innerHTML = '';
    musicNumber.innerHTML = '<ul><li class="list-title">作者:</li><li class="list-title">歌曲名:</li>' +
        '<li class="list-title">音乐时长:</li><li class="list-title">歌曲信息:</li></ul>';

    $.get('/getAllMusic', function(res) {
        var fragment = document.createDocumentFragment();
        for(var i = 0, len = res.length; i < len; i++) {
            var ul = document.createElement('ul');
            ul.className = 'listBox';
            var str = '<li class="music-list">'+res[i].author+'</li><li class="music-list">'+res[i].name+'</li>' +
                '<li class="music-list">'+res[i].melody.length+'</li><li class="music-list">'+res[i].description+'</li>';
            ul.innerHTML = str;
            fragment.appendChild(ul);
        }
        melody.appendChild(fragment);
    });

}, false);

cancel.addEventListener('click', function() {
    save.style.display = 'none';
}, false);

submit.addEventListener('click', function() {
    var input = document.querySelectorAll('fieldset input');
    var txtare = document.querySelector('#description');
    var name = input[0].value.trim();
    var author = input[1].value.trim();
    var description = txtare.value.trim();

    if(!judegeInput(name)) {
        alert('请填写歌曲名');
        return;
    }
    if(!judegeInput(author)) {
        alert('请填写作者名');
        return;
    }
    if(!judegeInput(description)) {
        alert('请填写作品的描述');
        return;
    }

    var date = new Date();
    json = {
        "name": name,
        "author": author,
        "description": description,
        "melody": arr,
        "createTime": date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
    };
    console.log(json);
    ajax.uploadMusic(json);

}, false);


function removeEvent(obj, ev, fn) {
    if (obj.detachEvent) {
        obj.detachEvent('on' + ev, fn);
    }
    else {
        obj.removeEventListener(ev, fn, false);
    }
}

function judegeInput(data) {
    if(data === '') {
        return false;
    }
    else {
        return true;
    }
}

String.prototype.trim = function() {
    return this.replace(/^(\s*)|(\s*)$/g, '');
};






