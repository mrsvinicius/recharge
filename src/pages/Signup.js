import React, { useState } from 'react';
import { SafeAreaView, View, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import ilustration from '../assets/images/signup-ilustration.png';

export default function SingUp({ navigation }) {
	const [email, name, phone, password] = '';

    const handleSubmit = async () => {
		navigation.navigate('Main');
	}

    const handleSignIn = async () => {
		navigation.navigate('Login');
	}

	return (
		<KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
			<SafeAreaView style={styles.content}>
				<Image style={styles.ilustration} source={ilustration} />

				<View style={styles.form}>
					<TextInput
						style={styles.input}
						placeholder="Name"
						placeholderTextColor="#999"
						autoCapitalize="words"
						autoCorrect={false}
						value={name}
					/>

					<TextInput
						style={styles.input}
						placeholder="Phone number"
						placeholderTextColor="#999"
						autoCapitalize="words"
						autoCorrect={false}
						value={phone}
					/>

					<TextInput
						style={styles.input}
						placeholder="E-mail"
						placeholderTextColor="#999"
						keyboardType="email-address"
						autoCapitalize="none"
						autoCorrect={false}
						value={email}
					/>

					<TextInput
						style={styles.input}
						placeholder="Password"
						placeholderTextColor="#999"
						autoCorrect={false}
						value={password}
						underlineColorAndroid="transparent"
						secureTextEntry={true}
					/>

					<TouchableOpacity style={styles.button} onPress={handleSubmit}>
						<Text style={styles.buttonText}>Cadastrar</Text>
					</TouchableOpacity>
				</View>

				<Text style={styles.signIn}>Já possui uma conta? <Text style={styles.signInLink} onPress={handleSignIn}>Entre</Text></Text>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor: '#FFFFFF'
	},

	content: {
		flex: 1,
		justifyContent: "center",
		alignItems: 'center'
	},

	ilustration: {
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

	button: {
		height: 42,
		backgroundColor: '#38D39F',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 21,
		marginTop: 20,
		marginBottom: 40
	},

	buttonText: {
		color: '#332A2D',
		fontWeight: 'bold',
		fontSize: 16
	},

	signIn: {
		color: '#B2B2B2',
		fontSize: 12,
		alignSelf: 'center',
		position: 'absolute',
		bottom: 25
	},

	signInLink: {
		color: '#38D39F',
	},
});
