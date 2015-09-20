
var myApp = angular.module("myApp", ["ngRoute","ngAnimate"]);

myApp.config(function($routeProvider) {
	$routeProvider
		.when("/books", {
			templateUrl: "partials/book-list.html",
			controller: "BookListCtrl"
		})
		.when("/kart", {
			templateUrl: "partials/kart-list.html",
			controller: "KartListCtrl"
			
		}).when("/about", {
			templateUrl: "partials/about.html",
			
		}).when("/news", {
			templateUrl: "partials/news.html",
			controller: "NewsListCtrl"
		})
	.otherwise({
		redirectTo: "/books"
	});
});

myApp.factory("bookService", function (){
	
	var books = [
		{
			imgUrl: "fireRescue.png",
			name: "Fire Rescue 32",
			genre: "  Action/Puzzle",
			googleLink:"https://play.google.com/store/apps/details?id=org.pascosoft.fireRescue32",
			appleLink:"https://itunes.apple.com/us/app/firerescue-32/id648048691?ls=1&mt=8",
			details: "Fire Rescue 32 is a fire fighting game out on the AppStore and Google Play. You play as a fireman that responds to emergencies in Dog City.",
			fullDetails:"Fire Rescue 32 is a fire fighting game out on the AppStore and Google Play. You play as a fireman that responds to emergencies in Dog City. Brave burning buildings  to rescue trapped puppies while you dodge falling debris and feral crows. Put out fires and become the top firefighter as you level up your rank. Arrive to the Scene with your Fire Engine. Realistic Fire Fighter Sounds.Play as Sparky the Fire Dog"
		},
		{
			imgUrl: "pinoyQuiz.png",
			name: "Pinoy Quiz Extra",
			genre: "  Quiz/Trivia",
			googleLink:"https://play.google.com/store/apps/details?id=com.pinoyquizz.dan",
			appleLink:"https://itunes.apple.com/us/app/pinoy-quiz/id519274684?mt=8",
			details: "Test your Pinoyness, kakasa ka ba? This App is a Trivia Quiz  about Philippine Pop Culture.",
			fullDetails:"Test your Pinoyness, kakasa ka ba? This App is a Trivia Quiz  about Philippine Pop Culture. There are 200 questions from different topics ranging from Pinoy TV, Filipino Celebrities, History, OPM , PBA and some odd questions here and there."
			
		},
		{
			imgUrl: "worldTriviathon.png",
			name: "World Triviathon",
			genre: "  Quiz/Trivia",
			googleLink:"https://play.google.com/store/apps/details?id=org.pascosoft.WorldTriviathon",
			appleLink:"https://itunes.apple.com/us/app/world-triviathon/id591512034?ls=1&amp;mt=8",
			details: "World Triviathon will test your knowledge on general facts and trivia across all cultures",
			fullDetails:"World Triviathon will test your knowledge on general facts and trivia across all cultures. There are 3 rounds that will bombard you with a series of questions which becomes harder as you progress. The game is in trivia quizz format"
		},
		{
			imgUrl: "rodentBall.png",
			imgValue: 0,
			imgMainUrl:"rodentBallMain.png",
			name: "Rodent Ball",
			genre: "  Arcade/Puzzle",
			googleLink:"https://play.google.com/store/apps/details?id=com.dan.RodentBall",
			appleLink:"https://itunes.apple.com/us/app/rodent-ball-lite/id563977808?mt=8",
			details: "Aliens are Invading!!! One rodent took the challenge of ridding these foul creatures from our planet",
			fullDetails:"Aliens are Invading!!! One rodent took the challenge of ridding these foul creatures from our planet. Inspired by classic games such as Breakout and Arkanoid but Rodent Ball adds a twist on the game play. The objective is not to break all bricks but rather to destroy all enemies hiding behind them to win. Special powers are available that will be very useful to clear certain stages in the game."
		},
		{
			imgUrl: "magicPearl.png",
			name: "Magic Pearl",
			imgMainUrl:"magicPearlMain.png",
			genre:"  Fortune Telling/Magic 8 Ball",
			googleLink:"https://play.google.com/store/apps/details?id=com.kamada.dan&amp;feature=search_result#?t=W251bGwsMSwxLDEsImNvbS5rYW1hZGEuZGFuIl0.",
			appleLink:"",
			details: "This application is inspired by pre-History Shamans from the Philippines that used Pearls as a means to predict the future",
			fullDetails:"This application is inspired by pre-History Shamans from the Philippines that used Pearls as a means to predict the future.It was said that  by reading the hues of light reflected by pearls can give certain people clairvoyance.In this Application you can ask the Pearl your question and it will give you random suggestions. You have an option for the responses to be in Filipino / Tagalog, English, or you can Customize your own."
		},
		
	];
	
	return{
		
		getBooks: function (){
			
			return books;
		},
			addToKart: function(book) {
			
		}
		
	};
	
});

myApp.factory("kartService", function() {
	var kart;
	
	return {
		getKart: function() {
			return kart;
		},
		addToKart: function(book) {
			kart = book;
		}
		
	}
});


myApp.controller("KartListCtrl", function($scope, kartService) {
	$scope.kart = kartService.getKart();
	
	$scope.goBack = function(){
		window.location = "#/books";
	};
	
});

myApp.controller("BookListCtrl", function($scope, bookService, kartService) {
	$scope.books = bookService.getBooks();
	
	$scope.addToKart = function(book) {
		kartService.addToKart(book);
		window.location = "#/kart"
	}
	
});

myApp.factory("newsService", function (){
	
	var newss = [
	
		{
			imgUrl:"news.png",
			game:"Cold War Collective",
			releaseDate: "September 2015",
			description: "New Application (Beer to Beer Wellington) on the pipeline "
			
		
			
		},
		{
			imgUrl:"news.png",
			game:"Cold War Collective",
			releaseDate: "July 2015",
			description: "Pasco Studios is teaming up with Wellington's Cold War Collective to build mobile Apps"
			
		
			
		},
		{
			imgUrl:"bug.png",
			game:"Fire Rescue 32",
			releaseDate: "May 2015",
			description: "Bug character not climbing the ladder"
			
		},
		
		{
			imgUrl:"update.png",
			game:"Pinoy Quiz Extra",
			releaseDate: "February 2015",
			description: "Bug fixed with posting scores in Facebook"
			
		},
			{
			imgUrl:"update.png",
			game:"Pinoy Quiz Extra",
			releaseDate: "December 2014",
			description: "Major Update released, 300 more questions and new improved game rules."
			
		},
		{
			imgUrl:"bug.png",
			game:"Rodent Ball",
			releaseDate: "May 2014",
			description: "Fixed issue with game freezing on Level 15 upon geting achivement award"
			
		},
		{
			imgUrl:"update.png",
			game:"Pinoy Quiz",
			releaseDate: "May 2014",
			description: "Major update on gameplay and 300 more questions under development"
			
		},
		{
			imgUrl:"news.png",
			game:"World Triviathon",
			releaseDate: "November 2013",
			description: "World Triviathon Realeased"
			
		},
		{
			imgUrl:"news.png",
			game:"World Triviathon",
			releaseDate: "November 2013",
			description: "World Triviathon Realeased"
			
		}
	
	
	];
	return{
		
			getNews: function (){
			
			return newss;
		},
		
	};
	
} );

myApp.controller("NewsListCtrl",function($scope,newsService){
	
	$scope.newss = newsService.getNews();
	
});
