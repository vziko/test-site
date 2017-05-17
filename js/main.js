$(document).ready(function() {

	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	$('input,textarea,number').blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});

	$(".clear").click(function(){
		$(this).parent().find("input").val("");
	});

	var dates;

	var year;
	var month;
	var date;

	dates = new Date ();
	year = dates.getFullYear();
	month = dates.getMonth();
	date = dates.getDate();

	var arr = new Array ("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12");

	var ddd = date + "-" + arr[month] + "-" + year;

	$(".dp4").attr('data-date', ddd);

});

$(function() {  
  $('.btn-more')
    .on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('span').css({top:relY, left:relX})
    });
});

jQuery(function($) {
      $.mask.definitions['~']='[+-]';
      $('.date').mask('99-99-9999');
      $('.phone').mask('+7 (999) 999-99-99');
      $('.phoneext').mask("(999) 999-9999? x99999");
      $(".tin").mask("99-9999999");
      $(".ssn").mask("999-99-9999");
      $(".product").mask("a*-999-a999");
      $(".eyescript").mask("~9.99 ~9.99 999");
    });