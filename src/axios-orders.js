import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-837f3.firebaseio.com/'
});

export default instance;