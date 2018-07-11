'use strict'

angular.module('ppPayouts').directive('headerNav', [ () => {
	return {
		restrict: 'E',
		scope: {},
		controller: ['$scope', ($scope) => {
			$scope.nav = [ 
							{
								url: "/",
								text: "Home"
							},
							{
								url: "/negative-tests",
								text: "Negative Tests"
							}
						]
		}],
		templateUrl: '/js/partials/header-nav/template.html'
	}
}])