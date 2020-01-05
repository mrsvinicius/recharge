import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Welcome({ navigation }) {
	return (
		<View style={styles.container}>		
			<Text>Main</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
	}
});