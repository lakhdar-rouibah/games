

var monsterSound = new Audio('./img/sound/monster.wav');
function Blason (){

    this.init = function ($left, $bottom, $width, $height, $img){

        var _blason = document.createElement('div')
            _blason.style.position = "absolute";
            _blason.style.bottom = $bottom + "px";
            _blason.style.left = $left  + "px";
            _blason.style.width = $width + "px";
            _blason.style.height = $height + "px";
            _blason.setAttribute('class', 'blason')
            _blason.style.backgroundImage = "url('./img/assets/" + $img + ".png')";
            _blason.style.backgroundSize = "cover";
            _blason.style.zIndex = 1;

            _assets.appendChild(_blason)

    }


    this.checkBlason = function () {

        var _blason = document.querySelector('.blason')
                
            if(called(_avatar, _blason) == true){
                
                    _blason.style.bottom = -300 + "px";
                    monsterSound.play();

                    sound();

                    setTimeout(()=>{
                        var dragon = new Dragon();
                        dragon.init();
                    }, 4000)
            }

    }

    var called = function (el1, el2) {
    el1.offsetBottom = el1.offsetTop + el1.offsetHeight;
    el1.offsetRight = el1.offsetLeft + el1.offsetWidth;
    el2.offsetBottom = el2.getBoundingClientRect().top + el2.getBoundingClientRect().height;
    el2.offsetRight = el2.getBoundingClientRect().left + el2.getBoundingClientRect().width;

    return !(   ((el1.offsetBottom ) < el2.getBoundingClientRect().top ) ||
                ((el1.offsetTop ) > el2.offsetBottom) ||
                ((el1.offsetRight ) < el2.getBoundingClientRect().left ) ||
                ((el1.offsetLeft ) > el2.offsetRight))
    }

    var sound = function (){

        var frameAudio = document.getElementById('frameAudio')
        frameAudio.remove();
    }

}