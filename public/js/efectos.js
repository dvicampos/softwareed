$(document).ready(function(){

// Scroll Elementos Menu
	var acercaDe = $('#acerca-de').offset().top,
		planes = $('#planes').offset().top,
		galeria = $('#galeria').offset().top,
		contacto = $('#contacto').offset().top;
		nosotros = $('#nosotros').offset().top;

// Boton Acerca de
	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 380
		}, 500);
	});

	$('#btn-planes').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: planes - 40
		});
	});

	$('#btn-galeria').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: galeria - 40
		});
	});

	$('#btn-contacto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto - 40
		});
	});

	$('#btn-nosotros').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: nosotros - 40
		});
	});

// Efecto Menu
	$('.planes a').each(function(index, elemento){
		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top: '0'
		},2000 + (index * 500));
	});


// Efecto Header
	if ($(window).width() > 800){
		$('header .textos').css({
			opacity: 0,
			marginTop: 0
		});

		$('header .textos').animate({
			opacity: 1,
			marginTop: '-52px'
		},1500);
	}

});


function showModal(message) {
	const modal = document.getElementById('myModal');
	const modalMessage = document.getElementById('modalMessage');
	modalMessage.textContent = message;
	modal.style.display = 'block';
  }

  document.getElementById('openModalBtn').onclick = function() {
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const nombreempresa = document.getElementById('nombreempresa').value.trim();
    var elementoError = document.querySelector('.errorllenado');

    if (nombre !== '' && correo !== '' && numero !== '' && nombreempresa !== '') {
        showModal('Contacto creado exitosamente');
    } else {
        let mensajeError = '';

        if (nombre === '') {
            mensajeError += 'Falta llenar el campo de nombre.<br>';
        }
        if (correo === '') {
            mensajeError += 'Falta llenar el campo de correo.<br>';
        }
        if (numero === '') {
            mensajeError += 'Falta llenar el campo de número.<br>';
        }
        if (nombreempresa === '') {
            mensajeError += 'Falta llenar el campo de nombre de la empresa.<br>';
        }
        if (mensaje === '') {
            mensajeError += 'Falta llenar el campo de mensaje.<br>';
        }

        elementoError.innerHTML = mensajeError;
    }
};



  
  document.getElementsByClassName('close')[0].onclick = function() {
	const modal = document.getElementById('myModal');
	modal.style.display = 'none';
  };
  
  window.onclick = function(event) {
	const modal = document.getElementById('myModal');
	if (event.target === modal) {
	  modal.style.display = 'none';
	}
  };
  

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('.scroll-to-top').style.display = 'block';
  } else {
    document.querySelector('.scroll-to-top').style.display = 'none';
  }
}

document.querySelector('.scroll-to-top').addEventListener('click', function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
// seccion de preguntas frecuentes 
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        item.addEventListener('click', function () {
            item.classList.toggle('active');
        });
    });
});
gsap.from(".contacto-directo", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power4.out",
    stagger: 0.3 // Añade un retraso entre las animaciones de los elementos secundarios
  });