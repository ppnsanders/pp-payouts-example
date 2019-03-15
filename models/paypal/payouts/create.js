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
