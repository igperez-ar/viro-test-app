import React from 'react';
import {
  ViroARSceneNavigator,
} from '@viro-community/react-viro';
import MainScene from './IconsScene';

const TourSceen: React.FC = () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: MainScene,
      }}
      style={{flex: 1}}
    />
  );
};

export default TourSceen;
