var nhsjs = nhsjs || (function($) {
	$(document).ready(function(){
		$('.annotated').on('click', function(e){
			$('.paper').fadeOut("fast", function(){

			});
			$('.selected-annotation').text($('.annotated').text());
			$('.discussion').fadeIn("fast", function(){
				$('.discussion').removeClass('hidden');
				$('.selected-annotation').removeClass('hidden');
			});
		});

		$('.selected-annotation').on('click', function(e){
			$('.paper').fadeIn("fast", function(){

			});
			$('.selected-annotation').text('');
			$('.discussion').fadeOut("fast", function(){
				$('.discussion').addClass('hidden');
				$('.selected-annotation').addClass('hidden');
			});
		});
		// $('.selected-annotation').on('click', function(e){
		// 		$('.paper').fadeOut("fast", function(){

		// 		});
		// 		$('.selected-annotation').text($('.annotated').text());
		// 		$('.discussion').fadeOut("fast", function(){
		// 			$('.selected-annotation').removeClass('hidden');
		// 		});
		// 	});
		// });
	});
})($);