pp-payouts-example
===========

> **Disclaimer:** The applications provided here and all code is provided as-is.  These examples are intended to be **EXAMPLES** and are not intended to be used in a production environment.  I am employed at PayPal, however, the code herein is provided from myself as an example not from PayPal, Inc.  I hope these are helpful to helping you understand the API's, but please do not use in a production environment.

===========


## Setup

1. Clone or Fork this repo `$ git clone https://github.com/ppnsanders/pp-payouts-example.git`
2. Run `$ cd pp-payouts-example`
3. Run `$ npm install`
4. Run `$ bower install`
5. Create the Configuration File as [noted below](https://github.com/ppnsanders/pp-payouts-example#configuration).
6. Run `$ npm start`
7. Open your browser to `http://localhost:8000/`

## Configuration

Create a file for your configuration in the `/config` directory named `paypal.json`.

Populate the file with the JSON below containing **YOUR** PayPal Credentials from [developer.paypal.com](https://developer.paypal.com/developer/applications):

```json
{ 
	"client_id": "<YOUR_APP_CLIENT_ID>",
	"client_secret": "<YOUR_APP_CLIENT_SECRET>",
	"email": "<YOUR_PAYPAL_EMAIL>",
	"payerId": "<YOUR_ACCOUNT_MERCHANT_ID>", 
	"brandName": "<YOUR_BRAND_NAME>",
	"environment": "sandbox"
}
```
