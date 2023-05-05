import axios from 'axios';
import { API_NOTIFICATION_MESSAGE, SERVICE_URL } from './configConstant.js';
import { getType } from '../utils/commonUtils.js';


const API_URL = 'https://api.tvmaze.com/';
const axiosInstance = axios.create({ 
	baseURL: API_URL,
	timeout: 10000,
});



axiosInstance.interceptors.request.use(
	(config) => {

		if (config.TYPE.query) {
			config.url = config.url + "?q=" + config.TYPE.query
		}
		else if (config.TYPE.params) {
			config.params = config.TYPE.params
		}
		// console.log("config url ==>> ", config.url);
		return config;
	},
	(error) => {
		console.log("could not make request --->", error);
		return Promise.reject(error);
	}
)

axiosInstance.interceptors.response.use(
	function (response) {
		// Stop global loader here
		// console.log("reasponce for api request ---> ", response)
		return processResponse(response);
	},
	function (error) {
		// Stop global loader here
		// console.log("reasponce for api request ---> ", error)
		return Promise.reject(processError(error));
	}
)

// // // // // // // // // // // // // // // // // // // //

const processResponse = (response) => {
	// rasponce sucessful
	if (response?.status === 200) {
		return {
			isSuccess: true,
			data: response.data
		}
	}
	// responce failed
	else {
		return {
			isFailure: true,
			status: response?.status,
			msg: response?.msg,
			code: response?.code
		}
	}
}



// Error can be of 3 type:-
const processError = (error) => {
	if (error.responce) {
		// 1. responce error --> request sent sucessfuly... request is received by server... server also has sent a responce sucessfuly... but the responce was other then 200 series  i.e. server couldn't process the request due to any reason
		console.log("Error in respoce ---> ", error.toJSON());
		return {
			isError: true,
			msg: API_NOTIFICATION_MESSAGE.responceFailure,
			code: error.responce.status
		}
	}
	else if (error.request) {
		// 2. request error  --> request sent sucessfuly... but no responce was received.
		console.log("Error in request ---> ", error);
		return {
			isError: true,
			msg: API_NOTIFICATION_MESSAGE.requestFailuer,
			code: ""
		}
	}
	else {
		// 3. network error  --> couldn't make request(reason can be any thing.. like connection loss..etc) OR something went wrong from client side.
		console.log("Error in network ---> ", error);
		return {
			isError: true,
			msg: API_NOTIFICATION_MESSAGE.networkError,
			code: ""
		}
	}
}



export const API = {};

for (const [key, value] of Object.entries(SERVICE_URL)) {
	API[key] = (body, showUploadProgress, showDownloadProgress) => {  // ---> function creates an axios request
		return axiosInstance({
			url: value.url,
			method: value.method,
			data: body,
			responseType: value.responceType,
			// headers: {
			// 	authorization: getAccessToken()
			// },
			TYPE: getType(value, body),
		})
	}
}
