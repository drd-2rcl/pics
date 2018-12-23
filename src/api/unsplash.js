import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID e0d66c1a05602fb01d19d7233dda0a815b081af0efcf32efc0c639a0ad8a82b1'
		}
});

