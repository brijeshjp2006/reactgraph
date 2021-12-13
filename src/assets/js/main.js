jQuery(document).ready(function(){
  jQuery('.left-menu-sec h4').click(function(){
      jQuery(this).toggleClass('active');
      jQuery(this).next().slideToggle();
  });
  jQuery('.menu-toggle').click(function(){
      jQuery(this).toggleClass('active');
      jQuery(this).next().slideToggle();
  });
  jQuery('.left-menu-toggle').click(function(){
      jQuery(this).toggleClass('active');
     jQuery(".overview-left-sec").toggleClass('active');
      jQuery(".overlay-div").toggleClass('show');
  });
  jQuery('.left-menu-sec li a').click(function(){
      jQuery(".overview-right-sec").addClass('active');
      jQuery(".overlay-div").addClass('show');
  });
   (function($){
		jQuery(window).on("load",function(){
			
			jQuery(".scroll-bar").mCustomScrollbar({
				theme:"minimal"
			});
			
		});
	})(jQuery);
  jQuery('.tabs-nav a').on('click', function() {
  jQuery([jQuery(this).parent()[0], jQuery($(this).data('href'))[0]]).addClass('active').siblings('.active').removeClass('active');
});
  
   jQuery('.map-view-btn').click(function(){
      jQuery(".map-view-sec").show();
      jQuery(".diagram-view-sec").hide();
  });
   jQuery('.diagram-view-btn').click(function(){
      jQuery(".map-view-sec").hide();
      jQuery(".diagram-view-sec").show();
  });
   jQuery('.fst-sidebar-menu li a').click(function(){
	  jQuery(".fst-sidebar-menu li a, .aeration-sidebar-menu li a").removeClass('active');
	  jQuery(this).addClass('active');
      jQuery(".aeration-sidebar-div").hide();
      jQuery(".fst-sidebar-div").show();
  });
   jQuery('.aeration-sidebar-menu li a').click(function(){
	  jQuery(".aeration-sidebar-menu li a, .fst-sidebar-menu li a").removeClass('active');
	  jQuery(this).addClass('active');
      jQuery(".aeration-sidebar-div").show();
      jQuery(".fst-sidebar-div").hide();
  });
  
});