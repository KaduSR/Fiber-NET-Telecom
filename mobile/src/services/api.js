import axios from 'axios';
import Constants from 'expo-constants'; // Import Constants from expo-constants

// Determine the API base URL
const API_BASE_URL = Constants.expoConfig.extra?.API_URL || process.env.API_URL || 'http://10.0.2.2:3333/api';

// Crie uma instância do axios com a URL base da API
const api = axios.create({
    baseURL: API_BASE_URL,

api.interceptors.request.use(async(config)=> {
    // Aqui você pode adicionar lógica para obter o token do AsyncStorege
    // const token = await AsyncStorage.getItem('token');
    // if (token) {
    //  config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
});

export default api;