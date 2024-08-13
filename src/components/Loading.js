import { StyleSheet, Text, View,ActivityIndicator, Pressable } from 'react-native'
import React from 'react'

const Loading = ({changeIsLoading}) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={()=>changeIsLoading()}
        style={[{},styles.closeButtonContainer]}
      >
        <Text style={styles.closeButton}>X</Text>
      </Pressable>
      <ActivityIndicator size="large" color="#C1090C" />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({

    container:{
        width:'100%',
        height:'100%',
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'lightgray',

    },
    closeButtonContainer:{
        backgroundColor:'#C1090C',
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        position:'absolute',
        top:15,
        right:30
    },
    closeButton:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    }

})