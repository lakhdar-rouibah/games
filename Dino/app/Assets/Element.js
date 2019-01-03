function Element () {

    this.init = function ($img, $left, $width, $height, $zIndex) {

        var $bottom = null;

        switch ($zIndex){

            case "back":
                $bottom = -25;
                $place = 10;
            break;
            case "end":
                $bottom = 0;
                $place = 1;
            break;

        }

        var _elem = document.createElement('div')
        _elem.style.position = "absolute";
        _elem.style.bottom = $bottom + "px";
        _elem.style.left = $left + "px";
        _elem.style.width = $width + "px";
        _elem.style.height = $height + "px";
        _elem.style.backgroundImage = "url('./img/foret/Object/" + $img + ".png')";
        _elem.style.backgroundSize = "cover";
        _elem.style.zIndex = $place;

        _assets.appendChild(_elem)
    }

}