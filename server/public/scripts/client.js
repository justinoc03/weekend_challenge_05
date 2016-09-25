var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
      when("/home", {
        templateUrl: "/views/partials/home.html",
        controller: "homeController"
      }).
      when("/addPet", {
        templateUrl: "/views/partials/addPet.html",
        controller: "addPetController"
      }).
      when("/viewPets", {
        templateUrl: "/views/partials/viewPets.html",
        controller: "viewPetsController"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);
