function Animaux () {

    this.init = function ($img, $left, $bottom , $size) {

        switch ($size){

            case "small":
                var $width = 80;
                var $height =  60;
            break;

            case "medieum":
                var $width = 160;
                var $height =  120;
            break;

            case "big":
                var $width = 240;
                var $height =  180;
            break;
        }

        var _animal = document.createElement('div')
        _animal.style.position = "absolute";
        _animal.style.bottom = $bottom + "px";
        _animal.style.left = $left + "px";
        _animal.style.width = $width + "px";
        _animal.style.height = $height + "px";
        _animal.style.backgroundImage = "url('./img/assets/" + $img + ".gif')";
        _animal.style.backgroundSize = "cover";

        _assets.appendChild(_animal)
    }
}