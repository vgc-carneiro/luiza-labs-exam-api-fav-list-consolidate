const log = require('log4js').getLogger('productService');
const requestService = require('./requestService');

async function prepareProductList(productList){
	let retorno = [];
	let index;
	for(index in productList){
		await requestService.getRequest(null, '/api/product/'+productList[index]).then((product) => {
			retorno.push(JSON.parse(product));
		}).catch((e) => {
			log.error('Error on request: ', e);
		});
	}
	return retorno;
}

async function getProduct(product){
	return new Promise((resolve, reject) => {
		requestService.getRequest(null, '/api/product/'+product).then((product) => {
			resolve(JSON.parse(product));
		}).catch((e) => {
			log.error('Error on request: ', e);
			reject(e);
		});
	});
}

module.exports = {prepareProductList, getProduct};