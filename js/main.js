window.onload =  function() {
	var StyleBack = {'background-color': 'rgba(27,223,230,0.8)', 
	'z-index': '2',
	'position': 'absolute', 
	'min-width': '100%',
	'min-height': '100%',
	'display': 'flex',                                     
};
var hide_smf = {
	'display': 'none',
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
		.css("background-color", "darkgreen")}
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

var blockNews1 = $(".top_block .block_news:first-child");
var blockNews3 = $(".top_block .block_news:last-child");
var blockNews2 = $(".top_block .block_news:nth-child(2)");
var footer_icon = $("footer i");

$(window).scroll(
	(e)=>{ 
		
		$(this).scrollTop() >= 200 
		? $(".botom_on_top").show(500)

		: $(".botom_on_top").hide(500);


		$(this).scrollTop() >= 700
		? 
		($(blockNews1).addClass("animated bounceInLeft"),
			$(blockNews3).addClass("animated bounceInRight"),
			$(blockNews2).addClass("animated pulse"))
		:
		($(blockNews1).removeClass("animated bounceInLeft"),
			$(blockNews3).removeClass("animated bounceInRight"),
			$(blockNews2).removeClass("animated pulse"));

      $(this).scrollTop() >= 700
		? 
		($(blockNews1).addClass("animated bounceInLeft"),
			$(blockNews3).addClass("animated bounceInRight"),
			$(blockNews2).addClass("animated pulse"))
		:
		($(blockNews1).removeClass("animated bounceInLeft"),
			$(blockNews3).removeClass("animated bounceInRight"),
			$(blockNews2).removeClass("animated pulse"));

	});

//----------------------АНІМАЦІЯ ПОВІЛЬНОГО ПЕРЕХОДУ ТОП СТОРІНКИ---------------///

$(".botom_on_top").click((e)=> {

	e.preventDefault();
	$('body,html').animate({scrollTop: 0}, 1500);
})

//------------------------------ТЕКСТ ДЛЯ БЛОКІВ З НОВИНАМИ--------------////

$(".block_news button").click(
	function () {
		if ($(this).prev().find("p").filter(":last").css("display") == "none" )
		{     
			$(this).prev().find("p").filter(":last")
			.css(show_smf)
			.animate({"height": "20em",
				opacity: 1 }, 2000) }
			else 	{
				$(this).prev().find("p").filter(":last")
				.animate({"height": "0em", 
					opacity: 0.1}, 2000, function () {
						$(this).css(hide_smf);
					}
					) 
			}

		});


   // if ($(this).previousElementSibling.lastElementChild.css("display") == "none") 
   //    {$(hideP.lastElementChild).css(show_smf)}

   // else {$(hideP.lastElementChild).css(hide_smf)}


		// $(".block_news > div:nth-child(3) > p:nth-child(2)").toggle()

		//event.currentTarget





   //.animate({opacity: 50, width: 100, height: 200}, 
   //[duration]('fast' или 'slow' (200 и 600 миллисекунд)), 
   //[easing]( "linear" и "swing"), 
   //[callback])

	  // if(top_web.offset.top == 1400) {

   //  	$(".top_block .block_news:first-child")
   //  	.css("display", "none") }









};


 // animated infinite bounceInLeft, animated infinite zoomIn




