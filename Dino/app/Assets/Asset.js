
var _assets = null;
function Asset (){

    this.init = function ($large){

        _assets = document.createElement('div')
        _assets.style.position = "absolute";
        _assets.style.left = "0px";
        _assets.style.bottom = "80px";
        _assets.style.width = $large + "%";
        _assets.style.height = "630px";
        container.appendChild(_assets)
    }

    this.assetMove = function (x){

        compterAssets += x;
        _assets.style.left = compterAssets + "px"

    }
}