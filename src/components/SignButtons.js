import { StyleSheet, Text, View,Pressable} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const SignButtons = ({icon,color}) => {
  return (
   

    
     <View style={styles.container}>
      <Pressable
        style={styles.sign}
        
      >
        <Icon name={icon} size={25} color={color} style={styles.icon}/>


      </Pressable>
     </View>
    
  )
}

export default SignButtons

const styles = StyleSheet.create({
    
    container:{
        height:45,
        width:70,
        backgroundColor:'white',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        shadowColor:'black',
        shadowOpacity:0.2,
        shadowOffset:{
        width:0,
        height:2
        },
        shadowRadius:5,
        },
    icon:{
        fontSize:27,
    }
})