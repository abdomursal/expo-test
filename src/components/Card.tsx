import React from "react";
import { Colors } from "../constants/Colors";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { viewportHeight, viewportWidth } from "../utils/ScaleDimensions";
import { CardProps } from "../types/CardProps";



const Card = ({data}:CardProps) => {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.imageWrap}>
          <Image
            style={styles.image}
            source={{uri:data.image}}
            />
        </View>
      <View style={styles.productTitleWrap}>
        <Text style={styles.productTitle}>{data.name}</Text>
        <Text style={styles.productTitle}>{data.description}</Text>
      </View>
      <View style={styles.priceWrap}>
      <Text style={styles.price}>{data.price}€</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
      marginHorizontal:20,
    height: 260, //260px
    width:220,  //220px
    borderRadius: 30,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: Colors.white,
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 10,
      width: 1,

    },
    shadowColor:Colors.shadow,
    shadowRadius: 15,
  },
  imageWrap: {
    height: 140,
    width: 140,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowColor: Colors.shadow,
    shadowRadius: 10,
    position: "absolute",
    top: -35,
    alignSelf: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 100,
  },
  productTitleWrap: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "30%",
    // borderWidth:1,
  },
  productTitle: {
    fontWeight: "600",
    color: Colors.black,
    fontSize: 22,
    
  },
  priceWrap:{
      height:"30%",
    //   borderWidth:1,
      justifyContent:'center',
      alignItems:'center'
  },
  price:{
    color: Colors.secondary, 
    fontSize:17,
    fontWeight:'700',
  },
});
