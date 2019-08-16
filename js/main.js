window.onload =  function() {
	var StyleBack = {'background-color': 'rgba(199, 203, 209, .9)', 
	'z-index': '2',
	'position': 'absolute', 
	'min-width': '100%',
	'min-height': '100%',
	'display': 'flex',                                     
};
var hide_smf = {
	'display': '+none',
};  
var show_smf =   {
	'display': 'flex',
}; 
var anime_batom = {"box-shadow": "0 0 10px rgba(0,0,0,0.5)",
"border-radius": "32px",
"background-color": "red"};

//---------------------------------АНІМАЦІЯ КНОПКИ ФОРМИ ЗВОРОТНЬОГО ЗВІЗКУ-----------------------//                                              
$(".form_booton").hover(function () {
	$(this).addClass('animated infinite bounceOutLeft')
	.css("background-color", "red"); }, 

	function(){setTimeout(()=>
		{$(this).removeClass('animated infinite bounceOutLeft')
		.css("background-color", "rgba(243, 233, 207, 0.7)")}
		, 3000)});
//--------------------------------вІДКРИВАННЯ ВІКНА ФОРМИ--------------//
$(".form_booton").click(()=>{
	var width_wrap = $("body,html").width();
	var width_form = $(".hiden").width();
	$(".hiden").css({"display": "flex",
		"z-index": 3,
		"right": (width_wrap/2)-(width_form/2)});
	$("body").prepend("<div id='wraper_top'></div>");
	$("#wraper_top").css(StyleBack); 

});
$(".hiden span").click(()=>{$(".hiden").css("display", "none");
	$("#wraper_top").remove()
});


//---------------------------------------------ЗМІНА ОБЄКТІВ ПО СКРОЛУ-----------------------//

var footer_icon = $("footer i");
var fixet_header = $("header .wraper");

// $(window).scroll(
// 	(e)=>{ 
		
// 		$(this).scrollTop() >= 200 
// 		? $(".botom_on_top").show(500)

// 		: $(".botom_on_top").hide(500);

//      ($(this).scrollTop() <= 260 && $("body, html").width() >= 800 ) 
// 		? $(fixet_header).fadeIn(1000)  

// 		: $(fixet_header).fadeOut(1000);
// 		// function () { $(this).removeAttr("style")

		
//       $(this).scrollTop() >=800
// 		? 
// 		($(blockNews1).addClass("animated bounceInLeft"),
// 			$(blockNews3).addClass("animated bounceInRight"),
// 			$(blockNews2).addClass("animated pulse"))
// 		:
// 		($(blockNews1).removeClass("animated bounceInLeft").removeAttr('style'),
// 			$(blockNews3).removeClass("animated bounceInRight").removeAttr('style'),
// 			$(blockNews2).removeClass("animated pulse")).removeAttr('style');

// 	});

//----------------------АНІМАЦІЯ ПОВІЛЬНОГО ПЕРЕХОДУ ТОП СТОРІНКИ---------------///

$(".botom_on_top").click((e)=> {

	e.preventDefault();
	$('body,html').animate({scrollTop: 0}, 1500);
})

//------------------------------ТЕКСТ ДЛЯ БЛОКІВ З НОВИНАМИ--------------////
  
       $(".block_news").each(function (item, elem)
              { 
				$(elem).find("button").click( ()=>{Block_show_next(this)});	                   
				});
	          
	function Block_show_next (e) {
           $("html, body").width() >= 1300 
		 ? ( width_page = "-26em" )  : (width_page = "0em");
            $(e).find("p").filter(":last").css({display: "flex"});
		   
		 { 
			//  .find("p").filter(":last").css("backgroundcolor", "black")
        // $(this).parent().css({marginBottom: width_page}).animate({minHeight: "43em"}, 500); .css("display")
		// 	$(this).prev().find("p").filter(":last")
		// 	.css({ 'display': 'flex'}).animate({opacity: 1, 
		// 	                                     minHeight: "20em" }, 1000, function() {
		// 	                                     });
		// 	$(this).children().filter("span").text("Меньше...");

      	//  }        
			// else 	{
			// 	var uuuu = height_block_news.toString();
			// 	$(this).parent().animate({minHeight: uuuu}, 1000,  function () {
			// 		$(this).removeAttr('style')});
			// 	$(this).prev().find("p").filter(":last")
			// 	.animate({minHeight: "0em", 
			// 		opacity: 0.1}, 1000, function () {
						
			// 			$(this).removeAttr('style');
			// 							}
			// 		);
			//    $(this).children().filter("span").text("Більше...");
			   
			 }
			}

		
}