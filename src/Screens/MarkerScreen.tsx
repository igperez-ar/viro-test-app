import React from 'react';
import {ViroARSceneNavigator} from '@viro-community/react-viro';
import MarkerScene from '@src/Features/Marker/MarkerScene';

const MarkerScreen: React.FC = () => (
  <ViroARSceneNavigator
    autofocus={true}
    initialScene={{
      scene: MarkerScene,
    }}
    style={{flex: 1}}
  />
);

export default MarkerScreen;
