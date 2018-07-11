'use strict'

angular.module('ppPayouts').directive('createPayout', [ () => {
	return {
		restrict: 'E',
		scope: {},
		controller: ['$scope', 'createPayoutModel', ($scope, createPayoutModel) => {
			$scope.model = createPayoutModel
			$scope.model.setup()
		}],
		templateUrl: '/js/pages/create-payout/template.html'
	}
}])