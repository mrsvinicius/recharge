import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

function ContactList({ contacts }){
	const phoneMask = (n) => {
        return n.toString().replace('+55', '').replace(/[^\d]+/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
	}

	console.log(contacts);
	return (
		<FlatList
			style={styles.contactList}
			data={contacts}
			keyExtractor={item => item.id}
			renderItem={({ item }) => (
				<View
					style={styles.listItem}
					id={item.id}
				>
					<Text style={styles.listLetter}>
						{item.name.charAt(0)}
					</Text>

					<View style={styles.listInfo}>
						<Text style={styles.listName}>
							{item.name}
						</Text>

						<FlatList
							data={item.phoneNumbers}
							keyExtractor={phone => phone.id}
							renderItem={({ item }) => (
								<View>
									<Text style={styles.phones}>{phoneMask(item.number)}</Text>
								</View>
							)}
						/>
					</View>
				</View>
			)}
		/>
	)
}

const styles = StyleSheet.create({
    contactList: {
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

export default ContactList;