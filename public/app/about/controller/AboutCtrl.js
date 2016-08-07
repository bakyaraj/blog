(function() {
	'use strict';

	angular
	  .module('about')
	  .controller('AboutController', AboutController);

	AboutController.$inject = [];

	function AboutController() {
		//content
		console.log(this)

		var vm= this;
		vm.info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt facilis fuga mollitia dolorem soluta in eius ab inventore numquam cupiditate recusandae quisquam, natus ipsa tenetur fugiat eaque minus at. Quas."
	}
})();