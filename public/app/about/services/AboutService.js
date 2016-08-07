(function() {
	'use strict';

	angular
	  .module('about')
	  .service('AboutService', AboutService);

	AboutService.$inject = ['$http'];

	function AboutService($http) {
		//content
	}
})();