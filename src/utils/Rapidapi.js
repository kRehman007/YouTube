const API_KEY=import.meta.env.VITE_YOUTUBE_API_KEY
const BASE_URL = 'https://youtube138.p.rapidapi.com';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

export const fetchData=async(url)=>{
try {
	const response = await fetch(`${BASE_URL}/${url}`,options);
	
	const result = await response.json();
	return result
} catch (error) {
	console.log(error);
    
}
}