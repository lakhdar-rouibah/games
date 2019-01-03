
var _avatar = null;
var jump = false;
var life = true;
function Avatar () {

    var id = null;

    var steps = new Audio('./img/sound/step.wav');
    var jumpSound = new Audio('./img/sound/jump.wav');

    /**
     * function create avatar
     */
    this.init = function ($img, $left, $bottom, $width, $height){

        $_bottom = $bottom;
        $_left = $left; 

        _avatar = document.createElement('div')
        _avatar.style.position = "absolute"
        _avatar.style.bottom = $bottom + "px"
        _avatar.style.left = $left + "px"
        _avatar.style.width = $width + "px"
        _avatar.style.height = $height + "px"
        _avatar.setAttribute('class', 'avatar')
        _avatar.style.backgroundImage ="url('./img/foret/dino/" + $img + " (" + 1 + ").png')";
        _avatar.style.backgroundSize ="cover";
        _avatar.style.zIndex = 5;
        container.appendChild(_avatar)
    }

    this.avatarCoin = function ($bottom){

        _avatarCoin = document.createElement('div')
        _avatarCoin.style.position = "absolute"
        _avatarCoin.style.top = $bottom + 50 + "px"
        _avatarCoin.style.left = $_left + 50 + "px"
        _avatarCoin.style.width = 50 + "px"
        _avatarCoin.style.height = 50 + "px"
        _avatarCoin.setAttribute('class', 'avatar')
        _avatarCoin.style.backgroundImage ="url('./img/assets/coin.gif')";
        _avatarCoin.style.backgroundSize ="cover";
        _avatarCoin.style.zIndex = 15;
        container.appendChild(_avatarCoin)

        var coin_ = document.getElementById('coin_')

        var tl = new TimelineLite();
                tl.to(_avatarCoin, 1, {top: coin_.offsetTop -70 + "px", left: coin_.offsetLeft -50 + "px"}) 
                .to(_avatarCoin, 2, {opacity: 0})
                tl.eventCallback("onComplete", removeCoin, [_avatarCoin]);

    }

    var removeCoin = function (elem){

        elem.remove();
    }

        /**
     * function when avatar move
     * @param {string} $type 
     * @param {int} $limit 
     * @param {int} $dir 
     */
    this.avatarMove = function ($type, $limit, $dir ) {

        n += 1;

        steps.play();

        if(n >= $limit ){

            n = 1;
        }
        _avatar.style.transform = "scale("+ $dir + ", 1)"
        _avatar.style.backgroundImage ="url('./img/foret/dino/" + $type + " (" + n + ").png')";

    }

    /**
     * function when avatar jump
     * @param {int} $type 
     * @param {int} $limit 
     * @param {int} $dir 
     */
    this.avatarJump = function ($type, $limit) {

        jumpSound.play();

        jump = true;

        n += 1;

        if(n >= $limit ){

            n = 1;
        }

        _avatarSol = _avatar.style.bottom
        _avatarSol = _avatarSol.split('p')
        _avatarSol = parseInt(_avatarSol[0])

        _avatar.style.backgroundImage ="url('./img/foret/dino/" + $type + " (" + n + ").png')";

        var _gravity = new Gravity();
        id = setInterval(()=>{
            _gravity.init(_avatar);
        })

        var tl = new TimelineLite();
        tl.to(_avatar, .3, {bottom: (_avatarSol + 250) + "px"}) 
        .to(_avatar, .5, {bottom: (_solPos + 50) + "px"})
        tl.eventCallback("onComplete", initJump, [id]);


            
    }

    var initJump = function (id){

        jump = false;
        clearInterval(id)

    }


}