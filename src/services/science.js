import api from '../api/api';

const getTopStories = () => {
    return api.get('science.json');
};

export default {
    getTopStories,
};
