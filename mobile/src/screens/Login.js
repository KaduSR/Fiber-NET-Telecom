import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { login } from '../services/auth';
import { Cliente } from './../../../web/src/types/api';

const LoginsScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await login(email, password);
            navigation.navigate('Dashboard');
        } catch (err) {
            setError('Credenciais inválidas');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fiber.NET Telecom</Text>
            <Text style={styles.subtitle}>Área do Cliente</Text>

            <TextInput
                styles={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail} />
            
            <TextInput
                styles={styles.input}
                placeholder='Senha'
                onChangeText={setPassword}
                secureTextEntry
            />

            {error ? <Text styles={styles.error}>{error}</Text> : null}

            <TouchableOpacity styles={styles.button} onPress={handleLogin}>
                <Text styles={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30,
        color: '#666',
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginBotton: 15,
        paddingHorizontal: 15,
    },
    button: {
        backgroundColor: '#0066cc',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    error: {
        color: 'red',
        marginBottom: 15,
    },
});

export default LoginsScreen;

