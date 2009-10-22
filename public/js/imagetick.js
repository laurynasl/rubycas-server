/******************************************

Image Tick v1.0 for jQuery
==========================================
Provides an unobtrusive approach to image
based checkboxes and radio buttons
------------------------------------------
by Jordan Boesch 
www.boedesign.com
June 8, 2008

******************************************/

(function($){
		  
	$.fn.imageTick = function(options) {
		
		var defaults = {	
			tick_image_path: "images/radio.gif",
			no_tick_image_path: "no_images/radio.gif",
			image_tick_class: "ticks_" + Math.floor(Math.random()),
			hide_radios_checkboxes: false
		};
	  	
		var opt = $.extend(defaults, options);
		
		this.each(function(){
			
			var obj = $(this);
			var type = obj.attr('type'); // radio or checkbox
			
			// hide them and store an image background
			var id = obj.attr('id');
			var imgHTML = '<img src="' + opt.no_tick_image_path + '" alt="no_tick" class="' + opt.image_tick_class + '" id="tick_img_' + id + '" />';
			
			obj.before(imgHTML);
			if(!opt.hide_radios_checkboxes){
				obj.css('display','none');
			}
			
			// if something has a checked state when the page was loaded
			if(obj.attr('checked')){
				$("#tick_img_" + id).attr('src', opt.tick_image_path);
			}
			
			// if we're deadling with radio buttons
			if(type == 'radio'){
				
				// if we click on the image
				$("#tick_img_"+id).click(function(){
					$("." + opt.image_tick_class).attr('src', opt.no_tick_image_path);
					$("#" + id).trigger("click");
					$(this).attr('src', opt.tick_image_path);
				});
				
				// if we click on the label
				$("label[for='" + id + "']").click(function(){
					$("." + opt.image_tick_class).attr('src', opt.no_tick_image_path);
					$("#" + id).trigger("click");
					$("#tick_img_" + id).attr('src', opt.tick_image_path);									
				});
				
			}
			
			// if we're deadling with checkboxes
			else if(type == 'checkbox'){
				
				$("#tick_img_" + id).click(function(){
					$("#" + id).trigger("click");
					if($(this).attr('src') == opt.no_tick_image_path){
						$(this).attr('src', opt.tick_image_path);
					}
					else {
						$(this).attr('src', opt.no_tick_image_path);	
					}
					
				});
				
				// if we click on the label
				$("label[for='" + id + "']").click(function(){
					if($("#tick_img_" + id).attr('src') == opt.no_tick_image_path){
						$("#tick_img_" + id).attr('src', opt.tick_image_path);
					}
					else {
						$("#tick_img_" + id).attr('src', opt.no_tick_image_path);	
					}								
				});
				
			}
			
		});
	}
	
})(jQuery);
