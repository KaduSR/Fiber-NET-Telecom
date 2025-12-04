const API_URL = 'http://<YOUR_IP_ADDRESS>:3001/api';

export const login = async (email, password) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error('Credenciais inválidas');
    }

    const data = await response.json();
    return data;
};
