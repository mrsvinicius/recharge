import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

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
		navigation.navigate('SignUp');
		console.log('Entrar clicado');
	}

	return (
		<KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
			<Image source={ilustration} />

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

				<Text style={styles.forgot}>
					Esqueci minha senha
                </Text>

				<TouchableOpacity style={styles.button} onPress={handleSubmit}>
					<Text style={styles.buttonText}>Entrar</Text>
				</TouchableOpacity>

				<Text style={styles.signUp}>Don't have an account? <Text style={styles.signUpLink} onPress={() => console.log('1st')}>Registre-se</Text></Text>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFF'
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
		borderRadius: 4
	},

	forgot: {
		color: '#38D39F',
		fontSize: 12,
		justifyContent: 'flex-end',
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
		justifyContent: 'center'
	},

	signUpLink: {
		color: '#38D39F',
	},
});
