import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@src/Screens/HomeScreen';
import ViroScreen from '@src/Screens/ViroScreen';
import Image360Screen from '@src/Screens/Image360Screen';
import GalleryScreen from '@src/Screens/GalleryScreen';
import PortalScreen from '@src/Features/Portal/PortalsScreen';
import TourSceen from '@src/Features/360PhotoTour/TourScreen';
import ParticlesScreen from '@src/Features/ParticleEmitters/ParticlesScreen';
import CarSceen from '@src/Screens/ImageScreen';
import MarkerScreen from '@src/Screens/MarkerScreen';
import IconsScreen from '@src/Screens/IconsScreen';

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
      <AppStack.Screen name="PARTICLES" component={ParticlesScreen} />
      <AppStack.Screen name="CAR" component={CarSceen} />
      <AppStack.Screen name="MARKER" component={MarkerScreen} />
      <AppStack.Screen name="ICONS" component={IconsScreen} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
