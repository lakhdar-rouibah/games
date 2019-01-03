function SmallMonster(){

    var tele = new Audio('./img/sound/teleporter.wav');
    var id = null

    this.init = function ($left, $width, $height, $img, $pos, $move){


        var $bottom = null;

        switch ($pos){

            case "sol":
                $bottom = -45;
            break;
            case "niveau":
                $bottom = 80;
            break;
            case "haut":
                $bottom = 250;
            break;
            case "air":
                $bottom = 500;
            break;

        }

        _elemMonster = document.createElement('div')
        _elemMonster.style.position = "absolute";
        _elemMonster.style.bottom = $bottom + "px";
        _elemMonster.style.left = $left + "px";
        _elemMonster.style.width = $width + "px";
        _elemMonster.style.height = $height + "px";
        _elemMonster.setAttribute('class', 'elemMonster')
        _elemMonster.style.backgroundImage = "url('./img/assets/" + $img + ".gif')";
        _elemMonster.style.backgroundSize = "cover";
        _elemMonster.style.zIndex = 5;
        _assets.appendChild(_elemMonster)

        movement(_elemMonster, $move)

    }

    var movement = function ($_elem, $nat){

        switch ($nat){

            case "vertical":
            
            break;
            case "horizontal":

                $_elem.style.transform = "scale("+ 1 + ", 1)"
                var tl = new TimelineLite();
                tl.to($_elem, 4, {left:  $_elem.offsetLeft - 350 + "px", ease:Power0.easeNone});
                tl.eventCallback("onComplete", returnMovement, [$_elem, $nat]);
            break;

        }
    }

    this.checkSmallMonster = function (){

        var _small = document.querySelectorAll('.elemMonster')

        for(var i = 0; i < _small.length; i++){
                
            if(called(_avatar, _small[i]) == true){

                setTimeout(function(){
                        var save = new Save();
                        save.die();
                }, 3000)

                die = true;

                

            }
        }
    }

    this.smallBall = function () {

        id = setInterval(()=>{

            if(_ball){
                checkDie();

                setTimeout(()=>{

                    clearInterval(id)
                }, 5000)
            }

        }, 10)
    }

    var checkDie = function (){

        var _small = document.querySelectorAll('.elemMonster')

        for(var i = 0; i < _small.length; i++){
                
            if(called(_ball, _small[i]) == true){

                tele.play();
                var tl = new TimelineLite();
                tl.to(_small[i], 0.05, {opacity: 0.1}) 
                .to(_small[i], 0.05, {opacity: 1}) 
                .to(_small[i], 0.05, {opacity: 0.1}) 
                .to(_small[i], 0.05, {opacity: 1}) 
                .to(_small[i], 0.05, {opacity: 0}) 
                tl.eventCallback("onComplete", removeSmall, [_small[i], _ball]);
                

            }
        }
    }

    var removeSmall = function (elem, elem2) {

        elem.remove();
        elem2.remove();
        var score_ = document.getElementById('score_');
        score_.innerHTML = 10 + parseInt( coin_.innerHTML) ;
    }

    var returnMovement = function ($_elem, $nat) {

        switch ($nat){

            case "vertical":

            break;
            case "horizontal":

                $_elem.style.transform = "scale("+ -1 + ", 1)"
                var tl = new TimelineLite();
                tl.to($_elem, 4, {left:  $_elem.offsetLeft + 350 + "px", ease:Power0.easeNone});
                tl.eventCallback("onComplete", movement, [$_elem, $nat]);
            break;

        }

    }


    var called = function (el1, el2) {
    el1.offsetBottom = el1.offsetTop + el1.offsetHeight;
    el1.offsetRight = el1.offsetLeft + el1.offsetWidth;
    el2.offsetBottom = el2.getBoundingClientRect().top + el2.getBoundingClientRect().height;
    el2.offsetRight = el2.getBoundingClientRect().left + el2.getBoundingClientRect().width;

    return !(   ((el1.offsetBottom  ) < (el2.getBoundingClientRect().top -50)) ||
                ((el1.offsetTop ) > (el2.offsetBottom -70 ) )||
                ((el1.offsetRight ) < el2.getBoundingClientRect().left ) ||
                ((el1.offsetLeft ) > el2.offsetRight))
    }

}