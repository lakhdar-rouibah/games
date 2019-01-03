var keys = null
var bottonUp = false;
var land = false;
function Gravity () {

    var _this = this;

    this.init = function($avatar){

        
        var vide;
        var $sol = document.querySelectorAll('.sol')

        for(var i = 0; i < $sol.length; i++){

            if(called($avatar, $sol[i]) == true){


                if(life == true){
                    var save = new Save();
                    save.init();
                }

                land = false;
                _solPos = $sol[i].style.bottom
                _solPos = _solPos.split('p')
                _solPos = parseInt(_solPos[0])

                $avatar.style.bottom = _solPos + 50 + "px"
                vide = false
                bottonUp = true;

        

                break
                
            }else if(called($avatar, $sol[i]) == false  && jump == false){

                vide = true;
                land = true;

            }
        }

        if(vide == true){

                $avatarPos = $avatar.style.bottom
                $avatarPos = $avatarPos.split('p')
                $avatarPos = parseInt($avatarPos[0])

                var tl = new TimelineLite();
                tl.to($avatar, 0.01, {bottom:  $avatarPos - 10 + "px", ease:Power0.easeNone});
                tl.eventCallback("onComplete", build, [$avatar, $avatarPos]);

                
        }



    }

    build = function ($avatar, $avatarPos){

        if($avatarPos >= -180){

            _this.init($avatar);
        }

        if(die == false ){
            if($avatarPos < -10){

                setTimeout(function(){
                        var save = new Save();
                        save.die();
                }, 3000)

                die = true;
            }

        }
        
    }



    var called = function (el1, el2) {
        el1.offsetBottom = el1.getBoundingClientRect().top  + el1.getBoundingClientRect().height;
        el1.offsetRight = el1.getBoundingClientRect().left + el1.getBoundingClientRect().width;
        el2.offsetBottom = el2.getBoundingClientRect().top + el2.getBoundingClientRect().height;
        el2.offsetRight = el2.getBoundingClientRect().left + el2.getBoundingClientRect().width;

        return !(   ((el1.offsetBottom) < el2.getBoundingClientRect().top ) ||
                    ((el1.offsetTop +50 ) > ( el2.offsetBottom -50)) ||
                    ((el1.offsetRight + 70)   < el2.getBoundingClientRect().left ) ||
                    ((el1.offsetLeft  - 70)  > el2.offsetRight))
    }
}