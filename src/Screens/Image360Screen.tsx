import React from 'react';
import {
  ViroARScene,
  ViroARSceneNavigator,
  Viro360Image,
} from '@viro-community/react-viro';

const Scene360 = () => (
  <ViroARScene>
    <Viro360Image source={require('assets/images/360.jpg')} />
  </ViroARScene>
);

const Image360Screen: React.FC = () => (
  <ViroARSceneNavigator
    autofocus={true}
    initialScene={{
      scene: Scene360,
    }}
    style={{flex: 1}}
  />
);

export default Image360Screen;
