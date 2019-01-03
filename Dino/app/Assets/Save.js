var avatarBottom = null;
var assetsLeft = null;
var solLeft = null;
var planleft = null;
var _builder = null;
var compterAssets = 0;
var compterPlan = 0;
var compterSol = 0;
var die = false;
function Save () {

    this.init = function (){

        $avatarBottom = _avatar.style.bottom
        $avatarBottom = $avatarBottom.split('p')
        avatarBottom = parseInt($avatarBottom[0])

        assetsLeft = _assets.style.left
        assetsLeft = assetsLeft.split('p')
        assetsLeft = parseInt(assetsLeft[0])

        solLeft = _solContainer.style.left
        solLeft = solLeft.split('p')
        solLeft = parseInt(solLeft[0])

        planLeft = _plan.style.left
        planLeft = planLeft.split('p')
        planLeft = parseInt(planLeft[0])

        _builder = [avatarBottom, assetsLeft, solLeft, planLeft];

    }

    this.die = function (){


        _avatar.style.bottom = avatarBottom + "px";
        _assets.style.left = assetsLeft + 200 + "px";
        _solContainer.style.left = solLeft + 200 + "px";
        _plan.style.left = planLeft + 40 + "px";

        compterAssets += 200;
        compterSol += 200;
        compterPlan += 40;

        die = false;
        
    }

}