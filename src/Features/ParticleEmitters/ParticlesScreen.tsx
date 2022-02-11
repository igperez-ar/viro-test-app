import React, {useEffect, useState} from 'react';

import {
  ViroARScene,
  ViroMaterials,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';
import FlameEmitter from './FlameEmitter';
import SmokeEmitter from './SmokeEmitter';
import FireworkEmitter from './FireworkEmitter';
import SnowEmitter from './SnowEmitter';

/*
 Scene with a set of particle template examples, where the user
 can iterate through each particle emitters by clicking the scene.
 */
const SceneParticles = () => {
  const [currentEffect, setCurrentEffect] = useState(0);

  useEffect(() => {
    ViroMaterials.createMaterials({
      ground: {
        cullMode: 'None',
        shininess: 2.0,
        diffuseColor: '#ff9999',
        lightingModel: 'Blinn',
      },
    });
  }, []);

  const clickedScene = () => {
    var nextEffect = currentEffect + 1;
    if (currentEffect > 3) {
      nextEffect = 0;
    }
    setCurrentEffect(nextEffect);
  };

  const getEffect = () => {
    if (currentEffect == 0) {
      return getSmoke();
    } else if (currentEffect == 1) {
      return getFlames();
    } else if (currentEffect == 2) {
      return getSnow();
    }
    return getFireworks();
  };

  const getFlames = () => <FlameEmitter location={[0, -0.8, -2]} />;

  const getSmoke = () => (
    <SmokeEmitter run={true} location={[0, -1, -5]} power={5.0} />
  );

  const getFireworks = () => (
    <FireworkEmitter
      loop={true}
      run={true}
      explosionLocation={[0, 5, -8]}
      explosionSize={6.0}
      explosionDelay={1000}
      startColor={'#ff2d2d'}
      endColor={'#42ff42'}
    />
  );

  const getSnow = () => (
    <SnowEmitter
      run={true}
      emissionArea={[20, 20]}
      emissionHeight={4.5}
      snowRate={1.0}
      fallSpeed={1.0}
      windShear={1.0}
    />
  );

  return <ViroARScene onClick={clickedScene}>{getEffect()}</ViroARScene>;
};

const ParticlesScreen: React.FC<any> = () => (
  <ViroARSceneNavigator
    autofocus={true}
    initialScene={{
      scene: SceneParticles,
    }}
    style={{flex: 1}}
  />
);

export default ParticlesScreen;
