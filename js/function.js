$(document).ready(function() {
		$('.menu__link').click(function(e) {
				var linkhref = $(this).attr('href');
				$('html,body').animate({
					scrollTop: $(linkhref).offset().top
				},800);
				e.preventDefault();
			});
      $('.menu__link-s').click(function(e) {
  				var linkhref = $(this).attr('href');
  				$('html,body').animate({
  					scrollTop: $(linkhref).offset().top
  				},800);
  				e.preventDefault();
  			});
      function updateNavigation() {
      var contentSections = $('.section-f');
      contentSections.each(function(){
      $this = $(this);
      var activeSection = $('.menu__list a[href="#'+$this.attr('id')+'"]').data('number') - 1;
      if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
        $('.menu__item').eq(activeSection).addClass('menu__item--current');
      }else {
        $('.menu__item').eq(activeSection).removeClass('menu__item--current');
      }
      })
      }
      $(window).on('scroll', function(){
        updateNavigation();
      });
      $('#joinbt').click(function(e){
        window.open('https://goo.gl/forms/FrW6OyJJnibpEK5B2', '_blank');
      });
});
$(document).ready(

  $('.menu__item').click('.menu__link',function(e){
      $('.menu__item').removeClass('menu__item--current');
      $(this).addClass('menu__item--current');
    })
);

$(document).ready(function() {

  $('.flipY01').waypoint(function() {$(this).addClass('animated_flipY01');}, {offset: '100%'});
  $('.flipY02').waypoint(function() {$(this).addClass('animated_flipY02');}, {offset: '100%'});
  $('.flipY03').waypoint(function() {$(this).addClass('animated_flipY03');}, {offset: '100%'});
  $('.flipY04').waypoint(function() {$(this).addClass('animated_flipY04');}, {offset: '100%'});
  $('.flipY05').waypoint(function() {$(this).addClass('animated_flipY05');}, {offset: '100%'});
  $('.flipY06').waypoint(function() {$(this).addClass('animated_flipY06');}, {offset: '100%'});

  $('.flipX01').waypoint(function() {$(this).addClass('animated_flipX01');}, {offset: '100%'});
  $('.flipX02').waypoint(function() {$(this).addClass('animated_flipX02');}, {offset: '100%'});
  $('.flipX03').waypoint(function() {$(this).addClass('animated_flipX03');}, {offset: '100%'});
  $('.flipX04').waypoint(function() {$(this).addClass('animated_flipX04');}, {offset: '100%'});
  $('.flipX05').waypoint(function() {$(this).addClass('animated_flipX05');}, {offset: '100%'});
  $('.flipX06').waypoint(function() {$(this).addClass('animated_flipX06');}, {offset: '100%'});

  $('.fadeL01').waypoint(function() {$(this).addClass('animated_fadeL01');}, {offset: '100%'});
  $('.fadeL02').waypoint(function() {$(this).addClass('animated_fadeL02');}, {offset: '100%'});
  $('.fadeL03').waypoint(function() {$(this).addClass('animated_fadeL03');}, {offset: '100%'});
  $('.fadeL04').waypoint(function() {$(this).addClass('animated_fadeL04');}, {offset: '100%'});
  $('.fadeL05').waypoint(function() {$(this).addClass('animated_fadeL05');}, {offset: '100%'});
  $('.fadeL06').waypoint(function() {$(this).addClass('animated_fadeL06');}, {offset: '100%'});

  $('.fadeR01').waypoint(function() {$(this).addClass('animated_fadeR01');}, {offset: '100%'});
  $('.fadeR02').waypoint(function() {$(this).addClass('animated_fadeR02');}, {offset: '100%'});
  $('.fadeR03').waypoint(function() {$(this).addClass('animated_fadeR03');}, {offset: '100%'});
  $('.fadeR04').waypoint(function() {$(this).addClass('animated_fadeR04');}, {offset: '100%'});
  $('.fadeR05').waypoint(function() {$(this).addClass('animated_fadeR05');}, {offset: '100%'});
  $('.fadeR06').waypoint(function() {$(this).addClass('animated_fadeR06');}, {offset: '100%'});

  $('.fadeT01').waypoint(function() {$(this).addClass('animated_fadeT01');}, {offset: '100%'});
  $('.fadeT02').waypoint(function() {$(this).addClass('animated_fadeT02');}, {offset: '100%'});
  $('.fadeT03').waypoint(function() {$(this).addClass('animated_fadeT03');}, {offset: '100%'});
  $('.fadeT04').waypoint(function() {$(this).addClass('animated_fadeT04');}, {offset: '100%'});
  $('.fadeT05').waypoint(function() {$(this).addClass('animated_fadeT05');}, {offset: '100%'});
  $('.fadeT06').waypoint(function() {$(this).addClass('animated_fadeT06');}, {offset: '100%'});

  $('.fadeB01').waypoint(function() {$(this).addClass('animated_fadeB01');}, {offset: '100%'});
  $('.fadeB02').waypoint(function() {$(this).addClass('animated_fadeB02');}, {offset: '100%'});
  $('.fadeB03').waypoint(function() {$(this).addClass('animated_fadeB03');}, {offset: '100%'});
  $('.fadeB04').waypoint(function() {$(this).addClass('animated_fadeB04');}, {offset: '100%'});
  $('.fadeB05').waypoint(function() {$(this).addClass('animated_fadeB05');}, {offset: '100%'});
  $('.fadeB06').waypoint(function() {$(this).addClass('animated_fadeB06');}, {offset: '100%'});


});



$(function(){


	$(".modal-inner").fadeOut();
	$(".wrap").click(function (){
		$("#modal-nav").removeClass("hidden");
		var X = $(this).attr('id');
		$(".modal-portfolio#modal-" + X).addClass("open-modal");
		$(".modal-inner").delay(700).queue(function(){
		    $(this).fadeIn(500, 'easeInCubic').dequeue();
		});
		$("body").delay(700).queue(function(){
		    $(this).css('overflowY', 'hidden').dequeue();
		});
		return false;
	});



	$(".close-modal-button").click(function (){
		$('.modal-inner').scrollTo(0, 200, 'easeOutCubic');
		$("#modal-nav").addClass("hidden");
		$(".modal-inner").fadeOut(500, 'easeOutCubic');
		$(".modal-portfolio").delay(500).queue(function(){
		    $(this).removeClass("open-modal").dequeue();
		});
		$("body").delay(450).queue(function(){
		    $(this).css('overflowY', 'auto').dequeue();
		});
		//$(".modal-inner").scrollTop(0);
		return false;
	});

});


$(function(){
	var $first = $('li:first', 'ul#modals'),
			$last = $('li:last', 'ul#modals');

	$(".next-modal-button").click(function () {
		$('.modal-inner').scrollTo(0, 200, 'easeOutCubic');
		$(".modal-inner").fadeOut(500, 'easeOutCubic');
		var $next, $selected = $(".open-modal");
		$next = $selected.next('li').length ? $selected.next('li') : $first;
		$next.delay(500).queue(function(){
			$(this).addClass("open-modal").dequeue();
		});
		$selected.delay(1000).queue(function(){
			$(this).removeClass("open-modal").dequeue();
		});
		$(".modal-inner").delay(700).queue(function(){
		    $(this).fadeIn(500, 'easeInCubic').dequeue();
		});
	});

	$(".prev-modal-button").click(function () {
		$('.modal-inner').scrollTo(0, 200, 'easeOutCubic');
		$(".modal-inner").fadeOut(500, 'easeOutCubic');
		var $prev, $selected = $(".open-modal");
		$prev = $selected.prev('li').length ? $selected.prev('li') : $last;
		$selected.delay(500).queue(function(){
			$(this).removeClass("open-modal").dequeue();
		});
		$prev.delay(0).queue(function(){
			$(this).addClass("open-modal").dequeue();
		});
		$(".modal-inner").delay(500).queue(function(){
		    $(this).fadeIn(500, 'easeInCubic').dequeue();
		});
	});

});

$(".scroll-modal-button").click(function () {
		$('.modal-inner').scrollTo('600px', 700, 'easeOutCubic');
});
jQuery(function($){
var windowWidth = $(window).width();

$(window).resize(function() {
    if(windowWidth != $(window).width()){
    location.reload();
    return;
    }
});
});
// external js: flickity.pkgd.js
