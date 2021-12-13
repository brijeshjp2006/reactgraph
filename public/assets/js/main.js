$(document).ready(function(){
  $('.left-menu-sec h4').click(function(){
      $(this).toggleClass('active');
      $(this).next().slideToggle();
  });
  $('.menu-toggle').click(function(){
      $(this).toggleClass('active');
      $(this).next().slideToggle();
  });
  $('.left-menu-toggle').click(function(){
      $(this).toggleClass('active');
      $(".overview-left-sec").toggleClass('active');
      $(".overlay-div").toggleClass('show');
  });
  $('.left-menu-sec li a').click(function(){
      $(".overview-right-sec").addClass('active');
      $(".overlay-div").addClass('show');
  });
   (function($){
		$(window).on("load",function(){
			
			$(".scroll-bar").mCustomScrollbar({
				theme:"minimal"
			});
			
		});
	})(jQuery);
  $('.tabs-nav a').on('click', function() {
  $([$(this).parent()[0], $($(this).data('href'))[0]]).addClass('active').siblings('.active').removeClass('active');
});
  
   $('.map-view-btn').click(function(){
      $(".map-view-sec").show();
      $(".diagram-view-sec").hide();
  });
   $('.diagram-view-btn').click(function(){
      $(".map-view-sec").hide();
      $(".diagram-view-sec").show();
  });
   $('.fst-sidebar-menu li a').click(function(){
	  $(".fst-sidebar-menu li a, .aeration-sidebar-menu li a").removeClass('active');
	  $(this).addClass('active');
      $(".aeration-sidebar-div").hide();
      $(".fst-sidebar-div").show();
  });
   $('.aeration-sidebar-menu li a').click(function(){
	  $(".aeration-sidebar-menu li a, .fst-sidebar-menu li a").removeClass('active');
	  $(this).addClass('active');
      $(".aeration-sidebar-div").show();
      $(".fst-sidebar-div").hide();
  });
  
});