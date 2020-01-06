import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, Platform, PermissionsAndroid, } from 'react-native';
import Contacts from 'react-native-contacts';

export default function RechargeContact({ navigation }) {
	const [contacts] = useState('');

	const list = [
		{
			name: 'Amy Farha',
			avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
			subtitle: 'Vice President'
		},
		{
			name: 'Chris Jackson',
			avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
			subtitle: 'Vice Chairman'
		}
	];

	componentDidMount = () => {
        if (Platform.OS === 'android') {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    title: 'Contacts',
                    message: ' This app would like to see your contacts'
                }
            ).then(() => {
                this.getList();
            })
        } else if(Platform.OS === 'ios') {
            this.getList();
        }
    }

    getList = () => {
        Contacts.getAll((err, contacts) => {
            if (err === 'denied') {
                console.log("cannot access");
            } else {
                this.setState({ contacts });
                console.log(contacts);
            }
        })
    }

    renderItem = ({item}) => (
        <View style={styles.itemContainer}>
            <Text style={styles.contactName}>
                Name: {`${item.givenName} `} {item.familyName}
            </Text>
            {item.phoneNumbers.map(phone => (
                <Text style={styles.phones}>{phone.label} : {phone.number}</Text>
            ))}
        </View>
    )

	return (
		<View style={styles.container}>
			<FlatList
				data={this.state.contacts}
				renderItem={this.renderItem}
				numColumns={1}
				keyExtractor={(item, index) => index}
			/>
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

	itemContainer: {
        margin: 10
    },
    contactName: {
        fontSize:16,
        color: 'blue'
    }


});
