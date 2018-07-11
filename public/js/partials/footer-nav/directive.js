'use strict'

angular.module('ppPayouts').directive('footerNav', [ () => {
	return {
		restrict: 'E',
		scope: {},
		controller: ['$scope', ($scope) => {
		}],
		templateUrl: '/js/partials/footer-nav/template.html'
	}
}])