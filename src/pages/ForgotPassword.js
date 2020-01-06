import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import ilustration from '../assets/images/login-ilustration.png';

export default function ForgotPassword({ navigation }) {
	const [email, setEmailReset] = useState('');

	const handleSendRestCode = async () => {
        console.log(email);
        navigation.navigate('Signup');
	}

    return (
		<KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmailReset}
                />

                <TouchableOpacity style={styles.button} onPress={handleSendRestCode}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>			
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        justifyContent: 'center',
        alignItems: 'center',    
        backgroundColor: '#FFF',
        height: 100,
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
});
