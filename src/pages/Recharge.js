import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

import ilustration from '../assets/images/recharge-ilustration.png';

export default function Recharge({ navigation }) {
	async function handleNewRecharge() {
		navigation.navigate('RechargeNew');
	}

	return (
		<View style={styles.container}>
			<Image style={styles.ilustration} source={ilustration} />

			<View style={styles.form}>
				<TouchableOpacity style={styles.newRecharge} onPress={handleNewRecharge}>
					<Text style={styles.newRechargeText}>New Recharge</Text>
				</TouchableOpacity>
			</View>
		</View>
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
		paddingHorizontal: 30,
		marginTop: 30
	},

	ilustration: {
		marginTop: 20,
		height: 200,
		resizeMode: "contain",
	},

	newRecharge: {
		height: 42,
		backgroundColor: '#38D39F',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 21
	},

	newRechargeText: {
		color: '#FFF',
		fontWeight: 'bold',
		fontSize: 16
	}
});
