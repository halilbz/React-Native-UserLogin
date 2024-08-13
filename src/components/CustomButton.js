import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({title,handleOnPress,color1,color2,setWidth}) => {
  return (
    <Pressable
        onPress={()=> handleOnPress()}
        style={({pressed}) => [{
            backgroundColor: pressed ? color1 : color2,
            width:{setWidth},},
            styles.button]}>

        <Text style={styles.buttonText} >{title}</Text>  
    


    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        height:50,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:15,
        
    },
    buttonText:{
        color:'white',
        fontSize:'17',
        fontWeight:'700'
    }
})