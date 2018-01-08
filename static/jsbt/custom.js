$(document).ready(function() {
	
	/* select colors ======================================= */
	$('.product-colors > li > a').click(function() {
		$('.product-colors > li').removeClass('selected');
		$(this).parent().addClass('selected');
		return false;
	});
	
	if($('.product-colors a').length)
		$('.product-colors a').tooltip();


	/* off canvas menu ======================================= */
	$('.menu-link, .close-menu').on('click', function(){
		$('#wrap').toggleClass('menu-open');
		// $('.menu-wrapper').toggleClass('menu-show');
		return false;
	});	
	$(window).bind("resize",function(){
		// console.log($(this).width())
		if($(this).width() >768){
			$('div').removeClass('menu-open');
		}
	});

	$(document).on('click', '#showmore', function(){

		url = $(this).attr("href");
		this_obj = $(this);

		$.ajax({
			url: url,
			data: "ajax=1",
			type: "get",
			cache: false,
			beforeSend: function(){
				this_obj.hide();
			},
			success: function(respuesta){
				$(".showmore").remove();
				$('.productlist').append(respuesta);		
			}
		});

		return false
	});


	console.log(screen.height);

	$(".fancybox").fancybox({
        fitToView   : false,
        width       : screen.width+"px",
        height      : screen.height+"px",
        autoSize    : false,
        closeClick  : true,
        openEffect  : 'none',
        closeEffect : 'none',
        type: 'ajax',
        // helpers: {
        //         overlay: {
        //             locked: false,
        //             css: { 
        //                 'background': 'rgba(0,0,0,0.3)'
        //                 '-moz-background-size': 'cover',
        //                 '-webkit-background-size': 'cover',
        //                 '-o-background-size': 'cover'
        //                 } 
        //         }
        //     }

    });

});

