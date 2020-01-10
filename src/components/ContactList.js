import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

class ContactList extends Component {
	state = {
		setContacts: null,
	}

	phoneMask(n){
        return n.toString().replace('+55', '').replace(/[^\d]+/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
	}

    compareContact(arr){
        let hasNumber = [];
        let res = [];

        arr.map((item) => {
            let num = item.number.toString().replace('+55', '').replace(/[^\d]+/g, '');

            if(hasNumber.indexOf(num) == -1){
                hasNumber.push(num);
                res.push(item);
            }
        });

        return res;
    }

    async cleanContact(arr){
		var i= 0;
		return arr.map((contact) => {
			if(i == 10) { return }

			console.log(contact.phoneNumbers);
			console.log(" -- ");

			const phones = contact.phoneNumbers.filter(d => d.number.length > 8);

            const phoneNumbers = phones.map((number) => {
                let item = new Object();
                    item.id = number.id;
                    item.number = number.number;
                return item;
            });

            const numbers = compareContact(phoneNumbers);

            let res = new Object();
                res.name = contact.name;
                res.phoneNumbers = numbers;

				i++;
            return res;
		});
	}

	componentDidMount() {
		this.cleanContact(this.state.contacts)
		.then((response) => response)
		.then((res) => {
			console.log(res);
			this.setState({ contacts: res });
		})
		.catch((error) =>{
			console.error(error);
		});
	}

	render() {
		const { contacts } = this.props;

		return (
			<FlatList
				style={styles.contactList}
				data={this.state.contacts}
				keyExtractor={item => item.id}
				renderItem={({ item, index}) => (
					<View style={styles.listItem} key={ item.id+index.toString()} >
						<Text style={styles.listLetter}>
							{item.name.charAt(0)}
						</Text>

						<View style={styles.listInfo}>
							<Text style={styles.listName}>
								{item.name}
							</Text>

							<FlatList
								listKey={ index.toString() }
								data={item.phoneNumbers}
								keyExtractor={(phone, index) => index }
								renderItem={({ item }) => (
									<Text key={item.id} style={styles.phones}>{ item.number }</Text>
								)}
							/>
						</View>
					</View>
				)}
			/>
		)
	}
}

const styles = StyleSheet.create({
    contactList: {
        flex: 1
    },

    contactList: {
        overflow: 'scroll',
        flex: 1,
        marginTop: 45
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
        color: '#656565',
        fontWeight: 'bold',
        marginTop: 5
    },

    listPhones: {
        color: '#BCC2C4',
        marginTop: 10
    },

    phones: {
        marginTop: 10
    },
});

export default ContactList;