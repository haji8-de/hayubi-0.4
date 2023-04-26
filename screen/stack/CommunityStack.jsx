import { createNativeStackNavigator } from '@react-navigation/native-stack';

import communityScreen from '../../screen/community/CommunityScreen';
import addPostScreen from '../../screen/community/AddPostScreen';
import postScreen from '../../screen/community/PostScreen';

const Stack = createNativeStackNavigator();

function CommunityStack() {
    return (
        <Stack.Navigator
            initialRouteName="Community" >
            <Stack.Screen name="Community" component={communityScreen}/>
            <Stack.Screen name="Post" component={postScreen}/>
            <Stack.Screen name="AddPost" component={addPostScreen}/>
        </Stack.Navigator>
    )
}
export default CommunityStack;