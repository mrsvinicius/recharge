import React, { useState, useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, FlatList, StyleSheet } from 'react-native';
import * as Contacts from 'expo-contacts';

import ContactList from '../components/ContactList';

export default function RechargeContact({ navigation }) {
	const [contacts, setContacts] = useState([
		{
			"contactType": "person",
			"firstName": "Amanda",
			"id": "152",
			"imageAvailable": false,
			"lastName": "Praia",
			"lookupKey": "3021i109368958b5ef6f6.3789r220-2A422A44302A484C2A3A2A",
			"middleName": "-",
			"name": "Amanda - Praia",
			"phoneNumbers": [
				{
					"id": "817",
					"isPrimary": 0,
					"label": "mobile",
					"number": "+55 11 94289-5107",
					"type": "2"
				},
				{
					"id": "1197",
					"isPrimary": 0,
					"label": "mobile",
					"number": "+5511942895107",
					"type": "2"
				}
			]
		},
		{
			"contactType": "person",
			"firstName": "Anderson",
			"id": "59",
			"imageAvailable": false,
			"lookupKey": "3021i26a6c66c0de6c2d3.3789r289-2A4430324C4E4644",
			"name": "Anderson",
			"phoneNumbers": [
				{
					"id": "1542",
					"isPrimary": 0,
					"label": "mobile",
					"number": "+5511977958857",
					"type": "2"
				},
				{
					"id": "314",
					"isPrimary": 0,
					"label": "work",
					"number": "4",
					"type": "3"
				},
				{
					"id": "312",
					"isPrimary": 0,
					"label": "mobile",
					"number": "986728460",
					"type": "2"
				},
				{
					"id": "313",
					"isPrimary": 0,
					"label": "mobile",
					"number": "‪+55 11 97795-8857‬",
					"type": "2"
				}
			]
		}
	]);

	useEffect(() => {
		(async () => {
			const { status } = await Contacts.requestPermissionsAsync();
			if (status === 'granted') {
				const { data } = await Contacts.getContactsAsync({
					fields: [
						Contacts.Fields.PhoneNumbers,
					],
				});

				if (data.length > 0) {
					//setContacts(data);
				}
			}
		})();
	}, []);

	const handleBack = async () => {
		navigation.navigate('RechargeNew');
	}

	if (contacts.length > 0) {
		return (
			<SafeAreaView style={styles.container}>
				<TouchableOpacity style={styles.back} onPress={handleBack}>
					<Text style={styles.skipText}>Voltar</Text>
				</TouchableOpacity>

				<ContactList contacts={contacts} />
			</SafeAreaView>
		);
	} else {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.back} onPress={handleBack}>
					<Text style={styles.skipText}>Voltar</Text>
				</TouchableOpacity>

				<Text style={styles.listLetter}>
					Por favor liberar acesso aos contatos
                </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	back: {
		alignSelf: 'baseline',
		paddingVertical: 5,
		paddingHorizontal: 15,
		backgroundColor: '#ddd',
		borderRadius: 50,
		marginHorizontal: 15,
		marginVertical: 15,
		position: 'absolute',
		top: 20
	},

	backText: {
		fontSize: 12,
		color: '#444'
	},

	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor: '#FFF',
		paddingTop: 30,
		position: 'relative'
	}
});
