import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@src/Screens/HomeScreen';
import ViroScreen from '@src/Screens/ViroScreen';
import Image360Screen from '@src/Screens/Image360Screen';
import GalleryScreen from '@src/Screens/GalleryScreen';
import PortalScreen from '@src/Features/Portal/PortalsScreen';
import TourSceen from '@src/Features/360PhotoTour/TourScreen';

const AppStack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <AppStack.Navigator initialRouteName="HOME">
      <AppStack.Screen name="HOME" component={HomeScreen} />
      <AppStack.Screen name="VIRO" component={ViroScreen} />
      <AppStack.Screen name="GALLERY" component={GalleryScreen} />
      <AppStack.Screen name="IMAGE360" component={Image360Screen} />
      <AppStack.Screen name="360TOUR" component={TourSceen} />
      <AppStack.Screen name="PORTAL" component={PortalScreen} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
