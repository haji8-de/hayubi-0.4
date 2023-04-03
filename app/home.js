import { useState } from "react";
import { SafeAreaView, ScrollView, View,  Platform, StyleSheet, Image, TouchableOpacity, Alert, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
    Nearbyjobs,
    Popularjobs,
    ScreenHeaderBtn,
    Welcome,
} from "../components";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const Home = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("");

   function FloatingButtonEvent() {
       Alert.alert("Floating Button Clicked");
   }
    function Feed() {
      return (
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: COLORS.lightWhite },
                        headerShadowVisible: false,
                        headerLeft: () => (
                            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
                        ),
                        headerRight: () => (
                            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
                        ),
                        headerTitle: "",
                    }}
                />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                        style={{
                            flex: 1,
                            padding: SIZES.medium,
                        }}
                    >
                        <Welcome
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            handleClick={() => {
                                if (searchTerm) {
                                    router.push(`/search/${searchTerm}`)
                                }
                            }}
                        />

                        <Popularjobs />
                        <Nearbyjobs />
                    </View>
                </ScrollView>
            </SafeAreaView>
      );
    }

    function Profile() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile!</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={FloatingButtonEvent} style={styles.TouchableOpacityStyle} >
               <Image source={require('../assets/icons/apple.png')}  style={styles.FloatingButtonStyle} />
            </TouchableOpacity>
        </View>
      );
    }

    return (
     <Tab.Navigator
          initialRouteName="Feed"
          activeColor="#ffffff"
          barStyle={{ backgroundColor: 'tomato' }}
        >
          <Tab.Screen
            name="Feed"
            component={Feed}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
    );
};

         const styles = StyleSheet.create({
          container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: "#e5e5e5"
          },
          headerText: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            fontWeight: 'bold'
          },
          TouchableOpacityStyle: {
            position: 'absolute',
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            right: 30,
            bottom: 30,
          },
          FloatingButtonStyle: {
            resizeMode: 'contain',
            width: 50,
            height: 50,
          },

        });
export default Home;
