
import {Button, Text, View, TextInput, TouchableWithoutFeedback, ScrollView} from 'react-native';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import useFetch from "../../hooks/useFetch";
import axios from "axios";
function AddPostScreen({navigation}) {

  const [task, setTask] = useState({
    title: 'test',
    description: 'test',
    editor: 'test'
  })

  useEffect(() => {
  }, []);
//
//  const addPost = (task) =>{
//        const { data, isLoading, error, refetch } = useFetch("addcommunity", {
//            task,
//        });
//    }
  const handleAddTask = async () => {
    if (task.title === '' || task.description === '') {
      Alert.alert('Please fill all fields', 'Title, description and time are required to create a task', [
        { text: 'OK', style: 'destructive' }
      ])
      return
    }

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
    setTask({
          title: '',
          description: '',
          editor: ''
      })
//      navigation.navigate('Community')
      navigation.reset({
        index: 0,
        routes: [{ name: 'Community' }],
      });
  }
  const handleChangeTitle = value => setTask({ ...task, title: value })
  const handleChangeDesc = value => setTask({ ...task, description: value })
  const handleChangeEditor = value => setTask({ ...task, editor: value })

    return (
        <View style={styles.container}>

          <ScrollView showsVerticalScrollIndicator={false}
          fillViewport={true}
          focusableInTouchMode={true}
          scrollbarAlwaysDrawVerticalTrack={true}
          >
          <View style={styles.modalForm}>
            <View style={styles.modalFormGroup}>
              <Text style={styles.modalFormLabel}>Title</Text>
              <TextInput onChangeText={handleChangeTitle} value={task.title} style={styles.modalFormInput} />
            </View>

            <View style={styles.modalFormGroup}>
              <Text style={styles.modalFormLabel}>Description</Text>
              <TextInput onChangeText={handleChangeDesc}
              multiline={true}
              value={task.description} style={styles.modalFormInputMultiline} />
            </View>

            <View style={styles.modalFormGroup}>
              <Text style={styles.modalFormLabel}>editor</Text>
              <TextInput onChangeText={handleChangeEditor} value={task.editor} style={styles.modalFormInput} />
            </View>

            <View style={styles.modalFormActions}>

              <TouchableWithoutFeedback onPress={handleAddTask}>
                <View style={[styles.modalFormAction, styles.primaryButton, { marginLeft: 6 }]}>
                  <Text style={styles.modalFormActionText}>Add</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          </ScrollView>
        </View>
    );
}
export default AddPostScreen