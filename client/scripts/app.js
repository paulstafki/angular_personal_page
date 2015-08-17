var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', []);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "/assets/views/routes/home.html",
            controller: "SomeController"
        }).
        when('/activities', {
            templateUrl: "/assets/views/routes/activities.html",
            controller: "SomeController"
        }).
        when('/motorcycles', {
            templateUrl: "/assets/views/routes/motorcycles.html",
            controller: "AnotherController"
        }).
        otherwise({
            redirectTo: "/home"
        })
}]);