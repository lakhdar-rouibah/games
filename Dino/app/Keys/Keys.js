

function Keys (){


	this.play == true
	var _this = this;
	var _speed = 30;

    this.init = function (){

		myAvatar = new Avatar();
		myContSol = new ContainerSol();
		gravity = new Gravity();
		myAsset = new Asset();
		myPlan = new Plan();
		myCoin = new Coin();
		myBlason = new Blason();
		mySmallMonster = new SmallMonster();

		
			KeyboardController({
				37: function() { left(); },
				38: function() { if(bottonUp == true ) up(); },
				39: function() { right(); },
				40: function() { down(); },
				65: function() { if(ballThrow == false) attack(); }
			}, 40);


			pressedl = 0;
			pressedu = 0;
			pressedr = 0;
			pressedd = 0;
			presseda = 0;



    }
    /***
     * function listener keyboard
     */
    function KeyboardController(keys, repeat) {
	    
	    var timers= {};

	    document.onkeydown= function(event) {

			if(_this.play != false){
				var key= (event || window.event).keyCode;
				if (!(key in keys))
					return true;
				if (!(key in timers)) {
					timers[key]= null;
					keys[key]();
					if (repeat!==0)
						timers[key]= setInterval(function (){
							
							keys[key] ();

							if (_this.play == false)
							clearInterval(timers[key]);
							// delete timers[key];
							
						}, repeat);
				}
				return false;
			}
	    };

	    document.onkeyup= function(event) {

	        	var key= (event || window.event).keyCode;
				
				if (key in timers) {
					if (timers[key]!==null)
						clearInterval(timers[key]);
					delete timers[key];
				}

	    };

	    window.onblur= function() {
				for (key in timers)
					if (timers[key]!==null)
						clearInterval(timers[key]);
				timers= {};

	    };
	};


    /**
     * function when key is down
     * @param {*} e 
     */
	function Down(e) { 
	        cxc = e.keyCode;
	        if(cxc == 37)
	            pressedl = 1;
	        if(cxc == 38 )
	            pressedu = 1;
	        if(cxc == 39)
	            pressedr = 1;
	        if(cxc == 40)
	            pressedd = 1;
	        if(cxc == 65)
	            presseda = 1;
	}

    /**
     * function when key is up
     * @param {*} e 
     */
	function Up(e) {
	        cxc = e.keyCode;
	        if(cxc == 37)
	            pressedl = 0;
	        if(cxc == 38)
	            pressedu = 0;
	        if(cxc == 39)
	            pressedr = 0;
	        if(cxc == 40)
	            pressedd = 0;
	        if(cxc == 65)
	            presseda = 0;
	}

	    /**
     * function up
     */
	
    up = function() {

		if(die == false){
			bottonUp = false

			myAvatar.avatarJump ('Jump', 12) 
			myCoin.checkCoin();
			gravity.init(_avatar);
			mySmallMonster.checkSmallMonster();
		}
	}



    /**
     * function left
     */
	var left = function() {

		

		direction = -1;
		if(die == false){
			if( jump == true){

				var xSol = _speed;
				var xPlan = _speed/5;
			}else {

				var xSol = _speed/2;
				var xPlan = _speed/10;
			}
			myAvatar.avatarMove("Walk", 10, direction )
			myContSol.solContainerMove(xSol)
			gravity.init(_avatar);
			myAsset.assetMove(xSol)
			myPlan.planMove(xPlan)
			myCoin.checkCoin();
			myBlason.checkBlason();
			mySmallMonster.checkSmallMonster();
		}
	}

    /**
     * function right
     */
	var right = function () {

		

		direction = 1;
		if(die == false){
			if( jump == true){

				var xSol = _speed;
				var xPlan = _speed/5;
			}else {

				var xSol = _speed/2;
				var xPlan = _speed/10;
			}

			if(land == false){
				myAvatar.avatarMove("Walk", 10, direction )
			}else {
				myAvatar.avatarMove("Walk", 1, direction )
			}
			myContSol.solContainerMove(-xSol)
			gravity.init(_avatar);
			myAsset.assetMove(-xSol)
			myPlan.planMove(-xPlan)
			myCoin.checkCoin();
			myBlason.checkBlason();
			mySmallMonster.checkSmallMonster();
		}
	}

    /**
     * function down
     */
	var down = function () {
        console.log('down')
	}
    
    /**
     * function attack
     */
	var attack = function (){
		if(die == false){
			ballThrow = true;
			var attack = new Ball();
			attack.init();
			mySmallMonster.smallBall();
		}
    }

}