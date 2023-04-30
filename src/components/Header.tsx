import React from "react";
import { Colors } from "../constants/Colors";
import IconVectors from "./Icons";
import { DrawerParamList } from "../types/NavigationProps";
import { DrawerScreenProps } from "@react-navigation/drawer";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const Header = ({ navigation }: DrawerScreenProps<DrawerParamList, any>) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          source={require("../../assets/menu.png")}
          style={styles.menuIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <IconVectors.Ionicons
          name="cart-outline"
          size={30}
          color={Colors.mediumGrey}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 74,
    width: "90%",
    alignSelf: "center",
    backgroundColor: Colors.primary,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 5,
  },
  menuIcon: {
    height: 20,
    width: 22,
  },
});
