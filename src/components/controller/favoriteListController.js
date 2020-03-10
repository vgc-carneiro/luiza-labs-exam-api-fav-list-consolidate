const mongoService = require('../service/mongoService');
const productService = require('../service/productService');
const clientService = require('../service/clientService');
const ObjectId = require('mongoose').Types.ObjectId;

function insertFavoriteListWithClientId(id, products, token){
	return new Promise((resolve, reject) => {
		if(!id || !products){
			reject({status: 400, data: {message: 'Falta de parâmetros.'}});
		}else{
			if (id.match(/^[0-9a-fA-F]{24}$/)) {
				let data = {
					clientId: ObjectId(id),
					active: true
				};
				mongoService.getFavoriteList(data).then((result) => {
					if(result){
						mongoService.saveProducts(products, result._id).then((r) => {
							resolve(r);
						}).catch((e) => {
							reject(e);
						});
					}else{
						clientService.getClientById(token, id).then((client) => {
							let clientprepared = clientService.prepareClient(client);
							mongoService.insertClient(clientprepared, products).then((favList) => {
								resolve(favList);
							}).catch((e) => {
								reject({status: 400, data: {message: e.message}});
							});

						}).catch(() => {
							reject({status: 404, data: {message: 'Cliente não encontrado.'}});
						});
					}
				});
			} else {
				reject({status: 400, data: {message: 'ID malformado.'}});
			}
		}
	});
}

function insertFavoriteListWithClientEmail(email, products, token){
	return new Promise((resolve, reject) => {
		if(!email || !products){
			reject({status: 400, data: {message: 'Falta de parâmetros.'}});
		}else{
			let data = {
				clientEmail: email,
				active: true
			};
			mongoService.getFavoriteList(data).then((result) => {
				if(result){
					mongoService.saveProducts(products, result._id).then((r) => {
						resolve(r);
					}).catch((e) => {
						reject(e);
					});
				}else{
					clientService.getClientByEmail(token, email).then((client) => {
						let clientprepared = clientService.prepareClient(client);
						mongoService.insertClient(clientprepared, products).then((favList) => {
							resolve(favList);
						}).catch((e) => {
							reject({status: 400, data: {message: e.message}});
						});

					}).catch(() => {
						reject({status: 404, data: {message: 'Cliente não encontrado.'}});
					});
				}
			});
		}
	});
}


function insertFavoriteListWithClientIdAndProductId(id, product, token){
	return new Promise((resolve, reject) => {
		if(!id || !product){
			reject({status: 400, data: {message: 'Falta de parâmetros.'}});
		}else{
			let data = {
				clientId: id,
				active: true
			};
			productService.getProduct(product).then((fullProduct) => {
				mongoService.getFavoriteList(data).then((result) => {
					if(result){
						if(result.productList.find(productSave => productSave.id === product)){
							reject({status: 400, data: {message: 'Produto já salvo na lista do cliente.'}});
						}else{
							mongoService.insertProduct(fullProduct, result).then((r) => {
								resolve(r);
							}).catch((e) => {
								reject({status: 400, data: {message: e.message}});
							});
						}
					}else{
						clientService.getClientById(token, id).then((client) => {
							let clientprepared = clientService.prepareClient(client);
							clientprepared.productList = [fullProduct];
							mongoService.insertFavList(clientprepared).then((favList) => {
								resolve(favList);
							}).catch((e) => {
								reject({status: 400, data: {message: e.message}});
							});
	
						}).catch(() => {
							reject({status: 404, data: {message: 'Cliente não encontrado.'}});
						});
					}
				});
			}).catch((e) => {
				reject(e);
			});
		}
	});
}

function insertFavoriteListWithClientEmailAndProductId(email, product, token){
	return new Promise((resolve, reject) => {
		let data = {
			clientEmail: email,
			active: true
		};
		if(!email || !product){
			reject({status: 400, data: {message: 'Falta de parâmetros.'}});
		}else{
			productService.getProduct(product).then((fullProduct) => {
				mongoService.getFavoriteList(data).then((result) => {
					if(result){
						if(result.productList.find(productSave => productSave.id === product)){
							reject({status: 400, data: {message: 'Produto já salvo na lista do cliente.'}});
						}else{
							mongoService.insertProduct(fullProduct, result).then((r) => {
								resolve(r);
							}).catch((e) => {
								reject({status: 400, data: {message: e.message}});
							});
						}
					}else{
						clientService.getClientByEmail(token, email).then((client) => {
							let clientprepared = clientService.prepareClient(client);
							clientprepared.productList = [fullProduct];
							mongoService.insertFavList(clientprepared).then((favList) => {
								resolve(favList);
							}).catch((e) => {
								reject({status: 400, data: {message: e.message}});
							});
	
						}).catch(() => {
							reject({status: 404, data: {message: 'Cliente não encontrado.'}});
						});
					}
				});
			}).catch((e) => {
				reject({status: e.code, data: {message: e.message}});
			});
		}
	});
}

function deleteFavoriteListWithClientIdAndProductId(id, product){
	return new Promise((resolve, reject) => {
		let data = {
			clientId: id,
			active: true
		};
		if(!id || !product){
			reject({status: 400, data: {message: 'Falta de parâmetros.'}});
		}else{
			mongoService.getFavoriteList(data).then((result) => {
				if(result){
					if(result.productList.find(productSave => productSave.id === product)){
						mongoService.deleteProduct(result, product).then((favList) => {
							resolve(favList);
						}).catch((e) => {
							reject({status: 400, data: {message: e.message}});
						});
					}else{
						reject({status: 404, data: {message: 'Produto não encontrado na lista do cliente.'}});
					}
				}else {
					reject({status: 404, data: {message: 'Cliente não encontrado.'}});
				}			
			});
		}
	});
}

function deleteFavoriteListWithClientEmailAndProductId(email, product){
	return new Promise((resolve, reject) => {
		let data = {
			clientEmail: email,
			active: true
		};
		if(!email || !product){
			reject({status: 400, data: {message: 'Falta de parâmetros.'}});
		}else{
			mongoService.getFavoriteList(data).then((result) => {
				if(result){
					if(result.productList.find(productSave => productSave.id === product)){
						mongoService.deleteProduct(result, product).then((favList) => {
							resolve(favList);
						}).catch((e) => {
							reject({status: 400, data: {message: e.message}});
						});
					}else{
						reject({status: 404, data: {message: 'Produto não encontrado na lista do cliente.'}});
					}
				}else {
					reject({status: 404, data: {message: 'Cliente não encontrado.'}});
				}			
			});
		}
	});
}

module.exports = {insertFavoriteListWithClientId, deleteFavoriteListWithClientEmailAndProductId, deleteFavoriteListWithClientIdAndProductId, insertFavoriteListWithClientIdAndProductId, insertFavoriteListWithClientEmailAndProductId, insertFavoriteListWithClientEmail};