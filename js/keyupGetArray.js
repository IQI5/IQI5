/**
 * Created by SunshineLXH on 2016/4/25.
 */

    var kDown, kUp, tOfDuration;
    var json = {}, arr=[];

    var key = {
        state: false,
        span: 0,
        start: 0,
        end: 0
    };

    //按键按下时记录时间
    document.onkeydown = function() {
        if (!key.state) {
            key.start = new Date();
        }
        key.state = true;
    };

    //按键抬起时，查看键值，及按下的持续时间
    document.onkeyup = function(e) {
        var ev = e || window.event;
        key.state = false;
        key.end = new Date();
        key.span = key.end - key.start;
        console.log(key.span);

        switch(ev.keyCode) {
            //按键QWERTY
            case 81: //按键Q
                addObj('Q');
                break;
            case 87: //按键W
                addObj('W');
                break;
            case 69: //按键E
                addObj('E');
                break;
            case 82: //按键R
                addObj('R');
                break;
            case 84: //按键T
                addObj('T');
                break;
            case 89: //按键Y
                addObj('Y');
                break;
            case 85: //按键U
                addObj('U');
                break;

            //按键ASDFOHJ
            case 65: //按键A
                addObj('A');
                break;
            case 83: //按键S
                addObj('S');
                break;
            case 68:  //按键D
                addObj('D');
                break;
            case 70: //按键F
                addObj('F');
                break;
            case 71: //按键G
                addObj('G');
                break;
            case 72: //按键H
                addObj('H');
                break;
            case 74: //按键J
                addObj('J');
                break;

            //按键ZXCVBNM
            case 90: //按键Z
                addObj('Z');
                break;
            case 88: //按键X
                addObj('X');
                break;
            case 67: //按键C
                addObj('C');
                break;
            case 86: //按键V
                addObj('V');
                break;
            case 66: //按键B
                addObj('B');
                break;
            case 78: //按键N
                addObj('N');
                break;
            case 77: //按键M
                addObj('M');
                break;
        }
        console.log(arr);
        return arr;
    };

    function addObj(node) {
        json = {};
        json.mNotation = node;
        json.timeOfDuration = key.span;
        arr.push(json);
    }
