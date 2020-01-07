import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

import ilustration from '../assets/images/recharge-ilustration.png';

export default function Recharge({ navigation }) {
    const handleNewRecharge = async () => {
		navigation.navigate('RechargeNew');
	}

	return (
		<View style={styles.container}>
			<Image style={styles.ilustration} source={ilustration} />

			<View style={styles.form}>
                <Text style={styles.recharge}>Recargas</Text>

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
    
    recharge: {
        fontSize: 20,
        color: '#444',
        alignSelf: 'center',
        marginBottom: 30
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
