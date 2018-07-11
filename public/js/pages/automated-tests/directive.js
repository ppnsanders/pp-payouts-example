'use strict'

angular.module('ppPayouts').directive('automatedTests', [ () => {
	return {
		restrict: 'E',
		scope: {},
		controller: ['$scope', 'automatedTestsModel', ($scope, automatedTestsModel) => {
			$scope.model = automatedTestsModel
			$scope.model.setup()
		}],
		templateUrl: '/js/pages/automated-tests/template.html'
	}
}])