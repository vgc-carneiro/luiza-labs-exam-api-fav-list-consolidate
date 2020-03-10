const requestService = require('./requestService');

function getClientById(token, id){
	return new Promise((resolve, reject) => {
		requestService.getRequestInnerSystem(token, '/luiza-labs-exam/client/'+id).then((result) => {
			resolve(JSON.parse(result));
		}).catch((e) => {
			reject(e);
		});
	});
}

function getClientByEmail(token, email){
	return new Promise((resolve, reject) => {
		requestService.getRequestInnerSystem(token, '/luiza-labs-exam/client/email/'+email).then((result) => {
			resolve(JSON.parse(result));
		}).catch((e) => {
			reject(e);
		});
	});
}

function prepareClient(client){
	let clientPrepared = {
		clientId: client._id,
		clientName: client.name,
		clientEmail: client.email,
		active: client.active,
		updatedAt: new Date(),
		createdAt: new Date()
	};
	return clientPrepared;
}

module.exports = {getClientById, prepareClient, getClientByEmail};