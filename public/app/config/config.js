(function() {
	'use strict';

	angular
	  .module('blog')
	  .config(BlogConfiguration);

	BlogConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

	function BlogConfiguration($stateProvider, $urlRouterProvider) {
		//content
		//console.log($stateProvider, $urlRouterProvider)
		// $urlRouterProvider.otherwise("/contact");
		$stateProvider
		.state('about',{
			url:"/about",
			templateUrl:"app/about/templates/about.html"
		})
		.state('contact',{
			url:"/contact",
			templateUrl:"app/contact/templates/contact.html"
		})
	}
})();