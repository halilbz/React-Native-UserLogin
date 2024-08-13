import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import React,{useState} from 'react'
import { CustomButton,CustomTextInput,SignButtons } from '../components'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignUpPage = ({navigation}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.img}>

        <Image
            style={styles.logo}
            source={require('../../assets/img/logo.png')}
          />
      </View>
      <View style={styles.inContainer}>
        <Text style={styles.logintext}>Please create your account</Text>
        
        <CustomTextInput 
          title="user"
          isSecureText={false}
          handleOnChangeText={setEmail}
          handleValue={email}
          handlePlaceholder='Email'
        
        />

        <CustomTextInput 
          title="lock"
          isSecureText={true}
          handleOnChangeText={setPassword}
          handleValue={password}
          handlePlaceholder='Password'
          
        />
        <CustomTextInput
          title="lock"
          isSecureText={true}
          handleOnChangeText={setRePassword}
          handleValue={rePassword}
          handlePlaceholder='Confirm Password'
        />
      
        
        <CustomButton
          title="Sign up"
          handleOnPress={()=> setIsLoading(true)}
          color1="gray"
          color2="#C1090C"
          setWidth="80%"
        />

      </View>
      <View style={styles.loginOptions}>
        <Text style={styles.titleSign}>Or sign up with</Text>
        <View style={styles.signContainer}>
          <SignButtons
            icon="google"
            color="#DB4437"
          />
          <SignButtons
            icon="facebook"
            color="#3b5998"
          />
          <SignButtons
            icon="twitter"
            color="#00acee"
          />
          </View>
          <View style={styles.signTitleContainer}>
          <Text style={styles.titleSign}>Already have a account
            

          </Text>
          <Pressable 
            onPress={()=>navigation.navigate('Login')}
          style={styles.signButton}>
              <Text style={styles.signTitle}> Sign in</Text>
            </Pressable>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUpPage

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ededed',
    
  },
  logintext:{
    marginBottom:40,
    fontSize:18,
    fontWeight:'500',
    
  },
  inContainer:
  {
    width:'80%',
    flex:2,
    
    
  },
  img:{
    width:'80%',
    flex:1,
    marginTop:40,
    
  },
  
  logo:{
    width:'100%',
    height:50,
    marginTop:50,
    resizeMode:'contain',
    
  },
  loginOptions:{
    flex:1,
    alignItems:'center',
    gap:25,
    
  },
  titleSign:{
    fontSize:17,

  },
  signContainer:{
    
    flexDirection:'row',
    gap:25
  },
  signTitle:{
    color:'#C1090C',
    fontSize:17,
    fontWeight:'600'
  },
  signTitleContainer:{
    flexDirection:'row',
  }
})
