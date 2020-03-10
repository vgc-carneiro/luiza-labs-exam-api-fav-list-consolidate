const log = require('log4js').getLogger('requestService');
const env = require('../../config/env');
const http = require('http');

function getRequest(token, path){
	return new Promise((resolve, reject) => {
		const options = {
			hostname: env.services.product.host,
			path: path,
			method: 'GET',
			headers: {token: token}
		};
		const req = http.request(options, (res) => {
			if(res.statusCode != 200){
				reject({code: res.statusCode, message: res.statusMessage});
			}else{
				res.on('data', (d) => {
					resolve(Buffer.from(d).toString());
				});
			}
		});
		req.on('error', (e) => {
			log.error('getRequest:', e);
			reject({code: 500, message: e.message});
		});
		req.end();
	});
}

function getRequestInnerSystem(token, path){
	return new Promise((resolve, reject) => {
		const options = {
			hostname: env.services.hostname,
			port: env.services.port,
			path: path,
			method: 'GET',
			headers: {token: token}
		};
		const req = http.request(options, (res) => {
			if(res.statusCode != 200){
				reject({code: res.statusCode, message: res.statusMessage});
			}else{
				res.on('data', (d) => {
					resolve(Buffer.from(d).toString());
				});
			}
		});
		req.on('error', (e) => {
			log.error('getRequest:', e);
			reject({code: 500, message: e.message});
		});
		req.end();
	});
}



module.exports = {getRequest, getRequestInnerSystem};