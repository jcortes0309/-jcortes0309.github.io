$(document).ready(function(){
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


  $("html, body").animate({scrollTop:20},"slow");
  var
    documentHeight = $(document).height(),
    // grab the windowHeight as this will be used to determine when a section begins
    windowHeight = $(window).height(),
    // not currently needed
    scroll_start = $(window).scrollTop(),

    // determine when the .home starts
    home_start = $(".home").offset().top,
    // determine when the .home starts
    home_end = home_start + windowHeight - 1,

    // determine when the .about starts by taking the .about location on scrollTop and add the windowHeight to this (the .50 makes the about page start half way down the scroll page)
    about_start = $(".about").offset().top,
    about_start = about_start + ((windowHeight * 0.50) * 1),
    about_end = about_start + windowHeight - 1,

    // determine when the .experience starts by taking the .experience location on scrollTop and add the windowHeight to this (the .75 makes the experience page start half way down the scroll page)
    experience_start = $(".experience").offset().top,
    experience_start = experience_start + ((windowHeight * 0.75) * 2),
    experience_end = experience_start + windowHeight - 1,

    // determine when the .portfolio starts by taking the .portfolio location on scrollTop and add the windowHeight to this (the .85 makes the portfolio page start half way down the scroll page)
    portfolio_start = $(".portfolio").offset().top,
    portfolio_start = portfolio_start + ((windowHeight * 0.835) * 3),
    portfolio_end = portfolio_start + windowHeight - 1,

    // determine when the .contact starts by taking the .contact location on scrollTop and add the windowHeight to this (the .93 makes the contact page start half way down the scroll page)
    contact_start = $(".contact").offset().top,
    contact_start = contact_start + ((windowHeight * 0.86) * 4),
    contact_end = contact_start + windowHeight - 1;

    // not currently needed
    // scroll_difference = home_start - scroll_start;



  // Change highlighted navbar item on scroll
  $(window).scroll(function() {
    var
      // navHeight = $("#mySidenav").height(),
      // scroll = $(window).scrollTop(),
      // scroll_location = scroll + scroll_difference,
      home = $(".home").offset().top,
      about = $(".about").offset().top,
      experience = $(".experience").offset().top,
      portfolio = $(".portfolio").offset().top,
      contact = $(".contact").offset().top;

    // // console.log("navHeight", navHeight);
    // // console.log("scroll_start", scroll_start);
    // // console.log("scroll", scroll);
    // // console.log("scroll_location", scroll_location);
    // console.log("home", home);
    // console.log("home_start", home_start);
    // console.log("home_end", home_end);
    // console.log("about", about);
    // console.log("about_start", about_start);
    // console.log("about_end", about_end);
    // console.log("experience", experience);
    // console.log("experience_start", experience_start);
    // console.log("experience_end", experience_end);
    // console.log("portfolio", portfolio);
    // console.log("portfolio_start", portfolio_start);
    // console.log("portfolio_end", portfolio_end);
    // console.log("contact", contact);
    // console.log("contact_start", contact_start);
    // console.log("contact_end", contact_end);
    // console.log("documentHeight", documentHeight);
    // console.log("windowHeight", windowHeight);
    // // console.log("scroll_difference", scroll_difference);

    if (home >= home_start && home <= home_end) {
      $(".home").addClass("active");
      $(".about").removeClass("active");
      $(".experience").removeClass("active");
      $(".portfolio").removeClass("active");
      $(".contact").removeClass("active");
    }
    if (about >= about_start && about <= about_end) {
      $(".about").addClass("active");
      $(".home").removeClass("active");
      $(".experience").removeClass("active");
      $(".portfolio").removeClass("active");
      $(".contact").removeClass("active");
    }
    if (experience >= experience_start && experience <= experience_end) {
      $(".experience").addClass("active");
      $(".home").removeClass("active");
      $(".about").removeClass("active");
      $(".portfolio").removeClass("active");
      $(".contact").removeClass("active");
    }
    if (portfolio >= portfolio_start && portfolio <= portfolio_end) {
      $(".portfolio").addClass("active");
      $(".home").removeClass("active");
      $(".about").removeClass("active");
      $(".experience").removeClass("active");
      $(".contact").removeClass("active");
    }
    if (contact >= contact_start && contact <= contact_end) {
      $(".contact").addClass("active");
      $(".home").removeClass("active");
      $(".about").removeClass("active");
      $(".experience").removeClass("active");
      $(".portfolio").removeClass("active");
    }
  });

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
  //   aObj = document.getElementById("nav").getElementsByTagName("a");
  //   for(i = 0; i < aObj.length; i++) {
  //     if(document.location.href.indexOf(aObj[i].href) >= 0) {
  //       console.log(aObj[i]);
  //       aObj[i].className="active";
  //     }
  //   }
  // }

  // window.onload = setActive;
