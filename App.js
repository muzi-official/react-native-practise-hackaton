import { StatusBar } from 'expo-status-bar';
import  React  , {useState} from 'react';
import { StyleSheet , ActivityIndicator , ImageBackground, FlatList ,Text, View , Image , TextInput, ScrollView, TouchableOpacity} from 'react-native';
import Navigation from './src/config/Navigation';


export default function App() {
  // const [name, setName] = useState("Syed Muzammil Ashfaque");
  // const [ename, setename] = useState("syedmuzammilashfaque@gmail.com");


// const DATA = [
//   {
//     id: 'gffdfgfffddfggffgdffdfddf',
// title: 'First Item',
// },

// {
//   id: 'gffdfgfffddfggffgdffdfddf',
//   title: 'Second Item',
// },

// {
//   id: 'gffdfgfffddfggffgdffdfddf',
//   title: 'Third Item',
// },
// {
//   id: 'gffdfgfffddfggffgdffdfddf',
//   title: 'Fourth Item',
// },
// {
//   id: 'gffdfgfffddfggffgdffdfddf',
//   title: 'Fifth Item',
// },
// {
//   id: 'gffdfgfffddfggffgdffdfddf',
//   title: 'Six Item',
// },
// ];



  return ( 
    <Navigation/>
    );
  }
/* <ImageBackground style={{width: '100%' , height: '100%'}} source={{uri: "https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}>
  <Text style={{color : "#fff",fontSize: 35 , marginTop: 100 , textAlign: 'center'}}>Muzammil World</Text>

<ActivityIndicator size="large" color="white" style={{marginTop: 60}}/>

</ImageBackground> */
      /* <Text>{name}</Text>
      <Text>{ename}</Text> */
/* 
      <TextInput
      secureTextEntry={true}
      keyboardType={"default"}
      onChangeText={(text)=>console.log(text)}
      style={{height: 40 , fontSize: 20 , backgroundColor: 'black' , color: 'white' , width: 350 , paddingLeft: 10 , borderColor: 'blue', borderRadius: 20 , borderWidth: 1}} placeholder="Enter Value"/> */}

/* <TouchableOpacity onPress={()=>alert("hello muzammil")} activeOpacity={0.8} style={styles.btn}>
<Text style={styles.btntxt}>Click Me</Text>
</TouchableOpacity> */



/* {[1,2,3,4,5,6,7,8,9,10].map((v , i)=> {
return(
  <View style={styles.card}>
<Text style={styles.cardtxt}>Muzammil Ashfaque</Text>
</View>
)
})
} */
/* <FlatList
data={DATA}
renderItem={(data)=>{
  return(
    <View style={styles.card}>
    <Text style={styles.cardtxt}>{data.item.title}</Text>
    </View>
  )
}}
keyExtractor={item => item.id} 
/> */


const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,  
    backgroundColor: "white",
    fontSize: 40,
    alignItems: 'center',
  },

card: {
  padding: 30, 
  marginTop: 20,
  borderRadius: 20,
  height:200,
  backgroundColor: 'purple',
  width: 300,
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
},

cardtxt: {
  color: 'white',
  fontSize: 20,
}
});
 