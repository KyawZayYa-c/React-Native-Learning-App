import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const EvaluatedCard = () => {
  return (
      <View>
          <Text style={styles.headingText}>Evaluated Card</Text>
          <ScrollView horizontal={true} style={styles.container}>
              <View style ={[styles.card , styles.EvaluatedCard]} >
                  <Text style={styles.cardText} >Tap</Text>
              </View>

               <View style ={[styles.card , styles.EvaluatedCard]} >
                  <Text style={styles.cardText} >Me</Text>
              </View>

               <View style ={[styles.card , styles.EvaluatedCard]} >
                  <Text style={styles.cardText} >To</Text>
              </View>

               <View style ={[styles.card , styles.EvaluatedCard]} >
                  <Text style={styles.cardText} >Scroll</Text>
              </View>

               <View style ={[styles.card , styles.EvaluatedCard]} >
                  <Text style={styles.cardText} >More...</Text>
              </View>

               <View style ={[styles.card , styles.EvaluatedCard]} >
                  <Text style={styles.cardText} >search</Text>
              </View>
              
          </ScrollView>
     </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        padding : 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
    }, 
    EvaluatedCard: {
        backgroundColor: '#f10f9ab8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        margin: 7,
        shadowColor: "#0a090a",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    cardText: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default EvaluatedCard