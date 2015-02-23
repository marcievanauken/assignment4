			$(function () {
				$(".nav a").click(function (i) { 
					i.preventDefault(); 
					$(".nav a").addClass("active").not(this).removeClass("active"); 
				
				});
			});