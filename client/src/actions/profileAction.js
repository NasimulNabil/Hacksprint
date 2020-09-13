import axios from "axios";
import { UPDATE_PROFILE, GET_PROFILE, ADD_WORK, ADD_EDUCATION } from "./types";

export function getProfile(token) {
	return function (dispatch) {
		axios
			.get(`${process.env.REACT_APP_WEBSITE_NAME}/api/profile/`, {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then((res) => {
				let profile = res.data;
				delete profile.id;

				dispatch({
					type: GET_PROFILE,
					payload: profile,
				});
			})
			.catch((err) => console.log(err, "from profile action"));
	};
}

export function updateProfile(token, data) {
	return function (dispatch) {
		console.log(data, "--------------------data");
		let form_data = new FormData();
    form_data.append('image', data.image, data.image.name);
		form_data.append('contact', data.contact);
		form_data.append('website', data.website);
		form_data.append('location', data.location);
		
		axios
			.post(`${process.env.REACT_APP_WEBSITE_NAME}/api/profile/`, form_data, {
				headers: {
					Authorization: `Token ${token}`,
					'content-type': 'multipart/form-data'
				},
			})
			.then((res) => {
				dispatch({
					type: UPDATE_PROFILE,
					payload: res.data,
				});
			})
			.catch((err) => console.log(err, "from update profile action"));
	};
}

export function addWork(token, data) {
	return function (dispatch) {
		axios
			.post(`${process.env.REACT_APP_WEBSITE_NAME}/api/addwork/`, data, {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then((res) => {
				dispatch({
					type: ADD_WORK,
					payload: res.data,
				});
			})
			.catch((err) => console.log(err));
	};
}

export function addEducation(token, data) {
	return function (dispatch) {
		axios
			.post(`${process.env.REACT_APP_WEBSITE_NAME}/api/addeducation/`, data, {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then((res) => {
				dispatch({
					type: ADD_EDUCATION,
					payload: res.data,
				});
			})
			.catch((err) => console.log(err));
	};
}
