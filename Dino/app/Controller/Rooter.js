
function Rooter (){

    this.init = function ($page){

        $( ".row-menu" ).load( "app/Menu/Menu.html", function() {

            display($page);

        });
    }

    var display = function ($page){

        $( ".row-container" ).load( "app/" + $page + "/" + $page + ".html", function() {
            $.getScript( "app/" + $page + "/" + $page + ".js", function (){
                keys = new Keys();
                keys.init(true);
            });

        });
    }
}

var rooter = new Rooter();
rooter.init('Level1')

