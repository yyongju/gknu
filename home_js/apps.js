!function($){
	/*==================
	캐러젤 슬라이더
	===================*/
	
	$(function(){
		$('.carousel').carousel({
			interval: 5000
		});
	});
	
	$(function(){
		$('[rel=tooltip]').tooltip({
			delay:{show: 10, hide: 100}
		});
	});
	
	
}(window.jQuery);

