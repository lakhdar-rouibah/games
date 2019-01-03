
var _solContainer = null;
function ContainerSol () {


    this.init = function($taille){

        _solContainer = document.createElement('div');
        _solContainer.style.position = 'absolute';
        _solContainer.style.left = '0px';
        _solContainer.style.bottom = '0px';
        _solContainer.style.width = $taille + '%';
        _solContainer.style.height = '80px';
        container.appendChild(_solContainer);
    }

    this.solContainerMove = function (x){

        compterSol += x;
        _solContainer.style.left = compterSol + "px"

    }

}