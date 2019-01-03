
    

function Coin () {

    var soundCoin = new Audio('./img/sound/coin_2.wav');

    this.init = function ($img, $left, $width, $height, $pos, $qt, $score){



        myScore = $score;
        $_width = $width;
        $_height = $height;
        $_img = $img;

        var $bottom = null;

        switch ($pos){

            case "sol":
                $bottom = -5;
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

        for(var i = 0; i< $qt; i++){

            var _coin = document.createElement('div')
            _coin.style.position = "absolute";
            _coin.style.bottom = $bottom + "px";
            _coin.style.left = $left +(50 * i) + "px";
            _coin.style.width = $width + "px";
            _coin.style.height = $height + "px";
            _coin.setAttribute('class', 'coin')
            _coin.style.backgroundImage = "url('./img/assets/" + $img + ".gif')";
            _coin.style.backgroundSize = "cover";
            _coin.style.zIndex = 1;

            _assets.appendChild(_coin)
        }
    }

    this.checkCoin = function () {

        var _coin = document.querySelectorAll('.coin')

        for(var i = 0; i < _coin.length; i++){
                
            if(called(_avatar, _coin[i]) == true){

                soundCoin.play();
                _coin[i].remove();

                _avatarCoin = new Avatar();
                _avatarCoin.avatarCoin(_avatar.offsetTop);
                var coin_ = document.getElementById('coin_');
                coin_.innerHTML = myScore + parseInt( coin_.innerHTML) ;

                

            }
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


}