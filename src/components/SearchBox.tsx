import React from 'react'
import { StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { Colors } from '../constants/Colors'
import { viewportHeight } from '../utils/ScaleDimensions'


const SearchBox = () => {
  return (
      <KeyboardAvoidingView style={style.container}>
          <AntDesign name="search1" size={18} color={Colors.black} style={style.icon} />
          <TextInput  style={style.input} placeholder='Search' placeholderTextColor={Colors.black}  />
      </KeyboardAvoidingView>

  )
}
const style = StyleSheet.create({
    container:{
       height:60,
       width:340,
       borderRadius:viewportHeight/2,
       backgroundColor:Colors.lightGrey,
       justifyContent:'flex-start',
       alignItems:'center',
       borderWidth:0,
       flexDirection:'row',
       marginVertical:16,
    },
    input:{
        paddingLeft:10,
        width:'80%',
        height:'90%',
        color:Colors.black,
        fontSize:15,
        fontWeight:'600',
        opacity:.5,
    },
    icon:{
        paddingLeft:15
    }
})

export default SearchBox