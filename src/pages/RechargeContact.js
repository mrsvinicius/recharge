import React, { useState, useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, FlatList, StyleSheet } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function RechargeContact({ navigation }) {
    const phoneMask = (n) => {
        return n;
        return n.toString().replace('+55', '').replace(/[^\d]+/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');            
    }

    const [contacts, setContacts] = useState([
        {
           "contactType":"person",
           "firstName":"Amanda",
           "id":"152",
           "imageAvailable":false,
           "lastName":"Praia",
           "lookupKey":"3021i109368958b5ef6f6.3789r220-2A422A44302A484C2A3A2A",
           "middleName":"-",
           "name":"Amanda - Praia",
           "phoneNumbers":[
              {
                 "id":"817",
                 "isPrimary":0,
                 "label":"mobile",
                 "number":"+55 11 94289-5107",
                 "type":"2"
              },
              {
                 "id":"1197",
                 "isPrimary":0,
                 "label":"mobile",
                 "number":"+5511942895107",
                 "type":"2"
              }
           ]
        },
        {
           "contactType":"person",
           "firstName":"Amanda",
           "id":"460",
           "imageAvailable":false,
           "lastName":"Kiki",
           "lookupKey":"3021i19786b408a49d8f5.3789r449-2A422A44302A3E3A3E3A",
           "name":"Amanda Kiki",
           "phoneNumbers":[
              {
                 "id":"2174",
                 "isPrimary":0,
                 "label":"mobile",
                 "number":"1195107-9068",
                 "type":"2"
              },
              {
                 "id":"2180",
                 "isPrimary":0,
                 "label":"mobile",
                 "number":"11951079068",
                 "type":"2"
              }
           ]
        },
        {
           "contactType":"person",
           "firstName":"Anderson",
           "id":"59",
           "imageAvailable":false,
           "lookupKey":"3021i26a6c66c0de6c2d3.3789r289-2A4430324C4E4644",
           "name":"Anderson",
           "phoneNumbers":[
              {
                 "id":"1542",
                 "isPrimary":0,
                 "label":"mobile",
                 "number":"+5511977958857",
                 "type":"2"
              },
              {
                 "id":"314",
                 "isPrimary":0,
                 "label":"work",
                 "number":"4",
                 "type":"3"
              },
              {
                 "id":"312",
                 "isPrimary":0,
                 "label":"mobile",
                 "number":"986728460",
                 "type":"2"
              },
              {
                 "id":"313",
                 "isPrimary":0,
                 "label":"mobile",
                 "number":"‪+55 11 97795-8857‬",
                 "type":"2"
              }
           ]
        },
        {
           "contactType":"person",
           "firstName":"Ariana",
           "id":"171",
           "imageAvailable":false,
           "lookupKey":"3021i6c8489a18c088714.3789r221-2A4C3A2A442A",
           "name":"Ariana",
           "phoneNumbers":[
              {
                 "id":"933",
                 "isPrimary":0,
                 "label":"mobile",
                 "number":"+5511988464482",
                 "type":"2"
              },
              {
                 "id":"1202",
                 "isPrimary":0,
                 "label":"mobile",
                 "number":"+5511988464482",
                 "type":"2"
              }
           ]
        },
        {
           "contactType":"person",
           "firstName":"Arnoldo",
           "id":"169",
           "imageAvailable":false,
           "lookupKey":"3021i1179dc78b969158.3789r202-2A4C4446403046",
           "name":"Arnoldo",
           "phoneNumbers":[
              {
                 "id":"915",
                 "isPrimary":0,
                 "label":"mobile",
                 "number":"11 94945-3659",
                 "type":"2"
              },
              {
                 "id":"1107",
                 "isPrimary":0,
                 "label":"mobile",
                 "number":"11949453659",
                 "type":"2"
              }
           ]
        }
     ]);

    const compareContact = (arr) => {
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

    const cleanContact = async (arr) => {
        return arr.map((contact) => {
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

            return res;				
        });
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
                    //setContacts(data);

                    cleanContact(data)
                    .then((response) => response)
                    .then((res) => {
                        console.log(res);
                        
                        setContacts(res);
                    })
                    .catch((error) =>{
                        console.error(error);
                    });

                    console.log('chamou');
                }
            }
        })();

        /*
        cleanContact(contacts)
        .then((response) => response)
        .then((res) => {
            //console.log(res);
            
            setContacts(res);
        })
        .catch((error) =>{
            console.error(error);
        });
        */

    }, []);

    const handleBack = async () => {
        navigation.navigate('RechargeNew');
    }
    
    if(contacts.length > 0){
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.back} onPress={handleBack}>
                    <Text style={styles.skipText}>Voltar</Text>
                </TouchableOpacity>
                
                <FlatList
                    style={styles.contactList}
                    data={contacts}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index}) => (
                        <View style={styles.listItem} key={item.id.toString()} >
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
                                        <Text key={item.id} style={styles.phones}>{ phoneMask(item.number) }</Text>
                                    )}
                                />
                            </View>
                        </View>
                    )}
                />
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
