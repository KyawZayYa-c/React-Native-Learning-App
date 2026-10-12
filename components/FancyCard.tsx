import { Image, StyleSheet, Text, View } from 'react-native'

const FancyCard = () => {
  return (
      <View>
          <Text style={Styles.headingText} >Fancy Card</Text>
          <View style={[Styles.card, Styles.cardEvaluated]} >
              <Image
                  source={{uri : 'https://lh3.googleusercontent.com/grass-cs/AABkmLfQ_7rRjHcvNKBsozTdGVY7FqKFDw_f4U9thuyaG82AgrWHRFDjNj-khheR1dgpm-pBSVatVgr3xA5DZVyFKXL6h15O9pzLsN--gXUh5wsMo-2V1RK8x7mFeo3933ug-bOICqM=w289-h312-n-k-no'}}
                  style={Styles.cardImage}
              />
              <View style={Styles.cardBody} >
                  <Text style={Styles.cardTitle} >Meiktila</Text>
                  <Text style={Styles.cardLabel} >City</Text>
                  <Text style={Styles.cardDescrption} >Meiktila is a major city in the central Mandalay Region of Myanmar, built on the banks of the artificial Meiktila Lake. </Text>
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
        paddingHorizontal: 8,
    },
    card: {
        width: 335,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardEvaluated: {
        backgroundColor: '#ffffff',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
    },
    cardImage: { 
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },  
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },    
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6,
    },  
    cardDescrption: {
        color: '#000000',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
    },  
    cardFooter: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 12,
        marginBottom: 12,
    },  
})

export default FancyCard;