const mongodb = require('../../config/mongodb');
const FavoriteList = require('../model/FavoriteList');
const productService = require('../service/productService');
const log = require('log4js').getLogger('mongoService');

async function tryConnectToMongo() {
	if(mongodb.checkState() !== 1) {
		await mongodb.connection();
	}
}

function getFavoriteList(data){
	return new Promise((resolve, reject) => {
		tryConnectToMongo().then(() => {
			FavoriteList.findOne(data).then((result) => {
				resolve(result);
			}, (error) => {
				log.error('getFavoriteList:', error);
				reject(error);
			});
		});
	});
}

function saveFavList(id, products){
	return new Promise((resolve, reject) => {
		tryConnectToMongo().then(() => {
			FavoriteList.findOneAndUpdate({_id: id} , {productList: products}).then((result) => {
				result.productList = products;
				resolve(result);
			}, (error) => {
				log.error('saveFavList:', error);
				reject(error);
			});
		});
	});
}

function insertClient(client, products){
	return new Promise((resolve, reject) => {
		productService.prepareProductList(products).then((productList) => {
			client.productList = productList;
			return FavoriteList.create(client);
		}).then((result) => {
			resolve(result);
		}).catch((e) => {
			reject(e);
		});
	});
}

function insertFavList(favList){
	return new Promise((resolve, reject) => {
		FavoriteList.create(favList).then((result) => {
			resolve(result);
		}).catch((e) => {
			reject(e);
		});
	});
}

function saveProducts(products, id){
	return new Promise((resolve, reject) => {
		productService.prepareProductList(products).then((productList) => {
			saveFavList(id, productList).then((favListSalva) => {
				resolve(favListSalva);
			}).catch((e) => {
				reject({status: 400, data: {message: e.message}});
			});
		}).catch((e) => {
			reject({status: 400, data: {message: e.message}});
		});
	});
}

function insertProduct(product, favList){
	return new Promise((resolve, reject) => {
		tryConnectToMongo().then(() => {
			FavoriteList.findOneAndUpdate({_id: favList._id} , { $push: {productList: product}}).then((result) => {
				result.productList.push(product);
				resolve(result);
			}, (error) => {
				log.error('saveFavList:', error);
				reject(error);
			});
		});
	});
}

function deleteProduct(favList, product){
	return new Promise((resolve, reject) => {
		FavoriteList.update({_id: favList._id, $pull: {productList: { id: product}}}).then(() => {
			return FavoriteList.findOne({_id: favList._id});
		}).then((result) => {
			resolve(result);
		}).catch((e) => {
			reject(e);
		});
	});
}

module.exports = {getFavoriteList, saveFavList,insertClient, saveProducts, insertProduct, insertFavList, deleteProduct};