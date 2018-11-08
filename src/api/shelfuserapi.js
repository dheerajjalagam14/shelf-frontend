const http = require('http');
const fs = require('fs');

const defaultOptions = {
	hostname: 'localhost',
	port: 8888,
	method: 'POST',
	ca: fs.readFileSync('server.cert')
};

const requestDataParse = (options, resolve, reject) => { 
	return http.request(options, (res) =>{
		let body = '';
		res.on('data',(d)=>{
			body += d;
		});
		res.on('end', ()=>{
			if (res.statusCode == "200") { 
				resolve(JSON.parse(body)); //returned to 'then'
			} else {
				reject(JSON.parse(body));
			}
		});
	})
}

/*
	payload = {username: <USER>, password: <PASS>}
	result = {token: <JWT>}
*/
const login = (payload) => {
	const data = JSON.stringify(payload);
	return new Promise((resolve,reject)=> {
		const options = {
			...defaultOptions,
			path: '/user/login',
			headers: {
				'Content-Type': 'application/json'
			}
		}

		const req = requestDataParse(options,resolve,reject);
		req.on('error',(err)=>reject(err)); //returned to 'catch'
		req.write(data);
		req.end();
	})
}

/*
	payload = {username: <USER>, password: <PASS>, email: <EMAIL>}
	result = {}
*/
const register = (payload) => {
	const data = JSON.stringify(payload);
	return new Promise((resolve,reject)=> {
		const options = {
			...defaultOptions,
			path: '/user/register',
			headers: {
				'Content-Type': 'application/json'
			}
		}

		const req = requestDataParse(options,resolve,reject);
		req.on('error',(err)=>reject(err)); //returned to 'catch'
		req.write(data);
		req.end();
	})
}

/*
	payload = {email: <EMAIL>}
	result = {}
*/
const updateEmail = (userToken, payload) => {
	const data = JSON.stringify(payload);
	return new Promise((resolve,reject)=> {
		const options = {
			...defaultOptions,
			path: '/user/update/email',
			headers: {
				'authorization': 'Bearer ' + userToken,
				'Content-Type': 'application/json'
			}
		}

		const req = requestDataParse(options,resolve,reject);
		req.on('error',(err)=>reject(err)); //returned to 'catch'
		req.write(data);
		req.end();
	})
}

/*
	payload = {password: <PASS>}
	result = {}
*/
const updatePassword = (userToken, payload) => {
	const data = JSON.stringify(payload);
	return new Promise((resolve,reject)=> {
		const options = {
			...defaultOptions,
			path: '/user/update/password',
			headers: {
				'authorization': 'Bearer ' + userToken,
				'Content-Type': 'application/json'
			}
		}

		const req = requestDataParse(options,resolve,reject);
		req.on('error',(err)=>reject(err)); //returned to 'catch'
		req.write(data);
		req.end();
	})
}

/*
	payload = {email: <EMAIL>}
	result = {}
*/
const forgotPassword = (payload) => {
	const data = JSON.stringify(payload);
	return new Promise((resolve,reject)=> {
		const options = {
			...defaultOptions,
			path: '/user/forgot',
			headers: {
				'Content-Type': 'application/json'
			}
		}

		const req = requestDataParse(options,resolve,reject);
		req.on('error',(err)=>reject(err)); //returned to 'catch'
		req.write(data);
		req.end();
	})
}

/*
	payload = {token: <TOKEN>}
	result = {valid: <BOOL>}
*/
const verifyForgot = (payload) => {
	const data = JSON.stringify(payload);
	return new Promise((resolve,reject)=> {
		const options = {
			...defaultOptions,
			path: '/user/forgot/verify',
			headers: {
				'Content-Type': 'application/json'
			}
		}

		const req = requestDataParse(options,resolve,reject);
		req.on('error',(err)=>reject(err)); //returned to 'catch'
		req.write(data);
		req.end();
	})
}

/*
	payload = {token: <TOKEN>, password: <PASS>}
	result = {}
*/
const resetPassword = (payload) => {
	const data = JSON.stringify(payload);
	return new Promise((resolve,reject)=> {
		const options = {
			...defaultOptions,
			path: '/user/forgot/reset',
			headers: {
				'Content-Type': 'application/json'
			}
		}

		const req = requestDataParse(options,resolve,reject);
		req.on('error',(err)=>reject(err)); //returned to 'catch'
		req.write(data);
		req.end();
	})
}

const api = {
	login,
	register,
	updateEmail,
	updatePassword,
	forgotPassword,
	verifyForgot,
	resetPassword
}

module.exports = api;