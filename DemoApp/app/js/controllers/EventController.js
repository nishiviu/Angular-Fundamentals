'use strict';

eventsApp.controller('EventController',
function EventController($scope) {
    $scope.event = {
        name: 'Angular Boot Camp',
        date: '1/1/2016',
        time: '10:30 am',
        location: {
            address: 'Google Headquarters',
            city: 'Mountain View',
            province: 'CA'
        },
        imageUrl: '/img/angularjs-logo.png',
        sessions: [
           { 
                name: 'Directives Masterclass',
                creatorName: 'Bob Smith',
                duration: '1 hr',
                level: 'Advanced',
                abstract: 'In this session you will lear the ins and out of directives',
                upVoteCount: 0
           },
           { 
                name: 'Scopes for fun and profit',
                creatorName: 'John Doe',
                duration: '30 mins',
                level: 'Introductory',
                abstract: 'Closer look at scopes',
                upVoteCount: 0
           },
           { 
                name: 'Well behaved controllers',
                creatorName: 'Jane Doe',
                duration: '2 hours',
                level: 'Intermediate',
                abstract: 'Controllers are the beginning of everything',
                upVoteCount: 0
           }
        ]
    }
    
    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    }
    
    $scope.downVoteSession = function(session){
       session.upVoteCount--;
    }
});