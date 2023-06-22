import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { styles } from './login';

const LoginPage: React.FC = () => {
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

const handleLogin = () => {
    console.log('Username:', email);
    console.log('Password:', senha);
};

return (
    <View style={styles.container}>
    <Image source={require('../../assets/images/adidas-logo.png')} style={styles.logo} />

    <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
    />

    <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
    />

    <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text style={styles.textButton}> Entrar </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.forget} activeOpacity={0.5}>
        <Text style={styles.textForget}> Esqueceu sua senha? </Text>
    </TouchableOpacity>

    

    </View>
);
};

export default LoginPage;