'use strict'

angular.module('ppPayouts').service('createPayoutModel', function ($http, $cookies) {

	function setup() {
		model.merchant = $cookies.getObject('merchant-conf')
		model.getPayoutObj()
	}

	function getPayoutObj() {
		return $http.get('/api/payoutObj').then((response) => {
			model.payoutObj = response.data
		})
	}

	function createPayout() {
		$('#payoutFields').hide()
		$('#payoutCreateButton').hide()
		$('#payoutResponseObject').show('slide')
		$('#payoutResponseLoading').show()
		const reqUrl = '/api/payout'
		const config = {
            'xsrfHeaderName': 'X-CSRF-TOKEN',
            'xsrfCookieName': 'XSRF-TOKEN'
        }
        return $http.post(reqUrl, { merchant: model.merchant, payout: model.payoutObj}, config).then((response) => {
        	model.payoutResponse = response.data
        	setTimeout(() => {
        		$('#payoutResponseLoading').hide()
        		$('#payoutResponseJson').show()
        	}, 500)
        	return model.payoutResponse
        })
	}

	let model = {
		receivers: {},
		merchant: {},
		payoutObj: {},
		payoutResponse: {},
		setup: (model) => {
			return setup(model)
		},
		getPayoutObj: (model) => {
			return getPayoutObj(model)
		},
		createPayout: (model) => {
			return createPayout(model)
		}
	}

	return model
})