import axios from 'axios'

export const gotApi = axios.create({
    baseURL: 'https://anapioficeandfire.com/api',
    timeout: 1000,
});