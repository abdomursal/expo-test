import { Platform, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import NotFound from "../screens/NotFound";
import IconVectors from "../components/Icons";
import { Colors } from "../constants/Colors";

import React from 'react'
import { BottomTabParamList } from '../types/NavigationProps';

const Tap = createBottomTabNavigator<BottomTabParamList>();
const Web = Platform.OS==='web'


const BottomTapBar = () => {
        return (
          <Tap.Navigator
          initialRouteName='Home'
            screenOptions={() => ({
              tabBarLabel: () => null,
              tabBarStyle: {
                backgroundColor: Colors.primary,
                borderTopWidth: 0,
              },
            })}
          >
            <Tap.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <IconVectors.Entypo
                    name="home"
                    size={24}
                    color={focused ? Colors.secondary : Colors.mediumGrey}
                    style={focused && !Web? styles.iconStyle:null}
                  />
                ),
              }}
            />
            <Tap.Screen
              name="User"
              component={NotFound}
              options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <IconVectors.Feather
                    name="heart"
                    size={24}
                    color={focused ? Colors.secondary : Colors.mediumGrey}
                    style={focused && !Web? styles.iconStyle:null}
                  />
                ),
              }}
            />
            <Tap.Screen
              name="Favourite"
              component={NotFound}
              options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <IconVectors.Feather
                    name="user"
                    size={24}
                    color={focused ? Colors.secondary : Colors.mediumGrey}
                    style={focused && !Web? styles.iconStyle:null}
                  />
                ),
              }}
            />
            <Tap.Screen
              name="History"
              component={NotFound}
              options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <IconVectors.MaterialIcons
                    name="history"
                    size={24}
                    color={focused ? Colors.secondary : Colors.mediumGrey}
                    style={focused && !Web? styles.iconStyle:null}
                  />
                ),
              }}
            />
          </Tap.Navigator>
        );
      };


  const styles = StyleSheet.create({
    iconStyle:{
      shadowColor: Colors.secondary,
      shadowOffset: {
        height: 5,
        width: 0,
      },
      shadowRadius: 10,
      shadowOpacity: 0.5,
    }
  })
      


export default BottomTapBar