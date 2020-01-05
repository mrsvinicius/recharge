import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import ilustration from '../assets/images/signup-ilustration.png';

export default function SingUp({ navigation }) {
	async function handleSubmit() {
		navigation.navigate('Main');
	}

	return (
		<KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
			<Image source={ilustration} />


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

				<Text style={styles.signIn}>Do have an already account? <Text style={styles.signInLink} onPress={() => console.log('1st')}>Login</Text></Text>
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
		justifyContent: 'center'
	},

	signInLink: {
		color: '#38D39F',
	},
});
