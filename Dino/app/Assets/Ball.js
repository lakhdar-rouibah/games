
var _ball = null;
var ballThrow = false;
var ballSound  = new Audio('./img/sound/ball.wav');
function Ball () {

    this.init = function () {



        _ball = document.createElement('div')
        _ball.style.position = "absolute"
        _ball.style.top = _avatar.offsetTop + 50 + "px"
        _ball.style.left = 350 + "px"
        _ball.style.width = 30 + "px"
        _ball.style.height = 30 + "px"
        _ball.setAttribute('class', 'ball')
        _ball.style.backgroundImage ="url('./img/assets/fire.png')";
        _ball.style.backgroundSize ="cover";
        _ball.style.zIndex = 15;
        container.appendChild(_ball)

        ballSound.play();

        setTimeout(function () {

            ballThrow = false;
        }, 500);


        var tl = new TimelineLite();
                tl.to(_ball, 1.5, {left: 100 * direction + "%", ease:Power0.easeNone}) 
                tl.eventCallback("onComplete", removeCoin, [_ball]);
    }

    var removeCoin = function (elem){

        elem.remove();
    }


}