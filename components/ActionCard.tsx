import React from 'react'
import { Linking, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

const ActionCard = () => {
  function openWebsite (websiteLink : string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText} >ActionCard</Text>
      <View style={[styles.card , styles.elevatedCard]} >
        <View style={styles.headingContainer} >
          <Text style={styles.headerText} >
            This is my portfolio website. Please click the button below to visit my website.
          </Text>
        </View>
        
        <Image
          source={{
          uri : 'https://res.cloudinary.com/dg52gsebs/image/upload/v1784604891/myProfile_f8w39q.jpg'
        }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer} >
          <Text numberOfLines={3}>
            I’m a fourth-year Computer Science student at the University of Computer Studies, Meiktila, with a strong interest in full-stack web and mobile application development.
          </Text>
        </View>

         <View style={styles.footerContainer} >
          <TouchableOpacity
            onPress = {() => openWebsite(('https://kyawzayya.vercel.app/'))}
          >
            <Text style = {styles.socialLink} >Read More</Text>
          </TouchableOpacity>

           <TouchableOpacity
            onPress = {() => openWebsite(('https://kyawzayya.vercel.app/'))}
          >
            <Text style = {styles.socialLink} >Follow Me</Text>
          </TouchableOpacity>
        </View>
        </View>
    </View>
   
  )
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal : 8,
  },
  card: {
    width: 330,
    height: 345,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal : 16,
  },
  elevatedCard: {
    backgroundColor: '#C86514',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height : 1,
    },
    shadowColor: "#333",
    shadowOpacity : 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems : 'center',
  },
  headerText: {
    color: '#000',
    fontSize : 16,
    fontWeight : '600',
  },
  cardImage: {
    width: 330,
    height: 190,
    backgroundColor: '#BF14C8',
  },
  bodyContainer: {
    padding: 10, 
  },
  footerContainer: {
    padding: 8, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : 'space-evenly',
  },
  socialLink : {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 8,
  }
})
export default ActionCard;