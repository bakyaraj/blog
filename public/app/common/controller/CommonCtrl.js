(function() {
	'use strict';

	angular
	  .module('common')
	  .controller('CommonController', CommonController);

	CommonController.$inject = ['$scope'];

	function CommonController($scope) {
		//content
		$scope.name="CommonController";
	}
})();