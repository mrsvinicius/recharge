import React, { useState } from 'react';
import { KeyboardAvoidingView, Image, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

//import api from '../services/api';

import ilustration from '../assets/images/login-ilustration.png';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /*
    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user) {
                navigation.navigate('Main');
            }
        })
    }, []);
    */

    async function handleSubmit() {
        /*
        const response = await api.post('/sessions', {
            email
        })

        const { _id } = response.data;

        await AsyncStorage.setItem('user', _id);
        */

        //await AsyncStorage.setItem('user', email);
        navigation.navigate('Signup');
        console.log('Entrar clicado');
    }

    async function handleSignUp() {
        navigation.navigate('Signup');
    }

    const handleForgotPassword = async () => {
        navigation.navigate('ForgotPassword');
    }

    return (
        <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.ilustration} source={ilustration} />

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Seu e-mail"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Sua senha"
                        placeholderTextColor="#999"
                        autoCorrect={false}
                        value={password}
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                        onChangeText={setPassword}
                    />

                    <Text style={styles.forgot} onPress={handleForgotPassword}>Forgot password?</Text>

                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.signUp}>Não possui uma conta? <Text style={styles.signUpLink} onPress={handleSignUp}>Sign-Up</Text></Text>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#FFF'
    },

    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },

    ilustration: {
        marginTop: 20,
        height: 200,
        resizeMode: "contain",
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 40,
        marginTop: 65
    },

    input: {
        borderWidth: 1,
        borderColor: '#EBEBEB',
        fontSize: 16,
        color: '#B2B2B2',
        height: 48,
        marginBottom: 20,
        borderRadius: 4,
        paddingHorizontal: 15,
    },

    forgot: {
        color: '#38D39F',
        fontSize: 12,
        alignSelf: 'flex-end',
        marginBottom: 50
    },

    button: {
        height: 42,
        backgroundColor: '#38D39F',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 21,
        marginBottom: 40
    },

    buttonText: {
        color: '#332A2D',
        fontWeight: 'bold',
        fontSize: 16
    },

    signUp: {
        color: '#B2B2B2',
        fontSize: 12,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 25
    },

    signUpLink: {
        color: '#38D39F',
    },
});
