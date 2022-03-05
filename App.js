import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,ImageBackground} from 'react-native';
import TinderCard from './src/component/TinderCards/TinderCard';
import users from "./assets/data/users"

export default function App() {
  
  return (
    <View  style={styles.pageContainer}>
     <TinderCard user={users[0]}/>
    </View>
  );
}

const styles = StyleSheet.create({ 
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
 
})


  