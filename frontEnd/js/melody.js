// (function(){

	var audio = document.getElementsByTagName("audio")[0];
	var songTest = [];

	// Music(name, type, melody, beat, player) 
	//音乐名字，乐器类型（默认"piano"）、简谱、节拍长度（ms）、HTML5 audio元素
    var music = new Music("test1", "piano", songTest, 500, audio);

    /* 单个按键的按下处理函数
	 * 参数：事件，键代号，ul元素，li的索引，给li的类名
	 */
	function singleKeydown(e, keyCode, ul_keys, index, class_name, voiceTag){
		if(e && e.keyCode == keyCode){
			ul_keys.childNodes[index].className = class_name;
			music.test([index, voiceTag, 1]);
		}
	}

	/* 单个按键的弹起处理函数
	 * 参数：事件，键代号，ul元素，li的索引，新节点内容，p元素，高中低标志
	 */
	function singleKeyUp(e, keyCode, ul_keys, index, newNodeHtml, music_number, voiceTag){
		if(e && e.keyCode == keyCode){
			ul_keys.childNodes[index].className = '';
			var newNode = document.createElement("span");
    		newNode.innerHTML = newNodeHtml;
    		if(voiceTag == 3){
    			var subNode = document.createElement("div");
    			subNode.innerHTML = '.';
    			subNode.className = 'high';
    			newNode.appendChild(subNode);
    		}else if(voiceTag == 1){
    			var subNode = document.createElement("div");
    			subNode.innerHTML = '.';
    			subNode.className = 'low';
    			newNode.appendChild(subNode);
    		}
    		music_number.appendChild(newNode);
    		if(music_number.getElementsByTagName('span').length % 4 == 0){
    			var lineNode = document.createElement("b");
    			lineNode.innerHTML = '|';
    			music_number.appendChild(lineNode);
    		}
		}
	}

	//事件函数
	function documentEvent(){

		//按下键盘的响应事件
		document.onkeydown = function(event){
			var e = event || window.event || arguments.callee.caller.arguments[0];
			var ul_keys = document.getElementById('ul-keys');
			//高音部分：Q，W，E，R，T，Y，U
			singleKeydown(e, 81, ul_keys, 1, 'highVoice', 3);
			singleKeydown(e, 87, ul_keys, 2, 'highVoice', 3);
			singleKeydown(e, 69, ul_keys, 3, 'highVoice', 3);
			singleKeydown(e, 82, ul_keys, 4, 'highVoice', 3);
			singleKeydown(e, 84, ul_keys, 5, 'highVoice', 3);
			singleKeydown(e, 89, ul_keys, 6, 'highVoice', 3);
			singleKeydown(e, 85, ul_keys, 7, 'highVoice', 3);
			//中音部分：A，S，D，F，G，H，J
			singleKeydown(e, 65, ul_keys, 1, 'middleVoice', 2);
			singleKeydown(e, 83, ul_keys, 2, 'middleVoice', 2);
			singleKeydown(e, 68, ul_keys, 3, 'middleVoice', 2);
			singleKeydown(e, 70, ul_keys, 4, 'middleVoice', 2);
			singleKeydown(e, 71, ul_keys, 5, 'middleVoice', 2);
			singleKeydown(e, 72, ul_keys, 6, 'middleVoice', 2);
			singleKeydown(e, 74, ul_keys, 7, 'middleVoice', 2);
			//低音部分：Z，X，C，V，B，N，M
			singleKeydown(e, 90, ul_keys, 1, 'lowVoice', 1);
			singleKeydown(e, 88, ul_keys, 2, 'lowVoice', 1);
			singleKeydown(e, 67, ul_keys, 3, 'lowVoice', 1);
			singleKeydown(e, 86, ul_keys, 4, 'lowVoice', 1);
			singleKeydown(e, 66, ul_keys, 5, 'lowVoice', 1);
			singleKeydown(e, 78, ul_keys, 6, 'lowVoice', 1);
			singleKeydown(e, 77, ul_keys, 7, 'lowVoice', 1);
		}; 

		//弹起键盘的响应事件
		document.onkeyup = function(event){
			var e = event || window.event || arguments.callee.caller.arguments[0];
			var ul_keys = document.getElementById('ul-keys');
			var music_number = document.getElementById('music_number');
			//高音部分
			singleKeyUp(e, 81, ul_keys, 1, '1', music_number, 3); // Q，高音1
			singleKeyUp(e, 87, ul_keys, 2, '2', music_number, 3); // W，高音2
			singleKeyUp(e, 69, ul_keys, 3, '3', music_number, 3); // E，高音3
			singleKeyUp(e, 82, ul_keys, 4, '4', music_number, 3); // R，高音4
			singleKeyUp(e, 84, ul_keys, 5, '5', music_number, 3); // T，高音5
			singleKeyUp(e, 89, ul_keys, 6, '6', music_number, 3); // Y，高音6
			singleKeyUp(e, 85, ul_keys, 7, '7', music_number, 3); // U，高音7
			//中音部分
			singleKeyUp(e, 65, ul_keys, 1, '1', music_number, 2); // A，中音1
			singleKeyUp(e, 83, ul_keys, 2, '2', music_number, 2); // S，中音2
			singleKeyUp(e, 68, ul_keys, 3, '3', music_number, 2); // D，中音3
			singleKeyUp(e, 70, ul_keys, 4, '4', music_number, 2); // F，中音4
			singleKeyUp(e, 71, ul_keys, 5, '5', music_number, 2); // G，中音5
			singleKeyUp(e, 72, ul_keys, 6, '6', music_number, 2); // H，中音6
			singleKeyUp(e, 74, ul_keys, 7, '7', music_number, 2); // G，中音7
			//低音部分
			singleKeyUp(e, 90, ul_keys, 1, '1', music_number, 1); // Z，低音1
			singleKeyUp(e, 88, ul_keys, 2, '2', music_number, 1); // X，低音2
			singleKeyUp(e, 67, ul_keys, 3, '3', music_number, 1); // C，低音3
			singleKeyUp(e, 86, ul_keys, 4, '4', music_number, 1); // V，低音4
			singleKeyUp(e, 66, ul_keys, 5, '5', music_number, 1); // B，低音5
			singleKeyUp(e, 78, ul_keys, 6, '6', music_number, 1); // N，低音6
			singleKeyUp(e, 77, ul_keys, 7, '7', music_number, 1); // M，低音7
		};
	}

	//调用事件函数
	documentEvent();
// })();