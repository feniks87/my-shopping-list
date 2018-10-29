import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-shopping-list-a5bb8.firebaseio.com/'
});

export default instance;