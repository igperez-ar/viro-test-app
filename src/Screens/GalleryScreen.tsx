import React from 'react';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroImage,
} from '@viro-community/react-viro';

const SceneGallery = () => (
  <ViroARScene>
    <ViroImage
      position={[-5, 0, -7]}
      rotation={[0, 10, 0]}
      height={2}
      width={2}
      source={require('assets/images/target.jpeg')}
    />
    <ViroImage
      position={[-2.5, 0, -7]}
      rotation={[0, 5, 0]}
      height={2}
      width={2}
      source={require('assets/images/target.jpeg')}
    />
    <ViroImage
      position={[0, 0, -7]}
      height={2}
      width={2}
      source={require('assets/images/target.jpeg')}
    />
    <ViroImage
      position={[2.5, 0, -7]}
      rotation={[0, -5, 0]}
      height={2}
      width={2}
      source={require('assets/images/target.jpeg')}
    />
    <ViroImage
      position={[5, 0, -7]}
      rotation={[0, -10, 0]}
      height={2}
      width={2}
      source={require('assets/images/target.jpeg')}
    />
  </ViroARScene>
);

const GalleryScreen: React.FC = () => (
  <ViroARSceneNavigator
    autofocus={true}
    initialScene={{
      scene: SceneGallery,
    }}
    style={{flex: 1}}
  />
);

export default GalleryScreen;
