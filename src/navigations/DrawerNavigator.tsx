import { createDrawerNavigator } from "@react-navigation/drawer";
import { Colors } from "../constants/Colors";
import { DrawerParamList } from "../types/NavigationProps";
import BottomTapBar from "./BottomTapBar";

const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: Colors.lightSecondary,
        drawerActiveTintColor: Colors.white,
      }}
    >
      <Drawer.Screen name="page1" component={BottomTapBar} />
      <Drawer.Screen name="page2" component={BottomTapBar} />

    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
