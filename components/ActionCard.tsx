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
        
        <Image source={{
          uri : 'https://kyawzayya.vercel.app/'
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
  headingText: {},
  card: {},
  elevatedCard: {},
  headingContainer: {},
  headerText: {},
  cardImage: {},
  bodyContainer: {},
  footerContainer: {},
  socialLink : {}
})
export default ActionCard