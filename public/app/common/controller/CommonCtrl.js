(function() {
	'use strict';

	angular
	  .module('common')
	  .controller('CommonController', CommonController);

	CommonController.$inject = ['$scope','blogconstant'];

	function CommonController($scope,blogconstant) {
		//content
		$scope.name="CommonController";
		var vm=this;
		vm.logoname=blogconstant.logo;
	}
})();