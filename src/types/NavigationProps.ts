import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }

export type RootStackParamList = {
    Root: NavigatorScreenParams<BottomTabParamList> |DrawerParamList| undefined;
    NotFound: undefined;
};

export type DrawerParamList = {
    page1: undefined;
    page2: undefined;
  };

export type BottomTabParamList = {
    Home: undefined;
    Favourite: undefined;
    User:undefined;
    History:undefined;
  };

  export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabScreenProps<Screen extends keyof BottomTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
