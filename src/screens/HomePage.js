import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { collection, addDoc,getDocs } from "firebase/firestore"; 
import CustomButton from '../components/CustomButton'
import { db } from '../../firebaseConfig';

const HomePage = () => {
  const [data, setData] = useState([])
  console.log("data: ",data)
  //Send data to firebase
  const sendData = async() =>{
    try {
      const docRef = await addDoc(collection(db, "TurkishUser"), {
        title: "Halil",
        content: "React öğreniyor",
        lesson: 18
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  // get data from firebase
  const getData = async() =>{
    const querySnapshot = await getDocs(collection(db, "TurkishUser"));
    querySnapshot.forEach((doc) => {
      /* console.log(`${doc.id} => ${doc.data()}`); */
      setData([...data, doc.data()])
});
  }


  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <CustomButton
        title={"Save"}
        setWidth={"80%"}
        color1={"gray"}
        color2={"red"}
        handleOnPress={sendData}
      />
      <CustomButton
        title={"Get Data"}
        setWidth={"80%"}
        color1={"gray"}
        color2={"red"}
        handleOnPress={getData}
      />
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      }
})