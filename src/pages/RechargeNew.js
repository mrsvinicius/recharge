import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import ilustration from '../assets/images/recharge-new-ilustration.png';

export default function RechargeNew({ navigation }) {
	const [rechargeNumber, setRechargeNumber] = useState('');

    const handleSubmit = async () => {
		navigation.navigate('RechargeContact');
	}

	const handleSignUp = async () => {
		navigation.navigate('Recharge');
	}

	return (
		<KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
			<View style={styles.content}>
				<Image source={ilustration} />

				<View style={styles.form}>
					<Text style={styles.label}>Insira o número abaixo</Text>

					<TextInput
						style={styles.input}
						placeholder="(00) 000000-0000"
						placeholderTextColor="#999"
						autoCapitalize="none"
						value={rechargeNumber}
						onChangeText={setRechargeNumber}
					/>

					<TouchableOpacity style={styles.button} onPress={handleSubmit}>
						<Text style={styles.buttonText}>Continuar</Text>
					</TouchableOpacity>
				</View>
			</View>

			<Text style={styles.signUp}>Ou <Text style={styles.signUpLink} onPress={handleSignUp}>repita</Text> uma recarga anterior</Text>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor: '#fff'
	},

	content: {
		justifyContent: "center",
		alignItems: 'center',
	},

	form: {
		alignSelf: 'stretch',
		paddingHorizontal: 40,
		marginTop: 65
	},

	label: {
		fontSize: 18,
		color: '#444',
		fontWeight: 'bold',
		alignSelf: 'center',
		marginBottom: 30

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
		textAlign: 'center',
		letterSpacing: 2
	},

	button: {
		height: 42,
		backgroundColor: '#38D39F',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 21,
		marginBottom: 40,
		marginTop: 20
	},

	buttonText: {
		color: '#FFF',
		fontWeight: 'bold',
		fontSize: 16
	},

	signUp: {
		color: '#B2B2B2',
		fontSize: 13,
		alignSelf: 'center',
		position: 'absolute',
		bottom: 25
	},

	signUpLink: {
		color: '#38D39F',
	}
});
