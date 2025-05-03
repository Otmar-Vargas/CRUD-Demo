import axios from 'axios';
export async function getInversionsAll() {
	let result = await axios.get(`${import.meta.env.VITE_REST_API_INVERSIONS}/priceshistory`);
	console.log('<<AXIOS-INVERSIONS>>: ', result.data);
	return result.data;
}