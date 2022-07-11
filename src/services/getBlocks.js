import axios from "axios";

// const BASE_URL = 'http://localhost:3031/api';
const BASE_URL = 'http://78.47.64.43/api';

const getBlocks = (page) => {
    return axios.get(`${BASE_URL}/transactions?page=${page}`)
     .then(data => data.data.data);
 }
 
 export default getBlocks;