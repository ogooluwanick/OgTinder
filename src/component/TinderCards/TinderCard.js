import React from "react";
import { StyleSheet, Text, View ,Image,ImageBackground} from 'react-native';



const TinderCard = (props) => {
    const {name,image,bio}=props.user
  return (
    
      <View  style={styles.card}>
        <ImageBackground source={{uri:image}} style={styles.mainImg}>
          <View style={styles.cardInner} >
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.bio}>{bio}</Text>
          </View>
         
        </ImageBackground>
      </View>
   
  
  )
}

const styles = StyleSheet.create({ 
    
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
  
  

export default TinderCard