import axios from 'axios';

// Crie uma instância do axios com a URL base da API
const api = axios.create({
    baseURL: 'https:10.0,2.2:3001', // Usa localhost do computador a partir do emulador Android
    // Ajuste a URL conforme necessário
});

api.interceptors.request.use(async(config)=> {
    // Aqui você pode adicionar lógica para obter o token do AsyncStorege
    // const token = await AsyncStorage.getItem('token');
    // if (token) {
    //  config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
});

export default api;