


var compterPlan = 0;
var n = 0;

level = null;

var container = document.querySelector('.col-container');
var ecran = 100;
var plan = null;
var sol = null;
var sol2 = null;
var avatar = null;
var relax = document.getElementById('relax')


var build = false;


function Level1 () {


    var taillePlan = 10 * ecran;
    var _vh = 500;
    var _haut = 250;
    var _bas = 0;
    this.init = function (){

        plan = new Plan();
        plan.init('BG', taillePlan);

        //relax.play();
        

        avatar = new Avatar();
        avatar.init('Idle', 300, 50, 140, 140)

        containerSol = new ContainerSol();
        containerSol.init(taillePlan)
        

        var asset = new Asset();
        asset.init(300)


        // premier sol
        var sol1 = new Sol();
        sol1.init(14, 1/2 * ecran /10, 0, _bas);

        var plqDir = new Element();
        plqDir.init('sign_2',200, 80, 80, 'end')

        var stone = new Element();
        stone.init('stone', 400, 180, 80, 'back')

        var piwi = new Animaux();
        piwi.init('coribi', 500, 400 , "small")

        var coin1 = new Coin();
        coin1.init('coin', 450, 50, 50, 'niveau', 10, 10)

        // deuxième sol 
        var sol2 = new Sol();
        sol2.init(14, 1/12 * ecran /10, 950, _haut);

        var coin3 = new Coin();
        coin3.init('coin', 950, 50, 50, 'haut', 3, 10)

        var small = new SmallMonster();
        small.init(1450, 100, 100, 'guepe', 'haut' , 'horizontal')


        // troisième sol
        var sol2 = new Sol();
        sol2.init(14, 1/2 * ecran /10, 1200, _bas);

        var small = new SmallMonster();
        small.init(1500, 150, 150, 'spider', 'sol' , 'horizontal')

        var tree = new Element();
        tree.init('tree_2',  1300, 360, 380, 'back');

        var mushRed = new Element();
        mushRed.init('mushRed',  1200, 70, 50, 'end');

        var bush1 = new Element();
        bush1.init('Bush (1)',  1600, 160, 80, 'end');

        var coin3 = new Coin();
        coin3.init('coin', 1600, 50, 50, 'niveau', 5, 10)

        // var crapeau = new Animaux();
        // crapeau.init('frog', 1500, 0 , "medieum")

        // quatrième sol
        var sol4 = new Sol();
        sol4.init(14, 1/12 * ecran /10, 1400, _vh);

        var coin4 = new Coin();
        coin4.init('coin', 1400, 50, 50, 'air', 3, 10)

        // cinqième sol
        var sol4 = new Sol();
        sol4.init(14, 1/2 * ecran /10, 2400, _bas);

        var coin5 = new Coin();
        coin5.init('coin', 2600, 50, 50, 'sol', 8, 10)

        var bush1 = new Element();
        bush1.init('ble',  2800, 320, 160, 'end');

        var small = new SmallMonster();
        small.init(2800, 150, 150, 'guepe', 'sol' , 'horizontal')

        // sixieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/8 * ecran /10, 3600, _haut);

        var coin5 = new Coin();
        coin5.init('coin', 3600, 50, 50, 'haut', 5, 10)

        var small = new SmallMonster();
        small.init(3800, 150, 150, 'guepe', 'haut' , 'horizontal')


        // septieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/4 * ecran /10, 4200, _bas);

        var coin5 = new Coin();
        coin5.init('coin', 4200, 50, 50, 'niveau', 9, 10)

        var small = new SmallMonster();
        small.init(4200, 100, 100, 'guepe', 'haut' , 'horizontal')

        // huitieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/4 * ecran /10, 4900, _haut);

        var small = new SmallMonster();
        small.init(4900, 100, 100, 'guepe', 'haut' , 'horizontal')

        var coin5 = new Coin();
        coin5.init('coin', 4900, 50, 50, 'haut', 9, 10)

        // huitieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/8 * ecran /10, 5400, _vh);

        var small = new SmallMonster();
        small.init(5400, 100, 100, 'guepe', 'air' , 'horizontal')

        var coin5 = new Coin();
        coin5.init('coin', 5400, 50, 50, 'air', 5, 10)

        // huitieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/4 * ecran /10, 6200, _bas);

        var small = new SmallMonster();
        small.init(6500, 150, 150, 'spider', 'sol' , 'horizontal')

        var coin5 = new Coin();
        coin5.init('coin', 6200, 50, 50, 'sol', 8, 10)

        var coin5 = new Coin();
        coin5.init('coin', 6200, 50, 50, 'niveau', 8, 10)


        // huitieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/2 * ecran /10, 7000, _bas);

        var coin5 = new Coin();
        coin5.init('coin', 7200, 50, 50, 'niveau', 10, 10)

        var small = new SmallMonster();
        small.init(7200, 150, 150, 'spider', 'sol' , 'horizontal')

        // huitieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/12 * ecran /10, 7400, _haut);

        var small = new SmallMonster();
        small.init(7400, 100, 100, 'guepe', 'haut' , 'horizontal')

        var small = new SmallMonster();
        small.init(7600, 100, 100, 'guepe', 'haut' , 'horizontal')

        var coin5 = new Coin();
        coin5.init('coin', 7400, 50, 50, 'haut', 4, 10)

        // huitieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/12 * ecran /10, 7800, _vh);

        var coin5 = new Coin();
        coin5.init('coin', 7800, 50, 50, 'air', 4, 10)

        var small = new SmallMonster();
        small.init(7800, 100, 100, 'guepe', 'air' , 'horizontal')

        // huitieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/2 * ecran /10, 8800, _bas);

        var small = new SmallMonster();
        small.init(9100, 150, 150, 'spider', 'sol' , 'horizontal')

        var coin5 = new Coin();
        coin5.init('coin', 8800, 50, 50, 'sol', 4, 10)
        var coin5 = new Coin();
        coin5.init('coin', 8800, 50, 50, 'niveau', 4, 10)

        var coin5 = new Coin();
        coin5.init('coin', 9400, 50, 50, 'sol', 4, 10)
        var coin5 = new Coin();
        coin5.init('coin', 9400, 50, 50, 'niveau', 4, 10)


        // huitieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/4 * ecran /10, 10000, _bas);

        var coin5 = new Coin();
        coin5.init('coin', 10000, 50, 50, 'sol', 8, 10)

        var small = new SmallMonster();
        small.init(10200, 150, 150, 'spider', 'sol' , 'horizontal')

        var small = new SmallMonster();
        small.init(10500, 150, 150, 'spider', 'sol' , 'horizontal')


        // huitieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/4 * ecran /10, 10600, _haut);

        var coin5 = new Coin();
        coin5.init('coin', 10600, 50, 50, 'haut', 8, 10)

        var small = new SmallMonster();
        small.init(10600, 150, 150, 'guepe', 'haut' , 'horizontal')


        // huitieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/4 * ecran /10, 11600, _haut);

        var coin5 = new Coin();
        coin5.init('coin', 11600, 50, 50, 'air', 8, 10)


        var small = new SmallMonster();
        small.init(11600, 150, 150, 'guepe', 'haut' , 'horizontal')
        // huitieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/6 * ecran /10, 12600, _haut);

        var coin5 = new Coin();
        coin5.init('coin', 12600, 50, 50, 'haut', 6, 10)


        var small = new SmallMonster();
        small.init(12600, 150, 150, 'guepe', 'haut' , 'horizontal')


        // huitieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/6 * ecran /10, 13500, _haut);

        var coin5 = new Coin();
        coin5.init('coin', 13500, 50, 50, 'haut', 6, 10)

        var small = new SmallMonster();
        small.init(13600, 150, 150, 'guepe', 'haut' , 'horizontal')


        // huitieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/6 * ecran /10, 14200, _vh);


        var small = new SmallMonster();
        small.init(14300, 150, 150, 'guepe', 'air' , 'horizontal')

        var coin5 = new Coin();
        coin5.init('coin', 14200, 50, 50, 'air', 6, 10)

        // huitieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/6 * ecran /10, 14800, _haut);


        var small = new SmallMonster();
        small.init(14800, 150, 150, 'guepe', 'haut' , 'horizontal')

        var coin5 = new Coin();
        coin5.init('coin', 14800, 50, 50, 'haut', 6, 10)


        // huitieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/6 * ecran /10, 15600, _haut);


        var small = new SmallMonster();
        small.init(15600, 150, 150, 'guepe', 'haut' , 'horizontal')

        var coin5 = new Coin();
        coin5.init('coin', 15600, 50, 50, 'haut', 6, 10)
        var coin5 = new Coin();
        coin5.init('coin', 15600, 50, 50, 'air', 6, 10)


        // huitieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/6 * ecran /10, 16200, _bas);

        var coin5 = new Coin();
        coin5.init('coin', 16200, 50, 50, 'niveau', 6, 10)
        var coin5 = new Coin();
        coin5.init('coin', 16200, 50, 50, 'sol', 6, 10)

        var small = new SmallMonster();
        small.init(16400, 150, 150, 'spider', 'sol' , 'horizontal')


        // huitieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/6 * ecran /10, 17000, _bas);

        var coin5 = new Coin();
        coin5.init('coin', 17000, 50, 50, 'niveau', 6, 10)


        // huitieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/2 * ecran /10, 17700, _haut);

        var coin5 = new Coin();
        coin5.init('coin', 17700, 50, 50, 'haut', 10, 10)

        var small = new SmallMonster();
        small.init(17900, 150, 150, 'guepe', 'haut' , 'horizontal')

        // huitieme sol
        var sol4 = new Sol();
        sol4.init(14, 1/2 * ecran /10, 18700, _bas);

        var coin5 = new Coin();
        coin5.init('coin', 18700, 50, 50, 'niveau', 10, 10)

        var small = new SmallMonster();
        small.init(19000, 150, 150, 'spider', 'sol' , 'horizontal')


        // huitieme sol
        var sol4 = new Sol();
        sol4.init(14, 4 * ecran /10, 19200, _bas);

        var coin5 = new Coin();
        coin5.init('coin', 20000, 50, 50, 'niveau', 10, 10)

        var small = new SmallMonster();
        small.init(20200, 150, 150, 'spider', 'sol' , 'horizontal')

        var blason = new Blason()
        blason.init(20200, 50, 50, 60, 'blason')


    }







    //======================================================= assets =====================================================





}

level = new Level1();
level.init();




