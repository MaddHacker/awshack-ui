/**
 * Created by sandeep on 10/6/2015.
 */
var hackathon = angular.module('hackathon',['ui.router']);
hackathon.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('homepage',{
            url:'homepage',
            templateUrl: '/homepage.html',
            contoller: function(){
            }
        });
    $urlRouterProvider.otherwise('/');
});