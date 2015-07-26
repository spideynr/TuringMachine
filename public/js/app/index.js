(function(){
	var app = angular.module('mySite',['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/',{
			templateUrl:'/js/templates/index.html',
			controller: 'MainController'
		})
		.when('/messages', {
			templateUrl: '/js/templates/messages.html',
			controller: 'MessagesController'
		})
		.when('/settings',{
			templateUrl: 'js/templates/settings.html',
			controller:'SettingsController'
		})
		.otherwise({redirectTo:'/'})
	}])

	.controller('MainController',function($scope,$location){
		$scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
    $scope.logout = function(){
    	alert("logout");
    }
	})
	.controller('SettingsController',function(){
		//do something
	})
	.controller('MessagesController',['$scope','$http',function($scope,$http){
		$http.get('/api/personas').success(function(data){
			$scope.personas = data;
		});
		$scope.messages = [{
			content:'Hello there i would like to speak to your master',
			date_sent :Date.now(),
			admin:true
		},
		{
			content:'Hello there i would like to speak to your master',
			date_sent :Date.now(),
			admin:true
		},
		{
			content:'Hello there i would like to speak to your master',
			date_sent :Date.now(),
			admin:true
		},
		{
			content:'Hello there i would like to speak to your master',
			date_sent :Date.now(),
			admin:true
		},
		{
			content:'Hello there i would like to speak to your master',
			date_sent :Date.now(),
			admin:true
		},
		{
			content:'Hello there i would like to speak to your master',
			date_sent :Date.now(),
			admin:true
		},
		{
			content:'Hello there i would like to speak to your master',
			date_sent :Date.now(),
			admin:true
		},
		{
			content:'Hello there i would like to speak to your master',
			date_sent :Date.now(),
			admin:true
		},
		{
			content:'Hello there i would like to speak to your master',
			date_sent :Date.now(),
			admin:true
		},
		{
			content:'Hello there i would like to speak to your master',
			date_sent :Date.now(),
			admin:true
		},
		{
			content:'Hello there i would like to speak to your master',
			date_sent :Date.now(),
			admin:true
		}]
	}]);
})();