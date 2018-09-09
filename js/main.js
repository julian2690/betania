//  SLIDER-PRINCIPAL
    $("#header").backstretch([
          "img/portada/header-1.jpg"
          , "img/portada/header-2.jpg"
          , "img/portada/header-3.jpg"
     ], {duration: 4000, fade: 1000});

//BOTON IR ARRIBA
    $(".ir-arriba").click(function(){
       $("body,html").animate({
           "scrollTop": "0px"
       },350); 
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 500) {
            $(".ir-arriba").fadeIn(300);
        } else {
            $(".ir-arriba").fadeOut(300);
        }
    });





//QUIENES SOMOS
    $(window).scroll(function(){
        if($(this).scrollTop() > 250) {
            $(".section-presentacion h2").animate({
                "opacity": "1",
                "top": "0"
            },1500);
        }
    });


    $(window).scroll(function(){
        if($(this).scrollTop() > 250) {
            $(".section-presentacion p").animate({
                "opacity": "1"
            },1500);
        }
    });


//VERSICULOS
    $(window).scroll(function(){
        if($(this).scrollTop() > 900) {
            $("section.section-versiculo .versiculo p").animate({
                "opacity": "1",
                "top": "0"
            },1500);
        }
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 900) {
            $("section.section-versiculo .versiculo q").animate({
                "opacity": "1"
            },4000);
        }
    });


//SECTION-LIDERES
    $(window).scroll(function(){
        if($(this).scrollTop() > 1500) {
            $("section.section-lideres h3 span").animate({
                "opacity": "1",
                "top": "0"
            },1500);
        }
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 1500) {
            $("section.section-lideres .c-lideres #lider-uno").animate({
                "opacity": "1",
                "left": "0"
            },1800);
        }
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 1500) {
            $("section.section-lideres .c-lideres #lider-dos").animate({
                "opacity": "1",
                "left": "0"
            },2100);
        }
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 1500) {
            $("section.section-lideres .c-lideres #lider-tres").animate({
                "opacity": "1",
                "left": "0"
            },2400);
        }
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 1500) {
            $("section.section-lideres .c-lideres #lider-cuatro").animate({
                "opacity": "1",
                "left": "0"
            },2700);
        }
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 1500) {
            $("section.section-lideres .c-lideres #lider-cinco").animate({
                "opacity": "1",
                "left": "0"
            },3000);
        }
    });


/*MENU RESPONSIVE*/ 
$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
 
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}









































