'use strict'

angular.module('ppPayouts').service('automatedTestsModel', function ($http, $cookies) {

	let createTestsComplete = false
	let createItemTestsComplete = false
	let getItemTestsComplete = false
	let showTestsComplete = false

	function setup() {
		model.errors = {}
		model.errors.create = []
		model.errors.create[0] = {}
		model.errors.create[0].id = "createERRPYO001"
		model.errors.create[0].type = "POST v1/payments/payouts"
		model.errors.create[0].number = "ERRPYO001"
		model.errors.create[0].errorName = "SENDER_RESTRICTED"
		model.errors.create[1] = {}
		model.errors.create[1].id = "createERRPYO002"
		model.errors.create[1].type = "POST v1/payments/payouts"
		model.errors.create[1].number = "ERRPYO002"
		model.errors.create[1].errorName = "SENDER_EMAIL_UNCONFIRMED"
		model.errors.create[2] = {}
		model.errors.create[2].id = "createERRPYO003"
		model.errors.create[2].type = "POST v1/payments/payouts"
		model.errors.create[2].number = "ERRPYO003"
		model.errors.create[2].errorName = "AUTHORIZATION_ERROR"
		model.errors.create[3] = {}
		model.errors.create[3].id = "createERRPYO005"
		model.errors.create[3].type = "POST v1/payments/payouts"
		model.errors.create[3].number = "ERRPYO005"
		model.errors.create[3].errorName = "INSUFFICIENT_FUNDS"
		model.errors.create[4] = {}
		model.errors.create[4].id = "createERRPYO006"
		model.errors.create[4].type = "POST v1/payments/payouts"
		model.errors.create[4].number = "ERRPYO006"
		model.errors.create[4].errorName = "INTERNAL_ERROR"
		model.errors.create[5] = {}
		model.errors.create[5].id = "createERRPYO010"
		model.errors.create[5].type = "POST v1/payments/payouts"
		model.errors.create[5].number = "ERRPYO010"
		model.errors.create[5].errorName = "MALFORMED_REQUEST_ERROR"
		model.errors.create[6] = {}
		model.errors.create[6].id = "createERRPYO011"
		model.errors.create[6].type = "POST v1/payments/payouts"
		model.errors.create[6].number = "ERRPYO011"
		model.errors.create[6].errorName = "REQUIRED_SCOPE_MISSING"
		model.errors.create[7] = {}
		model.errors.create[7].id = "createERRPYO012"
		model.errors.create[7].type = "POST v1/payments/payouts"
		model.errors.create[7].number = "ERRPYO012"
		model.errors.create[7].errorName = "SENDER_LOCKED"
		model.errors.create[8] = {}
		model.errors.create[8].id = "createERRPYO013"
		model.errors.create[8].type = "POST v1/payments/payouts"
		model.errors.create[8].number = "ERRPYO013"
		model.errors.create[8].errorName = "THIRD_PARTY_CALLS_FORBIDDEN"
		model.errors.create[9] = {}
		model.errors.create[9].id = "createERRPYO014"
		model.errors.create[9].type = "POST v1/payments/payouts"
		model.errors.create[9].number = "ERRPYO014"
		model.errors.create[9].errorName = "USER_BUSINESS_ERROR"
		model.errors.createItem = []
		model.errors.createItem[0] = {}
		model.errors.createItem[0].id = "createItemERRPOI001"
		model.errors.createItem[0].type = "POST v1/payments/payouts-item/ERRPOI001/cancel"
		model.errors.createItem[0].number = "ERRPOI001"
		model.errors.createItem[0].errorName = "INVALID_RESOURCE_ID"
		model.errors.createItem[1] = {}
		model.errors.createItem[1].id = "createItemERRPOI002"
		model.errors.createItem[1].type = "POST v1/payments/payouts-item/ERRPOI002/cancel"
		model.errors.createItem[1].number = "ERRPOI002"
		model.errors.createItem[1].errorName = "ITEM_INCORRECT_STATUS"
		model.errors.createItem[2] = {}
		model.errors.createItem[2].id = "createItemERRPYO004"
		model.errors.createItem[2].type = "POST v1/payments/payouts-item/ERRPYO004/cancel"
		model.errors.createItem[2].number = "ERRPYO004"
		model.errors.createItem[2].errorName = "BATCH_NOT_COMPLETED"
		model.errors.createItem[3] = {}
		model.errors.createItem[3].id = "createItemERRPYO007"
		model.errors.createItem[3].type = "POST v1/payments/payouts-item/ERRPYO007/cancel"
		model.errors.createItem[3].number = "ERRPYO007"
		model.errors.createItem[3].errorName = "ITEM_ALREADY_CANCELLED"
		model.errors.createItem[4] = {}
		model.errors.createItem[4].id = "createItemERRPYO008"
		model.errors.createItem[4].type = "POST v1/payments/payouts-item/ERRPYO008/cancel"
		model.errors.createItem[4].number = "ERRPYO008"
		model.errors.createItem[4].errorName = "ITEM_CANCELLATION_FAILED"
		model.errors.createItem[5] = {}
		model.errors.createItem[5].id = "createItemERRPYO009"
		model.errors.createItem[5].type = "POST v1/payments/payouts-item/ERRPYO009/cancel"
		model.errors.createItem[5].number = "ERRPYO009"
		model.errors.createItem[5].errorName = "ITEM_INCORRECT_STATUS"
		model.errors.getItem = []
		model.errors.getItem[0] = {}
		model.errors.getItem[0].id = "getItemERRPOI003"
		model.errors.getItem[0].type = "GET v1/payments/payouts-item/ERRPOI003"
		model.errors.getItem[0].number = "ERRPOI003"
		model.errors.getItem[0].errorName = "INVALID_RESOURCE_ID"
		model.errors.show = []
		model.errors.show[0] = {}
		model.errors.show[0].id = "showERRPYO015"
		model.errors.show[0].type = "GET v1/payments/payouts/ERRPYO015"
		model.errors.show[0].number = "ERRPYO015"
		model.errors.show[0].errorName = "CLOSED_MARKET"
		model.errors.show[1] = {}
		model.errors.show[1].id = "showERRPYO016"
		model.errors.show[1].type = "GET v1/payments/payouts/ERRPYO016"
		model.errors.show[1].number = "ERRPYO016"
		model.errors.show[1].errorName = "CURRENCY_COMPLIANCE"
		model.errors.show[2] = {}
		model.errors.show[2].id = "showERRPYO017"
		model.errors.show[2].type = "GET v1/payments/payouts/ERRPYO017"
		model.errors.show[2].number = "ERRPYO017"
		model.errors.show[2].errorName = "CURRENCY_NOT_SUPPORTED_FOR_RECEIVER"
		model.errors.show[3] = {}
		model.errors.show[3].id = "showERRPYO018"
		model.errors.show[3].type = "GET v1/payments/payouts/ERRPYO018"
		model.errors.show[3].number = "ERRPYO018"
		model.errors.show[3].errorName = "DUPLICATE_ITEM"
		model.errors.show[4] = {}
		model.errors.show[4].id = "showERRPYO019"
		model.errors.show[4].type = "GET v1/payments/payouts/ERRPYO019"
		model.errors.show[4].number = "ERRPYO019"
		model.errors.show[4].errorName = "RECEIVER_ACCOUNT_LOCKED"
		model.errors.show[5] = {}
		model.errors.show[5].id = "showERRPYO020"
		model.errors.show[5].type = "GET v1/payments/payouts/ERRPYO020"
		model.errors.show[5].number = "ERRPYO020"
		model.errors.show[5].errorName = "RECEIVER_COUNTRY_NOT_ALLOWED"
		model.errors.show[6] = {}
		model.errors.show[6].id = "showERRPYO021"
		model.errors.show[6].type = "GET v1/payments/payouts/ERRPYO021"
		model.errors.show[6].number = "ERRPYO021"
		model.errors.show[6].errorName = "RECEIVER_UNCONFIRMED"
		model.errors.show[7] = {}
		model.errors.show[7].id = "showERRPYO022"
		model.errors.show[7].type = "GET v1/payments/payouts/ERRPYO022"
		model.errors.show[7].number = "ERRPYO022"
		model.errors.show[7].errorName = "RECEIVER_UNREGISTERED"
		model.errors.show[8] = {}
		model.errors.show[8].id = "showERRPYO023"
		model.errors.show[8].type = "GET v1/payments/payouts/ERRPYO023"
		model.errors.show[8].number = "ERRPYO023"
		model.errors.show[8].errorName = "RECEIVER_YOUTH_ACCOUNT"
		model.errors.show[9] = {}
		model.errors.show[9].id = "showERRPYO024"
		model.errors.show[9].type = "GET v1/payments/payouts/ERRPYO024"
		model.errors.show[9].number = "ERRPYO024"
		model.errors.show[9].errorName = "RECEIVING_LIMIT_EXCEEDED"
		model.errors.show[10] = {}
		model.errors.show[10].id = "showERRPYO025"
		model.errors.show[10].type = "GET v1/payments/payouts/ERRPYO025"
		model.errors.show[10].number = "ERRPYO025"
		model.errors.show[10].errorName = "REGULATORY_BLOCKED"
		model.errors.show[11] = {}
		model.errors.show[11].id = "showERRPYO026"
		model.errors.show[11].type = "GET v1/payments/payouts/ERRPYO026"
		model.errors.show[11].number = "ERRPYO026"
		model.errors.show[11].errorName = "REGULATORY_PENDING"
		model.errors.show[12] = {}
		model.errors.show[12].id = "showERRPYO027"
		model.errors.show[12].type = "GET v1/payments/payouts/ERRPYO027"
		model.errors.show[12].number = "ERRPYO027"
		model.errors.show[12].errorName = "RISK_DECLINE"
		model.errors.show[13] = {}
		model.errors.show[13].id = "showERRPYO028"
		model.errors.show[13].type = "GET v1/payments/payouts/ERRPYO028"
		model.errors.show[13].number = "ERRPYO028"
		model.errors.show[13].errorName = "SELF_PAY_NOT_ALLOWED"
		model.errors.show[14] = {}
		model.errors.show[14].id = "showERRPYO029"
		model.errors.show[14].type = "GET v1/payments/payouts/ERRPYO029"
		model.errors.show[14].number = "ERRPYO029"
		model.errors.show[14].errorName = "TRANSACTION_LIMIT_EXCEEDED"
		model.errors.show[15] = {}
		model.errors.show[15].id = "showERRPYO030"
		model.errors.show[15].type = "GET v1/payments/payouts/ERRPYO030"
		model.errors.show[15].number = "ERRPYO030"
		model.errors.show[15].errorName = "UNDEFINED"
		model.errors.show[16] = {}
		model.errors.show[16].id = "showERRPYO031"
		model.errors.show[16].type = "GET v1/payments/payouts/ERRPYO031"
		model.errors.show[16].number = "ERRPYO031"
		model.errors.show[16].errorName = "ZERO_AMOUNT"
		model.merchant = $cookies.getObject('merchant-conf')
	}

	function runCreateItemTests() {
		console.log('running create item tests..')
		async.each(model.errors.createItem, (errorObj, callback) => {
			const reqUrl = '/api/negative-tests/create-item/' + errorObj.number
				$http.get(reqUrl).then((response) => {
					model.tests.push({ error: errorObj, result: response.data })
					callback()
				})
		}, (result) => {
			console.log('create tests complete.. waiting to verify..')
			createItemTestsComplete = true
			model.verifyTests()
		})	
	}

	function runCreateTests() {
		console.log('running create tests..')
		async.each(model.errors.create, (errorObj, callback) => {
			const reqUrl = '/api/negative-tests/create/' + errorObj.number
				$http.get(reqUrl).then((response) => {
					model.tests.push({ error: errorObj, result: response.data })
					callback()
				})
		}, (result) => {
			console.log('create tests complete.. waiting to verify..')
			createTestsComplete = true
			model.verifyTests()
		})	
	}

	function runGetItemTests() {
		console.log('running get item tests..')
		async.each(model.errors.getItem, (errorObj, callback) => {
			const reqUrl = '/api/negative-tests/get-item/' + errorObj.number
				$http.get(reqUrl).then((response) => {
					model.tests.push({ error: errorObj, result: response.data })
					callback()
				})
		}, (result) => {
			console.log('get item tests complete.. waiting to verify..')
			getItemTestsComplete = true
			model.verifyTests()
		})	
	}

	function runShowTests() {
		console.log('running show tests..')
		async.each(model.errors.show, (errorObj, callback) => {
			const reqUrl = '/api/negative-tests/show/' + errorObj.number
				$http.get(reqUrl).then((response) => {
					model.tests.push({ error: errorObj, result: response.data })
					callback()
				})
		}, (result) => {
			console.log('create tests complete.. waiting to verify..')
			showTestsComplete = true
			model.verifyTests()
		})	
	}

	function runTests() {
		$('#runTestsButton').hide()
		model.runShowTests()
		model.runGetItemTests()
		model.runCreateTests()
		model.runCreateItemTests()
	}

	function verifyTests() {
		if(createTestsComplete === true && createItemTestsComplete === true && getItemTestsComplete === true && showTestsComplete === true) {
			setTimeout(() => {
			console.log('verifying tests')
			async.forEachOf(model.tests, (value, key, callback) => {
					if(typeof value.result.response.items === 'undefined') {
						if(value.result.response.name === value.error.errorName) {
							$('#check' + value.error.id).show()
							callback()
						} else {
							$('#failed' + value.error.id).show()
							callback()
						}
					} else {
						if(typeof value.result.response.items[0] !== 'undefined') {
							//console.log('items[0] is defined')
							if(typeof value.result.response.items[0].errors !== 'undefined') {
								//console.log('items[0].errors is defined')
								if(typeof value.result.response.items[0].errors.name !== 'undefined') {
									//console.log('items[0].errors.name is defined')
									if(value.result.response.items[0].errors.name === value.error.errorName) {
										$('#check' + value.error.id).show()
										callback()
									} else {
										$('#failed' + value.error.id).show()
										callback()
									}
								} else {
									//console.log('items[0].errors.name isnt defined?')
								}
							} else {
								//console.log('items[0].errors is not defined')
								if(typeof value.result.response.items[1] !== 'undefined') {
									//console.log('items[1] is defined')
									if(typeof value.result.response.items[1].errors !== 'undefined') {
										//console.log('items[1].errors is defined')
										if(typeof value.result.response.items[1].errors.name !== 'undefined') {
											//console.log('items[1].errors.name is defined')
											if(value.result.response.items[1].errors.name === value.error.errorName) {
												$('#check' + value.error.id).show()
												callback()
											} else {
												$('#failed' + value.error.id).show()
												callback()
											}
										}else {
											//console.log('items[1].errors.name isnt defined')
										}
									} else {
										//console.log('items[1].errors isnt defined')
									}
								} else {
									//console.log('items[1] isnt defined')
								}
							}
						} else {
							//console.log('items[0] is undefined')
						}			
					}				
			}, (result) => {
				console.log('verify tests complete')
			})
		}, 1000)
		} else {
			console.log('tests still running')
		}
	}


	let model = {
		merchant: {},
		basePayoutObject: {},
		tests: [],
		errors: [],
		setup: (model) => {
			return setup(model)
		},
		runTests: (model) => {
			return runTests(model)
		},
		runCreateTests: (model) => {
			return runCreateTests(model)
		},
		runCreateItemTests: (model) => {
			return runCreateItemTests(model)
		},
		runGetItemTests: (model) => {
			return runGetItemTests(model)
		},
		runShowTests: (model) => {
			return runShowTests(model)
		},
		verifyTests: (model) => {
			return verifyTests(model)
		}
	}

	return model
})