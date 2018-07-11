'use strict';

module.exports = (router) => {

    router.get('/', (req, res) => {
    	res.cookie('XSRF-TOKEN', res.locals._csrf) //setting a cookie that is accessible by Angular
        res.render('index', { component: 'home-page'})
    })

    router.get('/negative-tests', (req, res) => {
    	res.cookie('XSRF-TOKEN', res.locals._csrf) //setting a cookie that is accessible by Angular
        res.render('index', { component: 'automated-tests'})
    })

}