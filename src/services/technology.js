import api from '../api/api';

const getTopStories = () => {
    return api.get('technology.json');
};

export default {
    getTopStories,
};
