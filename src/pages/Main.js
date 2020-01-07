import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Welcome({ navigation }) {
	async function handleRecharge() {
		navigation.navigate('Recharge');
	}

	async function handleLogout() {
		navigation.navigate('Login');
	}

	return (
		<View style={styles.container}>
			<Text style={styles.dashboard} onPress={handleRecharge}>Dashboard</Text>

            <View style={styles.form}>
				<TouchableOpacity style={styles.recharge} onPress={handleRecharge}>
					<Text style={styles.rechargeText}>Próxima Tela</Text>
				</TouchableOpacity>
		
				<TouchableOpacity style={styles.logout} onPress={handleLogout}>
					<Text style={styles.logoutText}>Sair</Text>
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

	dashboard: {
		paddingVertical: 100,
        paddingHorizontal: 100,
        fontSize: 20,
        color: '#444',
        alignSelf: 'center',
        marginBottom: 30
	},

	form: {
		alignSelf: 'stretch',
		paddingHorizontal: 40,
		marginTop: 65
	},

    recharge: {
		height: 42,
		backgroundColor: '#38D39F',
		justifyContent: 'center',
		alignItems: 'center',
        borderRadius: 21,
        marginBottom: 30
	},

	rechargeText: {
		color: '#FFF',
		fontWeight: 'bold',
		fontSize: 16
    },
    
	logout: {
		height: 42,
		backgroundColor: '#38D39F',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 21
	},

	logoutText: {
		color: '#FFF',
		fontWeight: 'bold',
		fontSize: 16
	}
});
