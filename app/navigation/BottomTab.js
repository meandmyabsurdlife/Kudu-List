import { TouchableWithoutFeedback, Text, View, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TodoScreen from '../screens/TodoScreen';
import ReminderScreen from '../screens/ReminderScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TodoFormScreen from '../screens/TodoFormScreen';

//https://github.com/bizzara/bdapp

const Tab = createBottomTabNavigator()

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      //backgroundColor: '#FAC846',
  },
}

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Todo"
        component={TodoFormScreen}
      />
      <Tab.Screen
        name="Reminder"
        component={ReminderScreen}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  )
}

export default BottomTab
