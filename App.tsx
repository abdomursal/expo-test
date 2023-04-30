
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import DrawerNavigator from "./src/navigations/DrawerNavigator";
 
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}
