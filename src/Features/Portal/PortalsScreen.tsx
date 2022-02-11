import React from 'react';

import {
  ViroARScene,
  ViroAmbientLight,
  Viro360Image,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';

const ScenePortal = () => (
  <ViroARScene>
    <ViroAmbientLight color="#ffffff" intensity={200} />
    <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => {}}>
      <ViroPortal position={[0, 0, -1]} scale={[0.1, 0.1, 0.1]}>
        <Viro3DObject
          source={require('./res/portal_ship.vrx')}
          resources={[
            require('./res/portal_ship_diffuse.png'),
            require('./res/portal_ship_normal.png'),
            require('./res/portal_ship_specular.png'),
          ]}
          type="VRX"
        />
      </ViroPortal>
      <Viro360Image source={require('./res/360_guadalupe.jpg')} />
    </ViroPortalScene>
  </ViroARScene>
);

const PortalScreen: React.FC = () => (
  <ViroARSceneNavigator
    autofocus={true}
    initialScene={{
      scene: ScenePortal,
    }}
    style={{flex: 1}}
  />
);

export default PortalScreen;
