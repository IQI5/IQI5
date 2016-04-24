/*
 * @功能：音乐播放组件，通过Music构造函数，生成保存了一些属性和方法的music对象，
 *
 * @param name -> 音乐名称，字符串类型
 * @param type -> 乐器类型，暂时仅提供钢琴类型（"piano"）
 * @param melody -> 旋律组成，数组类型；数组成员又是一个长度为3的数组，依次保存了音调（0~7）、是否高（3）/中（2）/低（1）音、持续时间（以节拍为单位）
 * @param beat -> 节拍，数字类型，以毫秒为单位
 * @param player -> Dom中的audio元素
 *
**/

function Music(name, type, melody, beat, player){
  var err = new Error();

  if(Object.prototype.toString.call(name) !== "[object String]"){
    err.name = "typeError";
    err.message = "invalid Music name, an argument of string is required";
    throw err;
  }

  if(Object.prototype.toString.call(type) !== "[object String]"){
    err.name = "typeError";
    err.message = "invalid Music type, an argument of string is required";
    throw err;
  }

  if(Object.prototype.toString.call(melody) !== "[object Array]"){
    err.name = "typeError";
    err.message = "invalid Music melody, an argument of array is required";
    throw err;
  }

  if(Object.prototype.toString.call(beat) !== "[object Number]"){
    err.name = "typeError";
    err.message = "invalid Music beat, an argument of number is required";
    throw err;
  }

  if(Object.prototype.toString.call(player) !== "[object HTMLAudioElement]"){
    err.name = "typeError";
    err.message = "invalid Music player, an argument of HTMLAudioElement is required";
    throw err;
  }

  

  this.name = name;                     // 乐曲名称
  this.type = type;                     // 乐器类型，暂时只提供钢琴
  this.melody = melody;                 // 乐曲旋律（包含音调和持续时长）
  this.beat = beat;                     // 节拍
  this.player = player;                 // 播放器，HTML5中的audio标签
  this.index = 0;                       // 乐曲当前播放状态
  this.totol_index = melody.length;     // 乐曲总长度
  this.current_state = false;           // 播放状态 false -> 暂停/停止中， true -> 播放中
}

Music.prototype.play = function(){
  var path = "audio/" + this.type + "/";    // "audio/piano/" -> 存放音源的路径
  var _self = this;

  this.current_state = true;

  if(this.melody.length > 0){
    if(this.melody[this.index][0] !== 0){
      this.player.src = path + this.melody[this.index][0] + "_" + this.melody[this.index][1] + ".ogg";    // 设置音频文件
    }
  }else{
    var err = new Error();
    err.name = "RangeError";
    err.message = "length of the melody should be longer than 0";
  }

  this.player.play();   //  （HTML5 audio元素的play方法）在绑定定时器之前先播放一次，防止一开始出现一段空白期

  this.timeout = setTimeout(function(){
    clearTimeout(_self.timeout);

    if(_self.index < _self.melody.length - 1){
      _self.index++;
      _self.play();
    }else{
      _self.index = 0;
      _self.current_state = false;
    }
  }, this.beat * this.melody[_self.index][2]);
}

Music.prototype.pause = function(){
  if(this.timeout) {
    clearTimeout(this.timeout);
  }

  if(this.current_state){
    this.player.pause();
    this.current_state = false;
  }else{
    this.play();
  }
}

Music.prototype.stop = function(){
  if(this.timeout){
    clearTimeout(this.timeout);
  }

  this.current_state = false;
  this.player.pause();
  this.player.currentTime = 0;
  this.index = 0;
}

// 让乐曲跳转到指定百分比（ratio）处
Music.prototype.jump = function(ratio){
  this.index = parseInt(ratio * this.totol_index);
}

Music.prototype.test = function(single){
  var _self = this;
  this.player.src = "audio/" + this.type + "/" + single[0] + "_" + single[1] + ".ogg";
  this.player.play();
  var timeout = setTimeout(function(){
    _self.player.pause();
    _self.player.currentTime = 0;
  }, this.beat * single[2]);
}