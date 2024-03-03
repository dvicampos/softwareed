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
	showModal('Contacto creado exitosamente');
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
  