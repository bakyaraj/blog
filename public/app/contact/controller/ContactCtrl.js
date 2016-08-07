(function() {
	'use strict';

	angular
	  .module('contact')
	  .controller('ContactController', ContactController);

	ContactController.$inject = ['$scope'];

	function ContactController($scope) {
		//content
		var vm=this;

		vm.info="Contact Information"
	}
})();