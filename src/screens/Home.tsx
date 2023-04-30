import { DrawerScreenProps } from "@react-navigation/drawer";
import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
import CategorySlider from "../components/CategorySlider";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import { Categories } from "../constants/Categories";
import { Colors } from "../constants/Colors";
import { data } from "../lib/data";
import { DrawerParamList } from "../types/NavigationProps";
import { viewportWidth } from "../utils/ScaleDimensions";

const Home = ({
  navigation,
  route,
}: DrawerScreenProps<DrawerParamList, any>) => {
  const [categorySelected, setCategorySelected] = useState("");
  const filter = data.filter((item) => item.category == categorySelected);
  const products = filter.length <= 0 ? data : filter;

  return (
    <SafeAreaView style={style.container}>
      <StatusBar />
      <Header navigation={navigation} route={route} />
      <View style={style.heroWrap}>
        <Text style={style.title}>Delicious</Text>
        <Text style={style.title}>food for you</Text>
      </View>
      <SearchBox />
      <View style={style.categoryWrap}>
        <FlatList
          data={Categories}
          // keyExtractor={(item}) =>item.id}
          horizontal
          showsHorizontalScrollIndicator={true}
          renderItem={({ item }) => (
            <CategorySlider
              data={item}
              onPress={() => setCategorySelected(item.label)}
              selected={categorySelected}
            />
          )}
          contentContainerStyle={style.paddingLeft}
        />
      </View>
      <View style={style.cardWrap}>
        <FlatList
          data={products}
          // keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Card data={item} />}
          contentContainerStyle={[
            style.scrollViewContentStyle,
            style.paddingLeft,
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    paddingVertical: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: Colors.black,
    lineHeight: 40.57,
  },
  heroWrap: {
    height: "15%",
    width: viewportWidth / 1.2,
  },
  paddingLeft: {
    paddingLeft: 70,
  },
  categoryWrap: {
    height: "8%",
    marginBottom: 10,
  },
  scrollViewContentStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  cardWrap: {
    width: "100%",
    height: "55%",
  },
});

export default Home;
