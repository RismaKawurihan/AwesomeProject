import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profil from './App'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { WebView } from 'react-native-webview';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Createdata from './CreateData';
import Listdata from './Listdata';

function HomeScreen() {
  return (
    <Createdata />
  );
}

function DataMahasiswaScreen() {
  return (
    <Listdata />
  );
}

function WebScreen() {
  return (
    <WebView
        source={{ uri: 'https://github.com/RismaKawurihan' }}
      />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profil" component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faUser} color={color} size={20} />
            ),
          }} />
        <Tab.Screen name="DataMahasiswa" component={DataMahasiswaScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faUserGraduate} color={color} size={20} />
            ),
          }} />
        <Tab.Screen name="GITHUB" component={WebScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faGithub} color={color} size={20} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}