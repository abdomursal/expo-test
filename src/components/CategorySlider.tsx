import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";
import { CategoryProps } from "../types/CategoryProps";

const CategorySlider = ({ data, selected, onPress }: CategoryProps) => {
  const isActive: boolean = selected == data.label;

  return (
    <TouchableOpacity style={style.container} onPress={()=>onPress()}>
      <Text style={isActive ? style.categoryTitleActive : style.categoryTitle}>
        {data.label}
      </Text>
      {isActive && <View style={style.underlineBar} />}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: Colors.transparent,
  },
  categoryTitle: {
    marginHorizontal: 20,
    fontSize: 17,
    fontWeight: "400",
    color: Colors.mediumGrey,
  },
  categoryTitleActive: {
    color: Colors.secondary,
    marginHorizontal: 20,
    fontSize: 17,
    fontWeight: "400",
  },
  underlineBar: {
    width: "90%",
    height: 3,
    alignSelf: "center",
    backgroundColor: Colors.secondary,
    position: "absolute",
    bottom: 0,
    shadowOpacity: 0.4,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowColor: Colors.secondary,
    shadowRadius: 10,
  },
});

export default CategorySlider;
