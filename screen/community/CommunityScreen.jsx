
import {Button, Text, View,ScrollView, TouchableOpacity, Image} from 'react-native';
import * as React from 'react';
import { styles } from './styles';
import { COLORS } from "../../constants";
import {
    Community
} from "../../components";
import { Root, SPSheet } from 'react-native-popup-confirm-toast'
function CommunityScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Community />
                </ScrollView>
                <TouchableOpacity activeOpacity={0.5}
                      onPress={() => navigation.navigate('AddPost')}
                      style={styles.TouchableOpacityStyle}
                    >
                   <Image source={require('../../assets/icons/apple.png')}  style={styles.FloatingButtonStyle} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default CommunityScreen