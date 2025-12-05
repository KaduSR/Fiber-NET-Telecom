import api from './api';

export const login = async (email, password) => {
    try {
        const response = await api.post('/api/auth/login', {email, password});
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    // Lógica para logout
    // Exemplo: await AsyncStorage.removeItem('token');
};

