import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const ContactList = () => {
    const contacts = [
        {
            uid: 1,
            name: 'Aung Aung',
            status: 'Building mobile apps with React Native',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEFQwndO2eeYPDaDDqeh00ml3AdunoKIvV0KB7sNLgOaxqdSk5LQlTdc&s',
        },
        {
            uid: 2,
            name: 'Hnin Wutt Yi',
            status: 'Exploring full-stack web development',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfwqt2hnXvws-e-nTsN43iXEy_dbPw7b5tk0xrAJGReVHKaIa3TLwgP3A&s',
        },
        {
            uid: 3,
            name: 'Sanket Singh',
            status: 'Making your GPay smooth',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEFQwndO2eeYPDaDDqeh00ml3AdunoKIvV0KB7sNLgOaxqdSk5LQlTdc&s',
        },
        {
            uid: 4,
            name: 'Kyaw Zayya',
            status: 'Computer Science student & developer',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyHHockTzDPrPoXixdySdOvaMhhrHcyyGqJeKSeedY0UTO8KEc9VMZ9Y&s',
        },
        {
            uid: 5,
            name: 'Su Mon',
            status: 'UI/UX Designer and Learner',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSea19tj69dxtzCnNnaZd3xeL_d8TF-ih0scego1r62UVxBXpBrXh848tg&s',
        },
];
  return (
      <View>
          <Text style={Styles.headingText} >ContactList</Text>
          <ScrollView
              style={Styles.container}
              scrollEnabled={false}
          >
              {contacts.map(({uid, name, status, imageUrl}) => (
                  <View key={uid} style={Styles.userCard} >
                      <Image
                          source={{
                            uri : imageUrl
                          }}
                          style = {Styles.userImage}
                      />
                      <View>
                        <Text style={Styles.userName} >{name}</Text>
                        <Text style={Styles.userStatus} >{status}</Text>
                      </View>
                  </View>
              ))}
          </ScrollView>
     </View>
  )
}

const Styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal : 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom : 4,
    },
    userCard: { 
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#fd18e2',
        padding: 8,
        borderRadius : 14
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight : 14,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
    },
    userStatus: {
        
    },
})

export default ContactList