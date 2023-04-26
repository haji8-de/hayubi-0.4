import { useState } from "react";
import { SafeAreaView, ScrollView, View,  Platform, StyleSheet, Image, TouchableOpacity, Alert, Text,  TouchableWithoutFeedback, TextInput  } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import useFetch from "../hooks/useFetch";
import {
    Nearbyjobs,
    Popularjobs,
    ScreenHeaderBtn,
    Welcome
} from "../components";

import CommunityStack from '../screen/stack/CommunityStack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import axios from 'axios'
//import { styles } from '../../component/modal/addTaskModal/styles'

const Tab = createMaterialBottomTabNavigator();

const Home = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("");
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
            <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle} >
               <Image source={require('../assets/icons/apple.png')}  style={styles.FloatingButtonStyle} />
            </TouchableOpacity>
        </View>
      );
    }

    return (
     <Tab.Navigator
          initialRouteName="Job"
          activeColor="#ffffff"
          barStyle={styles.BarStyle}
          screenOptions={{
            headerShown: false
          }}
        >
          <Tab.Screen
            name="Job"
            component={Feed}
            options={{
              tabBarLabel: 'Job Finder',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Community"
            component={CommunityStack}
            options={{
              tabBarLabel: 'Community',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="forum" color={color} size={26} />
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
        bottom: 100,
    },
    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    BarStyle:{
        backgroundColor:COLORS.tertiary,
        position: 'absolute',
        overflow:'hidden',
        left: 0,
        bottom: 0,
        right: 0,
        padding:0,
    }
});
export default Home;
