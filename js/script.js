$(document).ready(function() {

  // $(function() {
  //   var pull    = $('#pull');
  //     menu    = $('nav ul');
  //     menuHeight  = menu.height();
  //   $(pull).on('click', function(e) {
  //     e.preventDefault();
  //     menu.slideToggle();
  //   });
  //   $(window).resize(function(){
  //         var w = $(window).width();
  //         if(w > 320 && menu.is(':hidden')) {
  //           menu.removeAttr('style');
  //         }
  //     });
  // });

  $(window).resize(function(){
      var w = $(window).width();
      if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
      }
  });

	var menu = $('.menu ul');

	$(".banner, .services, .portfolio, .contact").css("min-height", $(window).height());

  $(".scroll-down-btn").click(function(){
    $(".top-nav li:nth-child(2) a").click()
    // $('html,body').animate({
    //     scrollTop: $(".services").offset().top},
    //     'slow');
  });

	if ($(window).height() < 850) {
		$('.banner, .benefits, .signIn').css('paddingTop', '150px');
		$('.automate').css('paddingTop', '100px');
	}

   $(".navbar-nav li a").click(function() {
    $(".navbar-collapse").collapse('hide');
  });

    // $(window).scroll(function() {
    //     if ($(window).scrollTop() >= 200) {
    //     	$('.header .navbar').css('background-color', 'rgba(0, 0, 0, .8)');
        	//$('.menu').css('padding', '0');
        	//$(".logo").css("width", "80px");
        // } else {
        // 	$('.top-header').css('background-color', 'transparent');
        	//$('.menu').css('padding', '2em 0');
        	//$(".logo").css("width", "150px");
    //     }
    // });

    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          menu.children().removeClass('active');
          $(this).parent().addClass('active');
          return false;
        }
      }
    });

    $('.logo').click(function() {
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
    menu.children().removeClass('active');
    menu.children().first().addClass('active');
    return false;
  });

  $().UItoTop({ easingType: 'easeOutQuart' });

  var box = $(".boxx");
  var boxh1 = $(".boxx h1");
  
  var nameError = $("span.error")[0];
  


  $("#datosuser").submit(function() {

    var name = $("#name").val();
  
    if(!/^[a-zA-Z ]+$/g.test(name)) {
      nameError.innerHTML = "Please, insert only characters";
      return false;
    } else {

      var data = {
        name : $("#name").val(),
        email : $("#email").val(),
        message : $("#message").val()
      };

      $.ajax({
          type: "POST",
          url:"email.php",
          data: data
      });

      if (name.length !== 0 && email.length !== 0 && message.length !== 0) {
              boxh1.html("Thank you " + name + " we'll try to respond promptly!");
              box.fadeIn(1000);
              box.fadeOut(6500);         
      }

    }
  });


});