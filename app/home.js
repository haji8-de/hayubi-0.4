import { useState } from "react";
import { SafeAreaView, ScrollView, View,  Platform, StyleSheet, Image, TouchableOpacity, Alert, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import useFetch from "../hooks/useFetch";
import {
    Nearbyjobs,
    Popularjobs,
    ScreenHeaderBtn,
    Welcome,
    Community,
    AddTaskModal
} from "../components";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Root, SPSheet } from 'react-native-popup-confirm-toast'

import { addTask } from '../hooks/actions/tasks.actions'
import axios from 'axios'

const Tab = createMaterialBottomTabNavigator();

const Home = () => {
    const router = useRouter()

    const [searchTerm, setSearchTerm] = useState("");

   function FloatingButtonEvent() {
       const spSheet = SPSheet;
       spSheet.show({
           component: () => component({spSheet}),
           dragFromTopOnly: true,
           onCloseComplete: () => {
               alert('onCloseComplete');
           },
           onOpenComplete: () => {
               alert('onOpenComplete');
           },
           height:260
       });
        setAddModalVisible(true)
   }

  const [task, setTask] = useState({
    title: 'test',
    description: 'test',
    editor: 'test'
  })

  const addPost = (task) =>{

    const { data, isLoading, error, refetch } = useFetch("addcommunity", {
        task,
    });
}
  const handleAddTask = async () => {
    if (task.title === '' || task.description === '') {
      Alert.alert('Please fill all fields', 'Title, description and time are required to create a task', [
        { text: 'OK', style: 'destructive' }
      ])
      return
    }

    //addPost(task)
    try {
        const options = {
            method: "GET",
            url: `http://15.164.218.46:4000/addcommunity`,
            headers: {
            },
            params: {
                task,
            },
        };

        const response = await axios.request(options);

    } catch (error) {
        console.log(error);
    } finally {
    }

    setAddModalVisible(false)
    setTask({
          title: '',
          description: '',
          editor: ''
        })
      }
      const handleChangeTitle = value => setTask({ ...task, title: value })
      const handleChangeDesc = value => setTask({ ...task, description: value })

      const [addModalVisible, setAddModalVisible] = useState(false)

      const handleCancelAdd = () => {
        setAddModalVisible(false)
        setTask({
          title: '',
          description: '',
          editor: ''
        })
      }

    function component(props) {
        //hook or class
        return (
        <AddTaskModal
          open={addModalVisible}
          handleChangeTitle={handleChangeTitle}
          handleChangeDesc={handleChangeDesc}
          task={task}
          handleCancel={handleCancelAdd}
          handleAddTask={handleAddTask}
        />);

        //props.spSheet.hide();
        //props.spSheet.setHeight(150,()=>alert('nice'));
    };
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
    function CommunityFunc() {
      return (
      <Root>
            <View style={styles.container}>
                <AddTaskModal
                  open={addModalVisible}
                  handleChangeTitle={handleChangeTitle}
                  handleChangeDesc={handleChangeDesc}
                  task={task}
                  handleCancel={handleCancelAdd}
                  handleAddTask={handleAddTask}
                />
                <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Community />
                    </ScrollView>
                    <TouchableOpacity activeOpacity={0.5}
        //                onClick={addPost}
        //                onPress={FloatingButtonEvent}
                          onPress={FloatingButtonEvent}
                          style={styles.TouchableOpacityStyle}
                        >
                       <Image source={require('../assets/icons/apple.png')}  style={styles.FloatingButtonStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        </Root>
      );
    }

    return (
     <Tab.Navigator
          initialRouteName="Feed"
          activeColor="#ffffff"
          barStyle={styles.BarStyle}
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
            name="Community"
            component={CommunityFunc}
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
