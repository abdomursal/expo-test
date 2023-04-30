import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const NotFound = () => {
  return (
    <View style={styles.cotainer}>
      <Text style={styles.notFound}>Not Found</Text>
    </View>
  )
}

export default NotFound

const styles = StyleSheet.create({
  cotainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Colors.primary
  },
  notFound:{
    fontSize:26,
    fontWeight:'bold',
    color:Colors.secondary,
  }
})