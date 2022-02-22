import React from 'react';
import {ViroARSceneNavigator} from '@viro-community/react-viro';
import ARCarDemo from '@src/Features/ARCarDemo/ARCarDemo';

const CarSceen: React.FC = () => (
  <ViroARSceneNavigator
    autofocus={true}
    initialScene={{
      scene: ARCarDemo,
    }}
    style={{flex: 1}}
  />
);

export default CarSceen;
