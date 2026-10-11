import { Image, StyleSheet, Text, View } from 'react-native'

const FancyCard = () => {
  return (
      <View>
          <Text style={Styles.headingText} >Fancy Card</Text>
          <View style={[Styles.card, Styles.evaluated]} >
              <Image
                  source={{uri : 'https://lh3.googleusercontent.com/grass-cs/AABkmLfQ_7rRjHcvNKBsozTdGVY7FqKFDw_f4U9thuyaG82AgrWHRFDjNj-khheR1dgpm-pBSVatVgr3xA5DZVyFKXL6h15O9pzLsN--gXUh5wsMo-2V1RK8x7mFeo3933ug-bOICqM=w289-h312-n-k-no'}}
                  style={Styles.cardImage}
              />
              <View style={Styles.cardBody} >
                  <Text style={Styles.cardTitle} >Meiktila</Text>
                  <Text style={Styles.cardLabel} >City</Text>
                  <Text style={Styles.cardDescrption} >Meiktila township is so beautifile and peaceful.</Text>
                  <Text style={Styles.cardFooter} >20 min way</Text>
              </View>

          </View>
     </View>
  )
}

const Styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    card: {
        color: "#ffafnd",
        fontSize: 16,
        flex: 1,
        padding: 8,
    },
    evaluated: {

    },
    cardImage: { 
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    cardBody: {},
    cardTitle: {},    
    cardLabel: {},
    cardDescrption: {},
    cardFooter: {},
})

export default FancyCard;


//finish 13