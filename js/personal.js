$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
    $(this).collapse('hide');
  }
});


var app = angular.module("personal_site", ['ui.router']);

app.run(function($state) {
 // Go to home page after the app is reloaded
  window.onload = function() {
    // $state.go("home");
  };
});

app.controller("HomeController", function($scope, $state) {

});

app.controller("ExperienceController", function($scope, $state) {

});



app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state({
    name: "home",
    url: "/",
    templateUrl: "../templates/about.html"
  })
  .state({
    name: "experience",
    url: "/experience",
    templateUrl: "../templates/experience.html"
  })
  .state({
    name: "portfolio",
    url: "/portfolio",
    templateUrl: "../templates/portfolio.html"
  })
  .state({
    name: "other",
    url: "/other",
    templateUrl: "../templates/other.html"
  })
  .state({
    name: "contact",
    url: "/contact",
    templateUrl: "../templates/contact.html"
  })
  .state({
    name: "mycrm",
    url: "/MyCRM",
    templateUrl: "../templates/my_crm.html"
  })
  .state({
    name: "get_cohort",
    url: "/GetCohort",
    templateUrl: "../templates/get_cohort.html"
  })
  .state({
    name: "myelp",
    url: "/mYelp",
    templateUrl: "../templates/myelp.html"
  })
  .state({
    name: "building_websites",
    url: "/websites_101",
    templateUrl: "../templates/building_websites_101.html"
  })
  ;

  $urlRouterProvider.otherwise('/');
});
