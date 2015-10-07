/**
 * Created by sandeep on 10/6/2015.
 */
var hackathon = angular.module('hackathon',['ui.router','datamaps']);
hackathon.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('homepage',{
            url:'/',
            templateUrl: '/homepage.html',
            controller: 'homepageController'
        });
    $urlRouterProvider.otherwise('/');
})
    .factory('stateService',function(){
        return {
            getAllStates: function(){
                return states = [
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
                    {id:"WY",value:"Wyoming"}
                ]
            }
        }
    })
    .controller('homepageController',['stateService','$scope',function(stateService,$scope){
        $scope.states=stateService.getAllStates();
        $scope.mapObject = {
            scope: 'usa',
            options: {
                staticGeoData: true,
                width: 1110,
                legendHeight: 60 // optionally set the padding for the legend
            },
            geographyConfig: {
                highlighBorderColor: '#EAA9A8',
                highlighBorderWidth: 2
            },
            fills: {
                'Republican': '#CC4731',
                'Democrat': '#306596',
                'Heavy Democrat': '#667FAF',
                'Light Democrat': '#A9C0DE',
                'Heavy Republican': '#CA5E5B',
                'Light Republican': '#EAA9A8',
                defaultFill: '#EDDC4E',
                'highlight': '#330000'
            },
            data:{
                "AZ": {
                    "fillKey": "defaultFill",
                    "electoralVotes": 5
                },
                "CO": {
                    "fillKey": "defaultFill",
                    "electoralVotes": 5
                },
                "DE": {
                    "fillKey": "defaultFill",
                    "electoralVotes": 32
                },
                "FL": {
                    "fillKey": "defaultFill",
                    "electoralVotes": 29
                },
                "GA": {
                    "fillKey": "defaultFill",
                    "electoralVotes": 32
                },
                "HI": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "ID": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "IL": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "IN": {
                    "fillKey": "Republican",
                    "electoralVotes": 11
                },
                "IA": {
                    "fillKey": "Light Democrat",
                    "electoralVotes": 11
                },
                "KS": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "KY": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "LA": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "MD": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "ME": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "MA": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "MN": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "MI": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "MS": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "MO": {
                    "fillKey": "Republican",
                    "electoralVotes": 13
                },
                "MT": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "NC": {
                    "fillKey": "Light Republican",
                    "electoralVotes": 32
                },
                "NE": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "NV": {
                    "fillKey": "Heavy Democrat",
                    "electoralVotes": 32
                },
                "NH": {
                    "fillKey": "Light Democrat",
                    "electoralVotes": 32
                },
                "NJ": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "NY": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "ND": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "NM": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "OH": {
                    "fillKey": "UNDECIDED",
                    "electoralVotes": 32
                },
                "OK": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "OR": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "PA": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "RI": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "SC": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "SD": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "TN": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "TX": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "UT": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "WI": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "VA": {
                    "fillKey": "Light Democrat",
                    "electoralVotes": 32
                },
                "VT": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "WA": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "WV": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "WY": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "CA": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "CT": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "AK": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "AR": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "AL": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                }
            }
        };
        $scope.stateSelected = function(){

        }
        $scope.updateActiveGeography = function(geography){
            alert(geography.id);
            console.log(geography.id);
            $scope.mapObject.data[geography.id].fillKey="highlight";
            alert($scope.mapObject.data[geography.id].fillKey);
        }
    }]);