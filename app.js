
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
			price: 205,
			rating: 4,
			binding: "Paperback",
			publisher: "Random House India",
			releaseDate: "12-08-2014",
			details: "Linda, in her thirties, begins to question the routine and predictability of her days. In everybodys eyes, she has a perfect life-happy marriage, children and a career. Yet what she feels is an eno... <a href='#'>View More<a>"
		},
		{
			imgUrl: "pinoyQuiz.png",
			name: "Pinoy Quiz Extra",
			price: 168,
			rating: 5,
			binding: "Paperback",
			publisher: "Scholastic",
			releaseDate: "01-07-2014",
			details: "Geronimo Stilton meets outer space in this cosmically fun spin-off series!Meet Geronimo StiltonixHe is a spacemouse - the Geronimo Stilton of a parallel universe! He is captain of the spaceship Mou... View More"
		},
		{
			imgUrl: "worldTriviathon.png",
			name: "World Triviathon",
			price: 339,
			rating: 4,
			binding: "Paperback",
			publisher: "Hachette India",
			releaseDate: "01-04-2014",
			details: "Why would a man escape from prison the day before he's due to be released? Audie Palmer has spent a decade in prison for an armed robbery in which four people died, including two of his gang. Five... View More"
		},
		{
			imgUrl: "rodentBall.png",
			name: "Rodent Ball",
			price: 599,
			rating: 5,
			binding: "Hardcover",
			publisher: "Hodder & Stoughton",
			releaseDate: "01-08-2014",
			details: "I knew that if I agreed to write my story, I would have to be completely honest, as thats the way I have always played the game and that would mean talking about a number of things I have not addr... View More"
		},
		{
			imgUrl: "magicPearl.png",
			name: "Magic Pearl",
			price: 227,
			rating: 4.5,
			binding: "Paperback",
			publisher: "Penguin Books Ltd",
			releaseDate: "25-01-2013",
			details: "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist n... View More"
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
			description: "New Application (Beer to Beer) on the pipeline "
			
		
			
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
			imgUrl:"news.png",
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
