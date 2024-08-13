import { StyleSheet, Text, View ,Pressable,Image,SafeAreaView} from 'react-native'
import React, {useState} from 'react'
import { CustomTextInput,CustomButton,SignButtons,Loading } from '../components'

import { useSelector,useDispatch } from 'react-redux'
import { setisLoading } from '../redux/userSlice'
import { login } from '../redux/userSlice'

const LoginPage = ({navigation}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  //userSlice içindeki verilerin okunması
  const {isLoading} = useSelector((state)=>state.user)
  

  //userSlice içerisindeki reducer yapılarını kullanma veya veri gönderme
  const dispatch = useDispatch()


  return (
    <SafeAreaView style={styles.container}>
   
      <View style={styles.img}>

      <Image
          style={styles.logo}
          source={require('../../assets/img/logo.png')}
        />
      </View>
      
      <View style={styles.inContainer}>
        <Text style={styles.logintext}>Please login to your account</Text>
        
        <CustomTextInput 
          title="user"
          isSecureText={false}
          handleOnChangeText={(text)=> setEmail(text.toLowerCase())}
          handleValue={email}
          handlePlaceholder='Email'
        
        />

        <CustomTextInput 
          title="lock"
          isSecureText={true}
          handleOnChangeText={(password)=> setPassword(password)}
          handleValue={password}
          handlePlaceholder='Password'
          
        />
      
        
        <CustomButton
          title="Sign in"
          handleOnPress={()=> dispatch(login({email,password}))}
          color1="gray"
          color2="#C1090C"
          setWidth="80%"
        />

      </View>

      <View style={styles.loginOptions}>
        <Text style={styles.titleSign}>Or sign in with</Text>
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
          <Text style={styles.titleSign}>Dont have a account
            

          </Text>
          <Pressable 
            onPress={()=>navigation.navigate('Signup')}
          style={styles.signButton}>
              <Text style={styles.signTitle}> Sign up</Text>
            </Pressable>
          </View>
      </View>
    
      {isLoading ? <Loading changeIsLoading={()=> dispatch(setisLoading(false))}/> : null}
    </SafeAreaView>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ededed',
    
  },
  logintext:{
    marginBottom:40,
    fontSize:20,
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