import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AppInicio from "../pages/inicio";
import Tela3 from "../pages/tela3";
import Tela2 from "../pages/tela2";
import Ouvir from "../pages/ouvir";
import Styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigation from ".";
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  const navigation = useNavigation();
  const Navegar = (tela) => {
    navigation.navigate(tela, {});
  };

  return (
    <Drawer.Navigator initialRouteName="EasyRecorder">
      <Drawer.Screen
        name="EasyRecorder"
        component={AppInicio}
        options={{
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "#3B3355",
          headerRight: () => (
            <LinearGradient
              style={Styles.button}
              colors={["#BFCDE0", "#5D5D81"]}
            >
              <TouchableOpacity
                style={Styles.bt}
                onPress={() => Navegar("Tela2")}
              >
                <Text style={Styles.pro}>Seja Pro</Text>
              </TouchableOpacity>
            </LinearGradient>
          ),
        }}
      />
      <Drawer.Screen
        name="Tela2"
        component={Tela2}
        options={{
          title: () => <Text style={Styles.cor}>Atualize para o Pro</Text>,
          drawerIcon: () => (
            <LinearGradient style={Styles.at} colors={["#BFCDE0", "#5D5D81"]}>
              <TouchableOpacity>
                <Text style={Styles.text}>Pro</Text>
              </TouchableOpacity>
            </LinearGradient>
          ),
          headerShown: false,
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Configurações"
        component={Tela3}
        options={{
          title: () => <Text style={Styles.cor}>Configurações</Text>,
          drawerIcon: () => (
            <FontAwesome name="gear" color="#3B3355" size={20}></FontAwesome>
          ),
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
          headerLeft: () => (
            <TouchableOpacity onPress={() => Navegar("EasyRecorder")}>
              <AntDesign name="arrowleft" color="black" size={30}></AntDesign>
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="Stack"
        component={StackNavigation}
        options={{
          drawerItemStyle: { height: 0 },
          headerShown: false,
        }}
      ></Drawer.Screen>

      <Drawer.Screen
        name="Ouvir"
        component={Ouvir}
        options={{
          drawerItemStyle: { height: 0 },
          animation: "none",
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}
