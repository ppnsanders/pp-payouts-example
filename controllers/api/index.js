'use strict'
const paypalConfig = require('../../config/paypal.json')
const receivers = require('../../config/receivers.json')
const request = require('request')
const CreatePayoutModel = require('../../models/paypal/payouts/create')
const paypal = require('paypal-rest-sdk')

module.exports = (router) => {

	router.get('/config', (req, res) => {
		//console.log(paypalConfig)
		res.json(paypalConfig)
	})

	router.get('/payoutObj', (req, res) => {
		let payoutRequest = new CreatePayoutModel(receivers.payout_receivers)
		res.json(payoutRequest)
	})

	router.get('/byBatchId/:batchId', (req, res) => {
		paypal.configure({
			'mode': 'sandbox',
			'client_id': paypalConfig.client_id,
			'client_secret': paypalConfig.client_secret
		})
		paypal.payout.get(req.params.batchId, (err, payout) => {
			if (err) {
		        console.log('ERROR in GET /api/byBatchId/' + req.params.batchId)
				console.log(err)
				res.json(err)
		    } else {
		        //console.log("Get PAYOUT response");
		        //console.log(payout);
		        res.json(payout)
		    }
		})
	})

	router.get('/payoutItem/:itemId', (req, res) => {
		paypal.configure({
			'mode': 'sandbox',
			'client_id': paypalConfig.client_id,
			'client_secret': paypalConfig.client_secret
		})
		paypal.payoutItem.get(req.params.itemId, (err, payout) => {
			if (err) {
		        console.log('ERROR in GET /api/payoutItem/' + req.params.itemId)
				console.log(err)
				res.json(err)
		    } else {
		        //console.log("Get PAYOUT ITEM response");
		        //console.log(payout);
		        res.json(payout)
		    }
		})
	})

	router.get('/negative-tests/create/:errorNumber', (req, res) => {
		getAccessToken(paypalConfig, (err, credentials) => {
			if(err) {
				console.log('ERROR')
				console.log(err)
			} else {
				const timestamp = Date.now()
				let receiversAr = []
				    receiversAr[0] = {}
					receiversAr[0].recipient_type = "EMAIL"
					receiversAr[0].amount = {}
					receiversAr[0].amount.value = "1.00"
					receiversAr[0].amount.currency = "USD"
					receiversAr[0].note = req.params.errorNumber
					receiversAr[0].sender_item_id = timestamp + req.params.errorNumber
					receiversAr[0].receiver = 'payouts-simulator-receiver@paypal.com'
				let payoutRequest = new CreatePayoutModel(receiversAr)
				const reqUrl = "https://api.sandbox.paypal.com/v1/payments/payouts"
				const options = {
                      url: reqUrl,
                      method: "POST",
                      headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Accept-Language": "en_US",
                        "Authorization": "Bearer " + credentials.access_token
                      },
                      body: payoutRequest,
                      json: true
                }
				request(options, (err, response, body) => {
					if(err) {
						console.log('ERROR in POST Payout')
						console.log(err)
						res.json(err)
					} else {
						res.json({request: options, response: body})
					}
				})
			}
		})
	})

	router.get('/negative-tests/create-item/:errorNumber', (req, res) => {
		getAccessToken(paypalConfig, (err, credentials) => {
			if(err) {
				console.log('ERROR')
				console.log(err)
			} else {
				const timestamp = Date.now()
				let receiversAr = []
				    receiversAr[0] = {}
					receiversAr[0].recipient_type = "EMAIL"
					receiversAr[0].amount = {}
					receiversAr[0].amount.value = "1.00"
					receiversAr[0].amount.currency = "USD"
					receiversAr[0].note = req.params.errorNumber
					receiversAr[0].sender_item_id = timestamp + req.params.errorNumber
					receiversAr[0].receiver = 'payouts-simulator-receiver@paypal.com'
				let payoutRequest = new CreatePayoutModel(receiversAr)
				const reqUrl = "https://api.sandbox.paypal.com/v1/payments/payouts-item/" + req.params.errorNumber + "/cancel"
				const options = {
                      url: reqUrl,
                      method: "POST",
                      headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Accept-Language": "en_US",
                        "Authorization": "Bearer " + credentials.access_token
                      },
                      body: payoutRequest,
                      json: true
                }
				request(options, (err, response, body) => {
					if(err) {
						console.log('ERROR in POST Payout')
						console.log(err)
						res.json(err)
					} else {
						res.json({request: options, response: body})
					}
				})
			}
		})
	})

	router.get('/negative-tests/show/:errorNumber', (req, res) => {
		getAccessToken(paypalConfig, (err, credentials) => {
			if(err) {
				console.log('ERROR')
				console.log(err)
			} else {
				const reqUrl = "https://api.sandbox.paypal.com/v1/payments/payouts/" + req.params.errorNumber
				const options = {
                      url: reqUrl,
                      method: "GET",
                      headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Accept-Language": "en_US",
                        "Authorization": "Bearer " + credentials.access_token
                      },
                      body: {},
                      json: true
                }
				request(options, (err, response, body) => {
					if(err) {
						console.log('ERROR in GET Payout')
						console.log(err)
						res.json(err)
					} else {
						res.json({request: options, response: body})
					}
				})
			}
		})
	})

	router.get('/negative-tests/get-item/:errorNumber', (req, res) => {
		getAccessToken(paypalConfig, (err, credentials) => {
			if(err) {
				console.log('ERROR')
				console.log(err)
			} else {
				const reqUrl = "https://api.sandbox.paypal.com/v1/payments/payouts-item/" + req.params.errorNumber
				const options = {
                      url: reqUrl,
                      method: "GET",
                      headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Accept-Language": "en_US",
                        "Authorization": "Bearer " + credentials.access_token
                      },
                      body: {},
                      json: true
                }
				request(options, (err, response, body) => {
					if(err) {
						console.log('ERROR in GET Payout')
						console.log(err)
						res.json(err)
					} else {
						res.json({request: options, response: body})
					}
				})
			}
		})
	})

	router.post('/payout', (req, res) => {
		paypal.configure({
			'mode': 'sandbox',
			'client_id': paypalConfig.client_id,
			'client_secret': paypalConfig.client_secret
		})
		const payoutRequest = req.body.payout
		paypal.payout.create(payoutRequest, (err, payout) => {
		    if (err) {
		        console.log('ERROR in POST /api/paypal/payout')
				console.log(err)
				res.json(err)
		    } else {
		        //console.log("Create Payout Response");
		        //console.log(payout);
		        res.json(payout)
		    }
		})
	})

}

function getAccessToken(ppConfig, callback) {
    const reqObj = {
        "url": "https://api.sandbox.paypal.com/v1/oauth2/token",
        "method": "POST",
        "auth": {
          "user": ppConfig.client_id,
          "pass": ppConfig.client_secret,
          "sendImmediately": true
        },
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept-Language": "en_US"
        },
        "form": "grant_type=client_credentials"
    }
    request(reqObj, (err, response, body) => {
        if(err) {
            console.log('ERROR: ', err)
            callback(err)
        } else {
        	const credentials = JSON.parse(body)
            callback(null, credentials)
        }
    })
}
