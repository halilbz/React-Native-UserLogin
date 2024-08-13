import { StyleSheet, Text, View, TextInput,Pressable } from 'react-native'
import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomTextInput = ({title,isSecureText,handleOnChangeText,handleValue,handlePlaceholder}) => {
  
  const [pass, setPass] = useState(isSecureText)

  const changePass = () => {
    setPass(!pass);
  }
  
  


  return (

    <View style={styles.inputContainer}>
      
      <Icon name={title} size={25} color="#000" style={styles.icon}/>

      <TextInput
        style={styles.textInput}
        secureTextEntry={pass}
        onChangeText={handleOnChangeText}
        value={handleValue}
        placeholder={handlePlaceholder}

      />
       <Pressable 
        onPress={changePass}
        style={styles.eye}>
        
        { isSecureText ? <Icon name={ pass ? "eye-slash" : "eye"} size={25} color="lightgray"/> : null }

      </Pressable>
      

    </View>
   
    
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
  
  inputContainer:{
    marginBottom:13,
    flexDirection:'row',
    alignItems:'center',
    borderWidth:0.1,
    borderColor:'black',
    borderRadius:10,
    paddingHorizontal:10,
    backgroundColor:'white',
    shadowColor:'black',
    shadowOpacity:0.2,
    shadowOffset:{
      width:0,
      height:2
    },
    shadowRadius:5,
  },
  textInput:{
        
    width:'80%',
    height:50,
    marginLeft:10,
    
    borderRadius:10,

  },
  icon:{
    color:'#C1090C'
  },
  



})