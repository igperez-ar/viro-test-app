import React from 'react';
import {ViroParticleEmitter} from '@viro-community/react-viro';

const FlameEmitter: React.FC<any> = props => (
  <ViroParticleEmitter
    position={props.location}
    duration={1200}
    visible={true}
    run={true}
    loop={true}
    fixedToEmitter={true}
    image={{
      source: require('./res/particle_fire.png'),
      height: 0.3,
      width: 0.3,
      bloomThreshold: 0.0,
    }}
    spawnBehavior={{
      particleLifetime: [500, 500],
      emissionRatePerSecond: [30, 40],
      maxParticles: 800,
    }}
    particleAppearance={{
      opacity: {
        initialRange: [0.2, 0.2],
        factor: 'Time',
        interpolation: [
          {endValue: 0.2, interval: [0, 200]},
          {endValue: 0.0, interval: [200, 500]},
        ],
      },
      scale: {
        initialRange: [
          [1, 1, 1],
          [1, 1, 1],
        ],
        factor: 'Time',
        interpolation: [{endValue: [0, 0, 0], interval: [150, 500]}],
      },
    }}
    particlePhysics={{
      velocity: {
        initialRange: [
          [0, 0.3, 0],
          [0, 0.5, 0],
        ],
      },
    }}
  />
);

export default FlameEmitter;
