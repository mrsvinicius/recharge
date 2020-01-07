import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import * as Contacts from 'expo-contacts';

import ContactList from '../components/ContactList';

export default function RechargeContact() {
    const [contacts, setContacts] = useState([]);

	const reLoad = async () => {
        if (contacts.length > 0) {
			return (
				<SafeAreaView>
					<ContactList contacts={contacts} />
				</SafeAreaView>
			);
		} else {
			return (
				<View style={styles.container}>
					<Text style={styles.listLetter}>
						Por favor liberar acesso aos contatos
					</Text>
				</View>
			);
		}
	}

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
					setContacts(data);

					reLoad();
                }
            }
        })();
    }, []);

	reLoad();
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#FFF',
        paddingTop: 30
    },

    contactList: {
        height: '50%',
        overflow: 'scroll',
        flex: 1
    },

    listItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: '#e4e6e5',
        flexDirection: 'row'
    },

    listLetter: {
        alignItems: 'center',
        textAlignVertical: 'center',
        textAlign: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#555',
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 50,
        marginRight: 20
    },

    listInfo: {
        alignItems: 'baseline',
        justifyContent: 'center'
    },

    listName: {
        fontSize: 16,
        color: '#394c53',
        fontWeight: 'bold',
        marginTop: 5
    },

    listPhones: {
        color: '#72858c',
        marginTop: 10

    }
});
