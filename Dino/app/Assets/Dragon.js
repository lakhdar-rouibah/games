
var ailes = new Audio('./img/sound/dragon_ailes.wav');
var dragonThrow = new Audio('./img/sound/dragon_throw.wav');
var dragonCry = new Audio('./img/sound/dragon_cry.wav');
var dragonDie = new Audio('./img/sound/dragon_die.wav');


function Dragon () {

    var _rightDragon =  [100,  0, -100,  -200, -300, -400, -500, -600,  -700];
    var _bottomDragon = [100, 50,    0,   -50, -100, -150, -200, -250,  -300];
    var _firePos = [1100, 1150,  1200, 1250, 1300, 1350, 1400, 1450,  1600];
    var _dragon = null;
    var _blood = null;
    var _fuel = null;
    var _widthBlood = 100;
    this.init = function (){

        _dragon = document.createElement('div')
        _dragon.style.position = "absolute"
        _dragon.style.bottom = -600 + "px"
        _dragon.style.right = 100 + "px"
        _dragon.style.width = 1000 + "px"
        _dragon.style.height = 800 + "px"
        _dragon.setAttribute('class', 'dargon')
        _dragon.style.transform = "scale("+ -1 + ", 1)"
        _dragon.style.backgroundImage ="url('./img/assets/dragon_2.gif')";
        _dragon.style.backgroundSize ="cover";
        _dragon.style.zIndex = 5;
        container.appendChild(_dragon)


        _fuel = document.createElement('div')
        _fuel.style.position = "absolute"
        _fuel.style.top = 20 + "px"
        _fuel.style.right = 100 + "px"
        _fuel.style.width = 600 + "px"
        _fuel.style.height = 40 + "px"
        _fuel.style.border = "solid 2px black"
        _fuel.style.borderRadius = "16px"
        _fuel.setAttribute('class', 'fuel')
        _fuel.style.zIndex = 5;

        _blood = document.createElement('div')
        _blood.style.position = "absolute"
        _blood.style.top = 0 + "px"
        _blood.style.left = 0 + "px"
        _blood.style.width = _widthBlood + "%"
        _blood.style.height = "100%"
        _blood.style.border = "solid 1px red"
        _blood.style.borderRadius = "15px"
        _blood.style.backgroundColor = "red"
        _blood.setAttribute('class', 'blood')
        _blood.style.zIndex = 5;

        _fuel.appendChild(_blood)
        container.appendChild(_fuel)

        moveDrgon();
        
        ailes.loop = true;
        ailes.play()

        setInterval(()=>{

            if(_ball){
                touch();
            }

        }, 10)

    }

    var moveDrgon = function () {

        

        var tl = new TimelineLite();
        tl.to(_dragon, 4, {bottom:  _bottomDragon[Math.floor(Math.random() * 9)] + "px", right:  _rightDragon[Math.floor(Math.random() * 9)] + "px", onComplete: function (){

            moveDrgon();
            fire();
            dragonThrow.play();
        }});

        



    }

    var fire = function () {

        console.log("throw")
        var rDragon = _dragon.style.right;
        rDragon = rDragon.split('p');
        rDragon = parseInt(rDragon[0]);

        var bDragon = _dragon.style.bottom;
        bDragon = bDragon.split('p');
        bDragon = parseInt(bDragon[0]);


        _fire = document.createElement('div')
        _fire.style.position = "absolute"
        _fire.style.bottom =  bDragon + 370 +"px"
        _fire.style.right =  rDragon  + 840 + "px"
        _fire.style.width = 50 + "px"
        _fire.style.height = 50 + "px"
        _fire.setAttribute('class', 'fire')
        _fire.style.backgroundImage ="url('./img/assets/fire.png')";
        _fire.style.backgroundSize ="cover";
        _fire.style.zIndex = 5;
        container.appendChild(_fire)

        
        var tl = new TimelineLite();
        tl.to(_fire, 2, {bottom:  100 + "px", right:  _firePos[Math.floor(Math.random() * 9)] + "px", ease:Power0.easeNone,});
        tl.eventCallback("onComplete", removeFire, [_fire]);


        var id = setInterval(()=>{
            if( calledAvatar( _avatar, _fire) == true){

                _fire.remove();
                        var save = new Save();
                        save.die();
                        die = true;
                clearInterval(id);
            }
        }, 100);

    }

    var touch = function () {

        if( called(_dragon, _ball) == true){

            _widthBlood -= 20;

            _ball.remove();
            dragonCry.play();

            var tl = new TimelineLite();
            tl.to(_dragon, 0.1, {opacity:0.1})
            .to(_dragon, 0.1, {opacity:  1})
            .to(_dragon, 0.1, {opacity:  0.1})
            .to(_dragon, 0.1, {opacity:  1})
            .to(_dragon, 0.1, {opacity:  0.1})
            .to(_dragon, 0.1, {opacity:  1});

            _blood.style.width = _widthBlood + "%";

            if(_widthBlood < 10){



                ailes.pause();
                dragonDie.play();
                var tl = new TimelineLite();
                tl.to(_dragon, 2, {bottom: -1000 + "px"})
                tl.eventCallback("onComplete", removeDragon, [_dragon]);
            }



        }

    }

    var removeFire = function (elem) {

        elem.remove();

    }

    var removeDragon = function (elem){

        elem.remove();
        moveDrgon = null;
        _fuel.remove();
    }

    var calledAvatar = function (el1, el2) {
    el1.offsetBottom = el1.offsetTop + el1.offsetHeight;
    el1.offsetRight = el1.offsetLeft + el1.offsetWidth;
    el2.offsetBottom = el2.getBoundingClientRect().top + el2.getBoundingClientRect().height;
    el2.offsetRight = el2.getBoundingClientRect().left + el2.getBoundingClientRect().width;

    return !(   ((el1.offsetBottom - 30 ) < el2.getBoundingClientRect().top ) ||
                ((el1.offsetTop - 30 ) > el2.offsetBottom) ||
                ((el1.offsetRight - +30) < el2.getBoundingClientRect().left ) ||
                ((el1.offsetLeft ) > el2.offsetRight))
    }


    var called = function (el1, el2) {
    el1.offsetBottom = el1.offsetTop + el1.offsetHeight;
    el1.offsetRight = el1.offsetLeft + el1.offsetWidth;
    el2.offsetBottom = el2.getBoundingClientRect().top + el2.getBoundingClientRect().height;
    el2.offsetRight = el2.getBoundingClientRect().left + el2.getBoundingClientRect().width;

    return !(   ((el1.offsetBottom -400) < el2.getBoundingClientRect().top ) ||
                ((el1.offsetTop +375) > el2.offsetBottom) ||
                ((el1.offsetRight ) < el2.getBoundingClientRect().left ) ||
                ((el1.offsetLeft ) > el2.offsetRight))
    }




}

