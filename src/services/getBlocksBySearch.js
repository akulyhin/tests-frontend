import axios from "axios";

// const BASE_URL = 'http://localhost:3031/api';
const BASE_URL = 'http://78.47.64.43/api';

const getBlocksBySearch = (page, search, searchQuery) => {
    return axios.get(`${BASE_URL}/transactions?page=${page}&search=${search}&searchQuery=${searchQuery}`)
     .then(data => data.data.data);
 }
 
 export default getBlocksBySearch;