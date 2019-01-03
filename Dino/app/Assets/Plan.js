
var _plan = null; 
var direction = 1;
var play = true;
function Plan () {

    /**
     * function create avatar
     */
    this.init = function ($img, $large){

        _plan = document.createElement('div')
        _plan.style.position = "absolute"
        _plan.style.top = "0px"
        _plan.style.left = "-100%"
        _plan.style.width = $large + "%"
        _plan.style.height = "700px"
        _plan.style.backgroundImage ="url('./img/foret/BG/" + $img + ".png')";
        container.appendChild(_plan)
    }

    this.planMove = function (x){

        compterPlan += x;
        _plan.style.left = compterPlan + "px"

    }

}