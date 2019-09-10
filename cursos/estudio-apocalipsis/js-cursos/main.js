//JSON de videos
const listVideos = [
    {
        titulo: 'Estudio de Apocalipsis | Las Siete Iglesias (Sardis)',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/QPa4ajI_5GU'
    },
    {
        titulo: 'Estudio de Apocalipsis | Las Siete Iglesias (Filadelfia)',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/9Qe5ij-uLjg'
    },
    {
        titulo: 'Estudio de Apocalipsis | Las Siete Iglesias',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/z5fqeiF80P4'
    },
    {
        titulo: 'Estudio de Apocalipsis | La Iglesia de la Odisea',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/cDmQDnthFLA'
    },
    {
        titulo: 'Estudio de Apocalipsis | Ante el trono de Dios',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/eusjAXJPV1w'
    },
    {
        titulo: 'Estudio de Apocalipsis | Ante el trono de Dios | Parte 2',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/Ae6qDZXqz9k'
    },
    {
        titulo: 'Estudio de Apocalipsis | Ante el trono de Dios | Parte 3',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/hxByIMb74KU'
    },
    {
        titulo: 'Estudio de Apocalipsis | Ante el trono de Dios | Parte 4',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/k2m7Z9h_IG0'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 6',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/DfUWANzXIcU'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 7',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/gaQR8g9xY2o'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 8',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/hn7fs84dBJw'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 9',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/NjQPxFtDXEw'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 10',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/7qMh_LcbGpw'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 11',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/_k4A7inuW_Y'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 12',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/G_GGErgFQfI'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 13',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/cv8BsgSBMIc'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 14',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/b6ZCAZqzUZM'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 15',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/H3z1Ra2JBxs'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 16',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/UtkqzDoB4Gs'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 17',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/QXSOcx8Idfk'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 18',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/gqvj12szLAc'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 19',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/qzW2mkukjv0'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 20',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/UB_FOBnxEA8'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 21',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/8P55j03MOQs'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 22',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/F5629kMnxsU'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 23',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/At3l7djqWa8'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 24',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/3U9B7MaJd4s'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 25',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/PVEK_rlXKQs'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 26',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/-Q2-YVbx7U0'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 27',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/yKURgHdfJ7Y'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 28',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/gVSiq5wNn7M'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 29',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/vJTn4iwcxkE'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 30',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/lUe5xVGmrM8'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 31',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/JAK-pWmT5DY'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 32',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/dOd2tSaGT0g'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 33',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/KNH1rb-d064'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 34',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/uGYqHrYy3Fc'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 35',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/qswqsay4Uu4'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 36',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/3hCyuAZEGkc'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 37',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/cGzz0GnwcPs'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 38',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/7bByOmOsncU'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 39',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/0XVIMxsRHQQ'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 40',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/gU8HJXmQYYM'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 41',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/s7e8LgMa_eY'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 42',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/tYMGwPPKhyE'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 43',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/KlgqbhCoe0Y'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 44',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/gLWgdRmAVtQ'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 45',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/0D-_jAZYwZk'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 46',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/qBNVsEQNzFk'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 47',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/4JCvEIthxqM'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 48',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/e67Jceamo0A'
    },
    {
        titulo: 'Estudio de Apocalipsis | Capítulo 49',
        predicador: 'David Garro H.',
        link: 'https://www.youtube.com/embed/z63-Skrzl3s'
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
            <li>Si buscar un capítulo pon un espacio seguido del número</li>
            <p>Ejemplo: capítulo 5</>
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
         console.log('entro')
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





































