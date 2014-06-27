(function($){
	var livitation_stoper 	= false;
	var $head ;
	var $head_shadow;
	var startLivitation = function(vect,rastr){
		if(!livitation_stoper){
			$head_shadow.animate({width:vect+'=100', height:vect+'=10', marginTop:rastr+'=5'},4000);
			$head.animate({marginTop:vect+'=30'},4000,function(){
				if(vect=='+'){
					startLivitation('-','+');
				}else{
					startLivitation('+','-');
				}
			});
		}
	};
	$(document).ready(function(){
		$head 				= $('#head').find('img');
        $head_shadow		= $('#head_shadow').find('img');
		startLivitation('+','-');
	});

	$(window).load(function(){
		
	});

}(jQuery));
