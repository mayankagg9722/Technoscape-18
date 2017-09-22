/*
 *
 *		STYLE-SWITHER.JS
 *
 */

$(document).ready(function() {
    
	var theme_options_content = ' \
		<h4>Change Theme Options</h4> \
		<a href="#"></a> \
		<br> \
		<h5>Change Color</h5> \
		<div class="colors clearfix"> \
			<a id="default" href="#" data-style="default"></a> \
			<a id="blue" href="#" data-style="blue"></a> \
			<a id="green" href="#" data-style="green"></a> \
			<a id="red" href="#" data-style="red"></a> \
			<a id="purple" href="#" data-style="purple"></a> \
		</div><!-- colors --> \
		<h5>Change Layout</h5> \
		<div class="layout clearfix"> \
			<a class="wide" href="#" data-style="wide"><img src="assets/plugins/theme-options/images/wide.png" alt="">Wide</a> \
			<a class="boxed" href="#" data-style="boxed"><img src="assets/plugins/theme-options/images/boxed.png" alt="">Boxed</a> \
		</div><!-- layout --> \
		<div class="boxed-bg"> \
			<h5>Change Bg Image</h5> \
			<div class="patterns clearfix"> \
				<a class="bg-pattern-1 thumb" href="#" data-style="bg-pattern-1"></a> \
				<a class="bg-pattern-2 thumb" href="#" data-style="bg-pattern-2"></a> \
				<a class="bg-pattern-3 thumb" href="#" data-style="bg-pattern-3"></a> \
				<a class="bg-pattern-4 thumb" href="#" data-style="bg-pattern-4"></a> \
				<a class="bg-pattern-5" href="#" data-style="bg-pattern-5"></a> \
			</div><!-- pattern --> \
			<h5>Change Bg Pattern</h5> \
			<div class="patterns clearfix"> \
				<a class="bg-pattern-6" href="#" data-style="bg-pattern-6"></a> \
				<a class="bg-pattern-7" href="#" data-style="bg-pattern-7"></a> \
				<a class="bg-pattern-8" href="#" data-style="bg-pattern-8"></a> \
				<a class="bg-pattern-9" href="#" data-style="bg-pattern-9"></a> \
				<a class="bg-pattern-10" href="#" data-style="bg-pattern-10"></a> \
			</div><!-- pattern --> \
			<h5>Change Bg Color</h5> \
			<div class="patterns clearfix"> \
				<a class="bg-pattern-11" href="#" data-style="bg-pattern-11"></a> \
				<a class="bg-pattern-12" href="#" data-style="bg-pattern-12"></a> \
				<a class="bg-pattern-13" href="#" data-style="bg-pattern-13"></a> \
				<a class="bg-pattern-14" href="#" data-style="bg-pattern-14"></a> \
				<a class="bg-pattern-15" href="#" data-style="bg-pattern-15"></a> \
			</div><!-- pattern --> \
		</div><!-- boxed-bg --> \
	\ ';
	
	$("#theme-options").prepend(theme_options_content);
	
	$("#theme-options > a").on("click", function(e) {
        
		e.preventDefault();
		$("#theme-options").toggleClass("open");
		
    });
	
	
	var link = $('link[data-style="styles"]');
	var oslo_colors = $.cookie('oslo_colors'),
		oslo_layout = $.cookie('oslo_layout'),		
		oslo_bg_pattern = $.cookie('oslo_bg_pattern');
		
	if ($.cookie('oslo_layout') == "wide" ){
		$(".boxed-bg").hide();
	} else {
		$(".boxed-bg").show();		
	}
		
	if (!($.cookie('oslo_colors'))) {
		
		$.cookie('oslo_colors', 'default', 365);
		oslo_colors = $.cookie('oslo_colors');
		$('#theme-options .colors a[data-style="'+oslo_colors+'"]');
		
	} else {
		
		link.attr('href','assets/css/alternative-styles/' + oslo_colors + '.css');
		$('#theme-options .colors a[data-style="'+oslo_colors+'"]');
		
	};

	if (!($.cookie('oslo_layout'))) {
		
		$.cookie('oslo_layout', 'wide', 365);
		oslo_layout = $.cookie('oslo_layout');
		$("body").addClass(oslo_layout);
		$('#theme-options .layout a[data-style="wide"]');
		
	} else {
		
		if (oslo_layout=="boxed") {
			
			$("body").addClass(oslo_layout);
			$("body").removeClass("wide");
			
		} else { 
		
			$("body").addClass(oslo_layout);
			$("body").removeClass("boxed bg-pattern-1 bg-pattern-2 bg-pattern-3 bg-pattern-4 bg-pattern-5 bg-pattern-6 bg-pattern-7 bg-pattern-8 bg-pattern-9 bg-pattern-10 bg-pattern-11 bg-pattern-12 bg-pattern-13 bg-pattern-14 bg-pattern-15");
			
		};
		
	};

	if ((oslo_layout =="boxed") && $.cookie('oslo_bg_pattern')) {
		
		$("body").removeClass("bg-pattern-1 bg-pattern-2 bg-pattern-3 bg-pattern-4 bg-pattern-5 bg-pattern-6 bg-pattern-7 bg-pattern-8 bg-pattern-9 bg-pattern-10 bg-pattern-11 bg-pattern-12 bg-pattern-13 bg-pattern-14 bg-pattern-15 wide");
		$("body").addClass(oslo_bg_pattern); 
		
	} else { 
	
		if (oslo_layout =="boxed") {
			
			$("body").removeClass("bg-pattern-1 bg-pattern-2 bg-pattern-3 bg-pattern-4 bg-pattern-5 bg-pattern-6 bg-pattern-7 bg-pattern-8 bg-pattern-9 bg-pattern-10 bg-pattern-11 bg-pattern-12 bg-pattern-13 bg-pattern-14 bg-pattern-15");
			
		} else {
			
			$("body").removeClass("bg-pattern-1 bg-pattern-2 bg-pattern-3 bg-pattern-4 bg-pattern-5 bg-pattern-6 bg-pattern-7 bg-pattern-8 bg-pattern-9 bg-pattern-10 bg-pattern-11 bg-pattern-12 bg-pattern-13 bg-pattern-14 bg-pattern-15 boxed");
			
		}
		
	};


	// CHANGE COLOR //
	$('#theme-options .colors a').on('click',function(e) {
		
		var $this = $(this),
			oslo_colors = $this.data('style');
			
		e.preventDefault();
		
		link.attr('href', 'assets/css/alternative-styles/' + oslo_colors + '.css');
		$.cookie('oslo_colors', oslo_colors, 365);
				
	});

	// BOXED LAYOUT //
	$('#theme-options .layout a.boxed').on('click',function(e) {
		
		e.preventDefault(); 
		
		$("body").addClass("boxed");
		$("body").removeClass("wide");
		$.cookie('oslo_layout', 'boxed', 365);
		
		if ($.cookie('oslo_bg_pattern')) {
			
			var oslo_bg_pattern = $.cookie('oslo_bg_pattern');
			
			$("body").removeClass("bg-pattern-1 bg-pattern-2 bg-pattern-3 bg-pattern-4 bg-pattern-5 bg-pattern-6 bg-pattern-7 bg-pattern-8 bg-pattern-9 bg-pattern-10 bg-pattern-11 bg-pattern-12 bg-pattern-13 bg-pattern-14 bg-pattern-15");
			$("body").addClass(oslo_bg_pattern);
			
		}
		
		document.location.reload();
		
	});

	// WIDE LAYOUT
	$('#theme-options .layout a.wide').on('click',function(e) {
		
		e.preventDefault(); 
		
		$("body").addClass("wide");
		$("body").removeClass("boxed bg-pattern-1 bg-pattern-2 bg-pattern-3 bg-pattern-4 bg-pattern-5 bg-pattern-6 bg-pattern-7 bg-pattern-8 bg-pattern-9 bg-pattern-10 bg-pattern-11 bg-pattern-12 bg-pattern-13 bg-pattern-14 bg-pattern-15");
		$.cookie('oslo_layout', 'wide', 365);
		
		document.location.reload();
		
	});
	
	// CHANGE PATTERNS //
	$('#theme-options .patterns a').on('click',function(e) {
		
		var $this = $(this),
			oslo_bg_pattern = $this.data('style');
			
		e.preventDefault();
			 
		$("body").removeClass("bg-pattern-1 bg-pattern-2 bg-pattern-3 bg-pattern-4 bg-pattern-5 bg-pattern-6 bg-pattern-7 bg-pattern-8 bg-pattern-9 bg-pattern-10 bg-pattern-11 bg-pattern-12 bg-pattern-13 bg-pattern-14 bg-pattern-15 wide");
		$("body").addClass(oslo_bg_pattern);
		$("#theme-options select").val("boxed");
		$.cookie('oslo_bg_pattern', oslo_bg_pattern, 365);
		
	});

});    	