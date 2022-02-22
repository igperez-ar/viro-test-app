import React from 'react';
import {ViroARSceneNavigator} from '@viro-community/react-viro';
import IconsScene from '@src/Features/Icons/IconsScene';

const IconsScreen: React.FC = () => (
  <ViroARSceneNavigator
    autofocus={true}
    initialScene={{
      scene: IconsScene,
    }}
    style={{flex: 1}}
  />
);

export default IconsScreen;
