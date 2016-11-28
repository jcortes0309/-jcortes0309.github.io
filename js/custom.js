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

// Opens menu bar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

// Closes menu bar
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";

  var list = document.getElementsByClassName("menu")[0];
  // console.log(list);
  list.getElementsByClassName("active")[0].classList.remove("active");
  setActive();
}


function setActive() {
  console.log("Called the setActive function");
  aObj = document.getElementById("nav").getElementsByTagName('a');
  for(i = 0; i < aObj.length; i++) {
    if(document.location.href.indexOf(aObj[i].href) >= 0) {
      console.log(aObj[i]);
      aObj[i].className="active";
    }
  }
}

window.onload = setActive;
