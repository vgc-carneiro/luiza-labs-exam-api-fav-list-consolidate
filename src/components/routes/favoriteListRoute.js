const express = require('express');
const router = express.Router();
const log = require('log4js').getLogger('clientRoute');
const controller = require('../controller/favoriteListController');
const authService = require('../service/authService');
 
router.post('/client/:id', authService.authenticationMiddleware(), function(req, res) {
	log.info('/', req.headers.token);
	log.info('/', req.params);
	log.info('/', req.body.products);
	controller.insertFavoriteListWithClientId(req.params.id, req.body.products, req.headers.token).then((result) => {
		res.status(200).send(result);
	}).catch((e) => {
		res.status(e.status).send(e.data);
	});
});

router.post('/client/email/:email', authService.authenticationMiddleware(), function(req, res) {
	log.info('/', req.headers.token);
	log.info('/', req.params);
	log.info('/', req.body.products);
	controller.insertFavoriteListWithClientEmail(req.params.email, req.body.products, req.headers.token).then((result) => {
		res.status(200).send(result);
	}).catch((e) => {
		res.status(e.status).send(e.data);
	});
});

router.patch('/client/:id/:productId', authService.authenticationMiddleware(), function(req, res) {
	log.info('/', req.headers.token);
	log.info('/', req.params);
	controller.insertFavoriteListWithClientIdAndProductId(req.params.id, req.params.productId, req.headers.token).then((result) => {
		res.status(200).send(result);
	}).catch((e) => {
		res.status(e.status).send(e.data);
	});
});

router.patch('/client/email/:email/:productId', authService.authenticationMiddleware(), function(req, res) {
	log.info('/', req.headers.token);
	log.info('/', req.params);
	controller.insertFavoriteListWithClientEmailAndProductId(req.params.email, req.params.productId, req.headers.token).then((result) => {
		res.status(200).send(result);
	}).catch((e) => {
		res.status(e.status).send(e.data);
	});
});

router.delete('/client/:id/:productId', authService.authenticationMiddleware(), function(req, res) {
	log.info('/', req.headers.token);
	log.info('/', req.params);
	controller.deleteFavoriteListWithClientIdAndProductId(req.params.id, req.params.productId).then((result) => {
		res.status(200).send(result);
	}).catch((e) => {
		res.status(e.status).send(e.data);
	});
});

router.delete('/client/email/:email/:productId', authService.authenticationMiddleware(), function(req, res) {
	log.info('/', req.headers.token);
	log.info('/', req.params);
	controller.deleteFavoriteListWithClientEmailAndProductId(req.params.email, req.params.productId).then((result) => {
		res.status(200).send(result);
	}).catch((e) => {
		res.status(e.status).send(e.data);
	});
});

module.exports = router;