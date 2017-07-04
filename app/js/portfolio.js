	$(function() {

		var newSelection = "";

		$(".portfolio-filter-nav div").click(function(){

			$(".all-flavors").fadeTo(200, 0.10);

			$(".portfolio-filter-nav div").removeClass("current");
			$(this).addClass("current");

			newSelection = $(this).attr("rel");

			$(".flavor").not("."+newSelection).slideUp();
			$("."+newSelection).slideDown();

			$("#all-flavors").fadeTo(600, 1);
		});


		// $(function() {
		// 	alert ('jQuery подключен и отлично работает!');
		// });
	});
