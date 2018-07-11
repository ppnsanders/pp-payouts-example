'use strict'
const paypalConfig = require('../../../config/paypal.json')

/* CreatePayoutItem(array)
 * 
 * @params receivers array
 * @return payout object
 */
module.exports = function CreatePayoutItem(receivers) {
		const batchId = Date.now()
        let payout = {}
        	payout.sender_batch_header = {}
        	payout.sender_batch_header.sender_batch_id = batchId
        	payout.sender_batch_header.email_subject = 'You have a new Payout from ' + paypalConfig.brandName + '!'
        	payout.sender_batch_header.email_message = 'You have received a Payout from ' + paypalConfig.brandName + '! Thanks!'
        	payout.items = receivers

          return payout
}


/*
{
  "sender_batch_header": {
  "sender_batch_id": "2014021801",
  "email_subject": "You have a payout!",
  "email_message": "You have received a payout! Thanks for using our service!"
  },
  "items": [
  {
    "recipient_type": "EMAIL",
    "amount": {
    "value": "9.87",
    "currency": "USD"
    },
    "note": "Thanks for your patronage!",
    "sender_item_id": "201403140001",
    "receiver": "receiver@example.com"
  },
  {
    "recipient_type": "PHONE",
    "amount": {
    "value": "112.34",
    "currency": "EUR"
    },
    "note": "Thanks for your support!",
    "sender_item_id": "201403140002",
    "receiver": "91-734-234-1234"
  },
  {
    "recipient_type": "PHONE",
    "amount": {
    "value": "5.32",
    "currency": "USD"
    },
    "note": "Thanks for your patronage!",
    "sender_item_id": "201403140003",
    "receiver": "408-234-1234"
  },
  {
    "recipient_type": "PHONE",
    "amount": {
    "value": "5.32",
    "currency": "USD"
    },
    "note": "Thanks for your patronage!",
    "sender_item_id": "201403140004",
    "receiver": "408-234-1234"
  }
  ]
}
*/