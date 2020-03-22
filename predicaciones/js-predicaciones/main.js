//JSON de videos
const listVideos = [
    {
        titulo: 'Reflexión | La unión con Cristo',
        predicador: 'David Garro H',
        link: 'https://www.youtube.com/embed/Xco4WkEESqs'
    },
    {
        titulo: 'Elisabet Esposa de Zacarías',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/EVAAUzlAA3w'
    },
    {
        titulo: 'Jonás | parte 2',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/-8ZNxi3o4Yg'
    },
    {
        titulo: 'Jonás',
        predicador: 'Hernán Blandón',
        link: 'https://www.youtube.com/embed/uvUXTgQvduM'
    },
    {
        titulo: 'El Propósito de Dios a Nínive',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/mdZYT3bBqus'
    },
    {
        titulo: 'Noemí Culpa a Dios',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/XF1XdnIRw0g'
    },
    {
        titulo: 'Las Heridas del Pasado',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/loj4qXVfbpw'
    },
    {
        titulo: 'Ruth y la Iglesia',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/DmkUuhoXMmI'
    },
    {
        titulo: 'Obediencia a Dios',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/zxqisvxe7Lg'
    },
    {
        titulo: 'Las Amonestaciones del Señor a Israel por la Santidad',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/KYNj57lSk3s'
    },
    {
        titulo: 'Necesidad de cambio y mejora',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/T6ACITcg-Fk'
    },
    {
        titulo: 'La Amistad',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/kcXck7qlmnE'
    },
    {
        titulo: 'El Pueblo de Israel era Duro de Corazón',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/uog5uOVrBgU'
    },
    {
        titulo: 'Pablo y Bernabé se Separan',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/xBFJvbFOMtY'
    },
    {
        titulo: 'La Cura en la Debilidad de la Fe',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/r7VBsNZY5_s'
    },
    {
        titulo: 'La Motivación',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/hmc5YCDCPJg'
    },
    {
        titulo: 'El Sufrimiento del Señor Jesucristo',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/0MmFyoT2T7c'
    },
    {
        titulo: 'Lo que la Biblia Dice',
        predicador: 'Hernán Blandón',
        link: 'https://www.youtube.com/embed/9IgLyBFvhKg'
    },
    {
        titulo: 'El Verdadero Cristianismo',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/Bo83eKKNWtk'
    },
    {
        titulo: 'El Libro de Génesis',
        predicador: 'Hernán Blandón',
        link: 'https://www.youtube.com/embed/7Qgi9FIqVV0'
    },
    {
        titulo: 'La Rebeldía del Pueblo',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/uyXRd1ucwbY'
    },
    {
        titulo: 'La Carrera de la Vida',
        predicador: 'Jorge',
        link: 'https://www.youtube.com/embed/ocsUFN41UyA'
    },
    {
        titulo: 'Job',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/btviSVbpScQ'
    },
    {
        titulo: 'La Salvación',
        predicador: 'Hernán Blandón',
        link: 'https://www.youtube.com/embed/59KXE0J133A'
    },
    {
        titulo: 'La Disciplina de Dios',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/SrMa313rf6k'
    },
    {
        titulo: 'Decisiones que determinan nuestro destino',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/J5VEGeSiTrU'
    },
    {
        titulo: 'La Adoración a Dios',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/PaDzN4wrGro'
    },
    {
        titulo: 'Cristianos Con Raíces Fuertes',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/aR602d4Wv2c'
    },
    {
        titulo: '¿Por qué es importante estudiar las Escrituras?',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/GM4zCm-6h3M'
    },
    {
        titulo: 'El Precio de la Infidelidad Espiritual',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/TKncGZeuf_k'
    },
    {
        titulo: 'La Tierra Prometida',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/mD3eTOK4cjA'
    },
    {
        titulo: 'La Necesidad de ser Lleno del Espíritu',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/jAo_aHzsAH0'
    },
    {
        titulo: 'La Ética del Amor y el Perdón',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/oPu8At-6kOU'
    },
    {
        titulo: 'Principios Para Vivir Mejor',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/DS_TR3Gxw-Q'
    },
    {
        titulo: 'Evangelismo Personal',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/lM5o-h991qY'
    },
    {
        titulo: 'La Guía del Espíritu Santo',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/p0n9TIpqIAk'
    },
    {
        titulo: 'El Pacto con Dios',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/HAXu3nkEZVE'
    },
    {
        titulo: 'Cuando Confesamos Nuestros Pecados',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/qnQdeLnzda0'
    },
    {
        titulo: 'La Labor del Pastor',
        predicador: 'Hernán Blandón',
        link: 'https://www.youtube.com/embed/sM6KQn3LxSk'
    },
    {
        titulo: 'Las travesías del Desierto',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/Oi7P1_vRkCI'
    },
    {
        titulo: 'Estrategias Espirituales Para Vivir Mejor',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/4UD_5hkvcUQ'
    },
    {
        titulo: 'La Historia de Lot',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/f03rzCTuoEQ'
    },
    {
        titulo: 'La Pregunta Sobre la Resurrección',
        predicador: 'Hernán Blandón',
        link: 'https://www.youtube.com/embed/nwKrGiB35A8?rel=0&showinfo=0'
    },
    {
        titulo: 'La Soberanía de Dios',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/dEtmUBMu9EU?rel=0&showinfo=0'
    },
    {
        titulo: 'Honra a tu Padre y tu Madre',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/xIhu-Lk0IE8?rel=0&showinfo=0'
    },
    {
        titulo: 'El Carácter de una Madre',
        predicador: 'Hernán Blandón',
        link: 'https://www.youtube.com/embed/QMSmim6-leM?rel=0&showinfo=0'
    },
    {
        titulo: 'El Llamado de Abraham',
        predicador: 'Jonathan Castro',
        link: 'https://www.youtube.com/embed/vL84kC5slzk?rel=0&showinfo=0'
    },
    {
        titulo: 'Las Promesas de Dios',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/68bDwHzRgS0?rel=0&showinfo=0'
    },
    {
        titulo: 'La Vida de Abraham',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/h2tbfalvlJw?rel=0&showinfo=0'
    },
    {
        titulo: 'La Ciudad de Lodebar',
        predicador: 'Erley Sobalbarro',
        link: 'src="https://www.youtube.com/embed/GigJ4sw4Y80?rel=0&showinfo=0"'
    },
    {
        titulo: 'La Santidad de Enoc',
        predicador: 'Hernán Blandón',
        link: 'https://www.youtube.com/embed/lnLPwvmPOKI?rel=0&showinfo=0'
    },
    {
        titulo: 'El Silencio y la Soledad de Jesucristo',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/Bf6hNWqF9y0?rel=0&showinfo=0'
    },
    {
        titulo: 'Las Señales del Rapto de la Iglesia',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/Wz0l5aCRVBI?rel=0&showinfo=0'
    },
    {
        titulo: 'La Iglesia',
        predicador: 'Erley Sobalbarro',
        link: 'https://www.youtube.com/embed/WAxtjksRO4A?rel=0&showinfo=0'
    },
    {
        titulo: 'Que es conocer a Dios',
        predicador: 'José Acuña',
        link: 'https://www.youtube.com/embed/75QQxa1YE6U?rel=0&showinfo=0'
    },
    {
        titulo: 'Cuando Dios llama',
        predicador: 'Hernán Blandón',
        link: 'src="https://www.youtube.com/embed/D4MVCFOYI7Y?rel=0&showinfo=0"'
    }
  ]

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

//Buscador
const formulario = document.getElementById('formulario')
const boton = document.getElementById('boton')
const resultado = document.getElementById('resultados')

//Activador del buscador
let activador = false

//Obtener Contenedor html
let cajaPadre = document.getElementById('scroll-content')

//Obtener Contenedor del loader
let cajaLoader = document.getElementById('loader-content')

//Iterador del objeto
let contadorFor = 5

let norepeat = false

//Videos ya creados
for(let i = 0; i < 5; i++) {
  /* let newDivContent = document.createElement("div");
  let newTitleContent = document.createElement('h1')
  let newParrafoContent = document.createElement('p')
  newDivContent.appendChild(newTitleContent)
  newDivContent.appendChild(newParrafoContent)
  newDivContent.className = 'caja'
  newTitleContent.textContent = Object.values(boxes)[item].titulo
  newParrafoContent.textContent = Object.values(boxes)[item].autor
  document.getElementById("scroll-content").appendChild(newDivContent); */
  cajaPadre.innerHTML += 
    `<div class="video">
        <div class="container">
            <div class="caja-1">
                <div class="container-perfil">
                    <a href="#"><div class="perfil jose"></div></a>
                    <p>
                        Predicador: ${listVideos[i].predicador}
                    </p>
                </div>
                <div class="networks">
                    <a href="https://www.facebook.com/Iglesia-Bautista-Betania-Mercedes-Sur-Heredia-Costa-Rica-186418624745361/?fref=ts" target="_blank"><i class="icono fab fa-facebook-square"></i></a>
                    <a href="https://www.youtube.com/channel/UCwf8-AaiRaF1iDRtHBvzRaQ" target="_blank"><i class="icono fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="caja-2">
                <h2>${listVideos[i].titulo}</h2>
            </div>
        </div>
        <div class="sub-video">
            <iframe src="${listVideos[i].link}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>`
}

//Modificador de acentos
const reemplazarAcentos = (cadena) => {

	const chars = {

		"á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u",

		"à":"a", "è":"e", "ì":"i", "ò":"o", "ù":"u", "ñ":"n",

		"Á":"A", "É":"E", "Í":"I", "Ó":"O", "Ú":"U",

    "À":"A", "È":"E", "Ì":"I", "Ò":"O", "Ù":"U", "Ñ":"N"
  }

	const expr=/[áàéèíìóòúù]/ig;

	let res=cadena.replace(expr,function(e){return chars[e]});

	return res;

}

formulario.value = ""

//Filtro del buscador
const filtrar = (e) => {
    cajaPadre.innerHTML = ''
    cajaLoader.classList.add('hidden')
    activador = true
    if(formulario.value.length > 0) {
        console.log('hay caracteres')

        const texto = formulario.value.toLowerCase()
        reemplazarAcentos(texto)
        for(let video of listVideos) {
            let nombre = video.titulo.toLowerCase()
            let nombreSinTildes = reemplazarAcentos(nombre)
            if(nombreSinTildes.indexOf(texto) !== -1) {
            cajaPadre.innerHTML += 
                `<div class="video">
                <div class="container">
                    <div class="caja-1">
                        <div class="container-perfil">
                            <a href="#"><div class="perfil jose"></div></a>
                            <p>
                                Predicador: ${video.predicador}
                            </p>
                        </div>
                        <div class="networks">
                            <a href="https://www.facebook.com/Iglesia-Bautista-Betania-Mercedes-Sur-Heredia-Costa-Rica-186418624745361/?fref=ts" target="_blank"><i class="icono fab fa-facebook-square"></i></a>
                            <a href="https://www.youtube.com/channel/UCwf8-AaiRaF1iDRtHBvzRaQ" target="_blank"><i class="icono fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div class="caja-2">
                        <h2>${video.titulo}</h2>
                    </div>
                </div>
                <div class="sub-video">
                    <iframe src="${video.link}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>`
            }
        }

        if(cajaPadre.innerHTML === '') {
            cajaPadre.innerHTML += `
            <li>Video no encontrado...</li>
            `
        }
    } else {
        cajaPadre.innerHTML += `
        <li>Selecciona un video...</li>
        `
    }
  
}

boton.addEventListener('click', filtrar)

//Evento Scroll
//Para el loader se debe crear un timer y mandar un callback a este evento
document.addEventListener("scroll", function () {
  
  if(!activador) {
    if((window.innerHeight + window.scrollY) >= 
     (document.documentElement.offsetHeight - 550) && !norepeat){
      norepeat = true
      setTimeout(() => {
        /* for(let i = 0; i < 5; i++) {
          if(contadorFor <= (Object.values(boxes).length)-1) {
            let newDiv = document.createElement("div");
            let newTitle = document.createElement('h1')
            let newParrafo = document.createElement('p')
            newDiv.appendChild(newTitle)
            newDiv.appendChild(newParrafo)
            newDiv.className = 'caja'
            newTitle.textContent = Object.values(boxes)[contadorFor].titulo
            newParrafo.textContent = Object.values(boxes)[contadorFor].autor
            document.getElementById("scroll-content").appendChild(newDiv);
            

            console.log('contadorFor' + contadorFor)
            
            contadorFor++
            norepeat = false
          } else {
            cajaLoader.classList.add('hidden')
          }
        } */
        for(let i = 0; i < 5; i++) {
          if(contadorFor <= listVideos.length -1) {
            cajaPadre.innerHTML += 
            `<div class="video">
        <div class="container">
            <div class="caja-1">
                <div class="container-perfil">
                    <a href="#"><div class="perfil jose"></div></a>
                    <p>
                        Predicador: ${listVideos[contadorFor].predicador}
                    </p>
                </div>
                <div class="networks">
                    <a href="https://www.facebook.com/Iglesia-Bautista-Betania-Mercedes-Sur-Heredia-Costa-Rica-186418624745361/?fref=ts" target="_blank"><i class="icono fab fa-facebook-square"></i></a>
                    <a href="https://www.youtube.com/channel/UCwf8-AaiRaF1iDRtHBvzRaQ" target="_blank"><i class="icono fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="caja-2">
                <h2>${listVideos[contadorFor].titulo}</h2>
            </div>
        </div>
        <div class="sub-video">
            <iframe src="${listVideos[contadorFor].link}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>`
            
            contadorFor++
            norepeat = false
          } else {
            cajaLoader.classList.add('hidden')
          }
        }
      },2000)
    }
  }
});





































