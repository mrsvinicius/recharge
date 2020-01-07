import React, { useEffect } from 'react';
import { SafeAreaView, View, AsyncStorage, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Welcome({ navigation }) {
	useEffect(() => {
		AsyncStorage.getItem('user').then(user => {
			if (user) {
				navigation.navigate('Main');
			}
		})
	}, []);

	const handleSkip = async () => {
		console.log('Skip clicked!');
		navigation.navigate('Login');
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.form}>
				<TouchableOpacity style={styles.skip} onPress={handleSkip}>
					<Text style={styles.skipText}>Pular</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
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

	skip: {
		height: 42,
		backgroundColor: '#38D39F',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 21
	},

	skipText: {
		color: '#FFF',
		fontWeight: 'bold',
		fontSize: 16
	}
});
