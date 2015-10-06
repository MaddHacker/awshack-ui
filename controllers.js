/**
 * Created by sandeep on 10/6/2015.
 */
var hackathon = angular.module('hackathon',['ui.router']);
hackathon.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('homepage',{
            url:'/',
            templateUrl: '/homepage.html',
            contoller: 'homepageController'
        });
    $urlRouterProvider.otherwise('/');
})
    .run(function($rootScope){

    })
    .factory('stateService',function(){
        return {
            getAllStates : function(){
                var states = [
                    {id:"AL",value:"Alabama"},
                    {id:"AK",value:"Alaska"},
                    {id:"AZ",value:"Arizona"},
                    {id:"AR",value:"Arkansas"},
                    {id:"CA",value:"California"},
                    {id:"CO",value:"Colorado"},
                    {id:"CT",value:"Connecticut"},
                    {id:"DE",value:"Delaware"},
                    {id:"DC",value:"District Of Columbia"},
                    {id:"FL",value:"Florida"},
                    {id:"GA",value:"Georgia"},
                    {id:"HI",value:"Hawaii"},
                    {id:"ID",value:"Idaho"},
                    {id:"IL",value:"Illinois"},
                    {id:"IN",value:"Indiana"},
                    {id:"IA",value:"Iowa"},
                    {id:"KS",value:"Kansas"},
                    {id:"KY",value:"Kentucky"},
                    {id:"LA",value:"Louisiana"},
                    {id:"ME",value:"Maine"},
                    {id:"MD",value:"Maryland"},
                    {id:"MA",value:"Massachusetts"},
                    {id:"MI",value:"Michigan"},
                    {id:"MN",value:"Minnesota"},
                    {id:"MS",value:"Mississippi"},
                    {id:"MO",value:"Missouri"},
                    {id:"MT",value:"Montana"},
                    {id:"NE",value:"Nebraska"},
                    {id:"NV",value:"Nevada"},
                    {id:"NH",value:"New Hampshire"},
                    {id:"NJ",value:"New Jersey"},
                    {id:"NM",value:"New Mexico"},
                    {id:"NY",value:"New York"},
                    {id:"NC",value:"North Carolina"},
                    {id:"ND",value:"North Dakota"},
                    {id:"OH",value:"Ohio"},
                    {id:"OK",value:"Oklahoma"},
                    {id:"OR",value:"Oregon"},
                    {id:"PA",value:"Pennsylvania"},
                    {id:"RI",value:"Rhode Island"},
                    {id:"SC",value:"South Carolina"},
                    {id:"SD",value:"South Dakota"},
                    {id:"TN",value:"Tennessee"},
                    {id:"TX",value:"Texas"},
                    {id:"UT",value:"Utah"},
                    {id:"VT",value:"Vermont"},
                    {id:"VA",value:"Virginia"},
                    {id:"WA",value:"Washington"},
                    {id:"WV",value:"West Virginia"},
                    {id:"WI",value:"Wisconsin"},
                    {id:"WY",value:"Wyoming"}, 
                    ]
            }
        }
    })
    .controller('homepageController',['stateService','$scope',function(stateService,$scope){
        $scope.states=stateService.getAllStates();
    }]);