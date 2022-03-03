import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,ImageBackground} from 'react-native';

export default function App() {
  return (
    <View  style={styles.pageContainer}>
      <View  style={styles.card}>
        <ImageBackground source={{uri:'https://cdn.sanity.io/images/ru024jea/production/27f9cc7e9c94facd1dad66d6b78a78f5e016d362-195x259.jpg'}} style={styles.mainImg}>
          <View style={styles.cardInner} >
            <Text style={styles.name}>Big Mac</Text>
            <Text style={styles.bio}>I will be the semicolons to your code</Text>
          </View>
         
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  mainImg: {
    width:"100%",
    height:"100%",
    borderRadius:10 ,
    overflow:"hidden",
    
    justifyContent:'flex-end'
  },
  card:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"snow",
    height:"70%",
    width:"95%",
    borderRadius:10 ,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  cardInner:{
    padding:10,
  },
  name:{
    fontSize:30,
    fontWeight:"600",
    color:"white"


  },
  bio:{
    fontSize:18,
    color:"white",
    lineHeight:25,
    marginTop:10,
  }

})


  