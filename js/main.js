window.onload =  function() { var StyleBack = {'background-color': 'rgba(199, 203, 209, .9)', 
	'z-index': '2',
	'position': 'absolute', 
	'min-width': '140%',
	'min-height': '120%',
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
var footer_icon = $("footer i");
var fixet_header = $("header .wraper");
var width_body = $("body, html").width();
var height_body = $("body, html").height();
var Timer;

$(fixet_header).ready(()=>{$(window).scroll()>200 ? $(this).css({display: "none"}) : $(this).show(40)})


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
	
	var width_form = $(".hiden").width();
	$(".hiden").css({"display": "flex",
		"z-index": 3,
		"right": (width_body/2)-(width_form/2)});
	$("body").prepend("<div id='wraper_top'></div>");
	$("#wraper_top").css(StyleBack); 
});
$(".hiden span").click(()=>{$(".hiden").css("display", "none");
	$("#wraper_top").remove()
});

/////------------------------------------КНОПКА МОБІЛЬНОЇ ВЕРСІЇ----------------//////


$('#Mobile_button').click((e)=>{
	Open_mobile(e);
      
});

function Open_mobile (e) {
	if ($(e.currentTarget).find('div:nth-child(1)').css("opacity") == 1)
	           {
	            $(e.currentTarget).find('div:nth-child(1)').animate({"opacity": '0'}, 1000, 
				()=>{$(e.currentTarget).find('div:nth-child(1)').css({"display": 'none'});
					 $(e.currentTarget).find('div:nth-child(2)').animate({"opacity": '1'}, 1000)})
			   } 
	       else {
			    
			   	$(e.currentTarget).find('div:nth-child(2)').animate({"opacity": '0'}, 1000, 
			  ()=>{$(e.currentTarget).find('div:nth-child(1)').css({"display": ''}).animate({"opacity": '1'}, 1000, ()=>{  
				             $(e.currentTarget).find('div').each(

								(i, elem)=> {
                                       $(elem).removeAttr('style')
								}
							 )
                             
                    			  }
					 
			       )}) 
                   }
	               }     
//---------------------------------------------ЗМІНА ОБЄКТІВ ПО КРОЛУ-----------------------//

$(window).scroll(
	(e)=>{ 
		
		$(this).scrollTop() >= 200 
		? $(".botom_on_top").show('slow', ()=>{$(this).removeAttr("style")})
		: $(".botom_on_top").hide('slow');

		if (width_body > 899)
        {($(this).scrollTop() <= 50 ) 
		? $(fixet_header).fadeIn(1000, ()=>{$(this).removeAttr("style")})  
		: $(fixet_header).fadeOut(1000);}
		
	});

//----------------------АНІМАЦІЯ ПОВІЛЬНОГО ПЕРЕХОДУ ТОП СТОРІНКИ---------------///

$(".botom_on_top").click((e)=> {

	e.preventDefault();
	$('body,html').animate({scrollTop: 0}, 1500);
})

//------------------------------ТЕКСТ ДЛЯ БЛОКІВ З НОВИНАМИ--------------////
  
       $(".block_news").each(function (i ,elem)
                 { 
				$(elem).find("button").click( ()=>{Block_show_next(elem)} );
                });				 

				// let $size_p_news_block = 420;
       	  
	        function Block_show_next (elem, size_p = 340) {
				   this.size_p =  size_p;
                   let $height_block = $(elem).height();
				   let $height_block_max = $height_block + size_p;
				   let $width_page = $("html, body").width();
				   $width_page > 1250 ? $height_block_max += 100 : $height_block_max += 30;
				   					
		        if ($height_block < 490)   {
                    $(elem).animate(({minHeight: String($height_block_max)}), 1000);
			        $(elem).find("p").filter(":last").toggle(1000, ()=>{ $(elem).find("button span").text("Меньше...")});
			   			                                 }
			    else {
                    $(elem).animate(({minHeight: "400px"}), 1000, ()=>{$(elem).removeAttr("style")} );
			        $(elem).find("p").filter(":last").toggle(1000, ()=>{ $(elem).find("button span").text("Більше...")})
					  }
				}		  
           
				
//----------------------------Animation---------------------------------------------------//
var NUMBER = 70
width_body >= 1200 ? true : width_body < 960 ? NUMBER = 15 : NUMBER = 35
const SPEED = 5
const DIST = 200
const canvas = document.querySelector('.anim_fon')
const context = canvas.getContext('2d')
const WIND_WIDTH = document.documentElement.clientWidth
canvas.width =    WIND_WIDTH
canvas.height =   height_body
const points = []

for (let i = 0; i < NUMBER; i++) {
    const point = {	  
		x: getRandom(0, canvas.width),
		y: getRandom(0, canvas.height),
		angle: getRandom(0, 2 * Math.PI)
	}	 
	points.push(point)
                               }
  
	function tick () {
	    drawBackground()	   
	    drawPoints()
		movePoints()
		drawLine()
		requestAnimationFrame(tick)		 
        // return setTimeout(tick, 300)
                      }

    function getRandom (min, max) {
	    return min + Math.random() * (max - min + 1)
                                }

    function drawBackground () {
	      context.fillStyle = 'black'
	      context.fillRect(0, 0, WIND_WIDTH, height_body)
                               }
    function drawPoints () {		   
	      for (const point of points) {
		   context.beginPath()
		   context.fillStyle = 'yellow'
		   context.arc(point.x, point.y, 4, 0, Math.PI * 2)
		   context.fill()
	                                 }
						 }
						 
    function movePoints()  {
			for (const point of points)  
			{     
				point.x = point.x + SPEED * Math.cos(point.angle)
				point.y = point.y + SPEED * Math.sin(point.angle) 
				
				point.x < 0            ? (point.x = canvas.width + point.x):
				point.x > canvas.width ? (point.x =   point.x - canvas.width):
                point.y < 0            ? (point.y = canvas.width + point.y):
				point.y > canvas.width ? (point.y =   point.y - canvas.width):
				true
			}
						  }
						  
	function drawLine () {
					 for (let i = 0; i < NUMBER - 1; i++) {
                            for (let j = 0; j < NUMBER; j++) {
								 const pointA = points[i]
								 const pointB = points[j]
								 const dist = getDist(pointA, pointB)
								
								if (dist <= DIST) {
									context.strokeStyle = 'red'
									context.lineWidth = (1 - dist / DIST)**3
									context.moveTo(pointA.x, ((pointA.y)-2))
									context.lineTo(pointB.x, ((pointB.y)-2))
									context.stroke()
								                 }
							              }
					                }            
							   }
	function getDist (a, b) {
		return ((a.x - b.x)**2 + (a.y - b.y)**2)**0.5
	                        }

 tick()
			   
			 
			

		
}