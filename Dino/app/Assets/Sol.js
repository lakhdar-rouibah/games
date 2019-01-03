var _sol = null;
var _solPos = null;
var _builder = null;
function Sol () {


    var vide = false;
    var _this= this;

     /**
     * function to create land
     * @param {int} $large 
     */
    this.init = function ( $img, $large, $left, $top){

        var $bottom = $top;
        _solPos = $bottom;

        
        _sol = document.createElement('div')
        _sol.style.position = "absolute";
        _sol.style.left = $left + "px";
        _sol.style.bottom = _solPos + "px";
        _sol.style.width = $large + "%";
        _sol.style.height = "80px";
        _sol.setAttribute('class', 'sol');
        _sol.style.backgroundImage ="url('./img/foret/Tiles/" + $img + ".png')";
        _solContainer.appendChild(_sol)

        _solEnd = document.createElement('div')
        _solEnd.style.position = "absolute";
        _solEnd.style.left = _sol.offsetWidth +"px";
        _solEnd.style.bottom = "0px";
        _solEnd.style.width = 128 + "px";
        _solEnd.style.height = "80px";
        _solEnd.style.backgroundImage ="url('./img/foret/Tiles/" + 15 + ".png')";
        _sol.appendChild(_solEnd)

        _solStart = document.createElement('div')
        _solStart.style.position = "absolute";
        _solStart.style.left = - 100 +"px";
        _solStart.style.bottom = "0px";
        _solStart.style.width = 100 + "px";
        _solStart.style.height = "80px";
        _solStart.style.backgroundImage ="url('./img/foret/Tiles/" + 13 + ".png')";
        _sol.appendChild(_solStart)

        
    }

}