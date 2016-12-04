//#to-top button appears after scrolling
var fixed = false;
$(document).scroll(function() {
  if ($(this).scrollTop() > 250) {
    if (!fixed) {
      fixed = true;
      $("#to-top").show("slow", function() {
        $("#to-top").css({
          position: "fixed",
          display: "block"
        });
      });
    }
  } else {
    if (fixed) {
      fixed = false;
      $("#to-top").hide("slow", function() {
        $("#to-top").css({
          display: "none"
        });
      });
    }
  }
});

$(document).ready(function(){
  $('html, body').animate({scrollTop:20},"slow");
});

// Change highlighted navbar item on scroll
$(window).scroll(function() {
  var navHeight = $('#mySidenav').height(),
    scroll = $(window).scrollTop(),
    home = $('.home').offset().top,
    about = $('.about').offset().top,
    experience = $('.experience').offset().top,
    portfolio = $('.portfolio').offset().top,
    contact = $('.contact').offset().top,
    documentHeight = $(document).height(),
    windowHeight = $(window).height();

  console.log("navHeight", navHeight);
  console.log("scroll", scroll);
  console.log("home", home);
  console.log("about", about);
  console.log("experience", experience);
  console.log("portfolio", portfolio);
  console.log("contact", contact);
  console.log("documentHeight", documentHeight);
  console.log("windowHeight", windowHeight);

  // if (scroll >= home) {
  //   $('.home').removeClass('active');
  // }
  // if (scroll >= about - navHeight) {
  //   $('.about').addClass('active');
  // }
  // if (scroll >= experience - navHeight) {
  //   $('.experience').addClass('active');
  //   $('.about').removeClass('active');
  // }
  // if (scroll >= portfolio - navHeight) {
  //   $('.portfolio').addClass('active');
  //   $('.experience').removeClass('active');
  // }
  // if (scroll >= contact - navHeight) {
  //   // $('.contact').addClass('active');
  //   $('.portfolio').removeClass('active');
  // }
  // if (scroll === documentHeight - windowHeight) {
  //   // $('.contact').addClass('active');
  //   $('.portfolio').removeClass('active');
  // }
});


// Opens menu bar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

// Closes menu bar
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// $("a").on("click", function() {
//   $("a").removeClass("active");
//   $(this).addClass("active");
// });


// function setActive() {
//   console.log("Called the setActive function");
//   aObj = document.getElementById("nav").getElementsByTagName('a');
//   for(i = 0; i < aObj.length; i++) {
//     if(document.location.href.indexOf(aObj[i].href) >= 0) {
//       console.log(aObj[i]);
//       aObj[i].className="active";
//     }
//   }
// }

// window.onload = setActive;
