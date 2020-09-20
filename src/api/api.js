import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.nytimes.com/svc/topstories/v2/',
    params: {
        'api-key': process.env.REACT_APP_API_KEY,
    },
});

export default api;
