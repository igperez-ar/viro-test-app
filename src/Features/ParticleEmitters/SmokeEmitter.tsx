'use strict';

import React from 'react';
import {ViroParticleEmitter} from '@viro-community/react-viro';

const SmokeEmitter: React.FC<any> = props => (
  <ViroParticleEmitter
    position={props.location}
    duration={1500}
    visible={true}
    run={props.run}
    loop={true}
    fixedToEmitter={false}
    image={{
      source: require('./res/darkSmoke.png'),
      height: 1,
      width: 1,
    }}
    spawnBehavior={{
      particleLifetime: [1500, 1500],
      emissionRatePerSecond: [70, 80],
      maxParticles: 800,
    }}
    particleAppearance={{
      scale: {
        initialRange: [
          [1, 1, 1],
          [1, 1, 1],
        ],
        factor: 'Time',
        interpolation: [
          {endValue: [2, 2, 2], interval: [0, 500]},
          {endValue: [3, 3, 3], interval: [0, 1500]},
        ],
      },

      opacity: {
        initialRange: [0.0, 0.0],
        factor: 'Time',
        interpolation: [
          {endValue: 0.4, interval: [0, 200]},
          {endValue: 0.0, interval: [900, 1500]},
        ],
      },
    }}
    particlePhysics={{
      velocity: {
        initialRange: [
          [-0.25 * props.power, 1 * props.power, 0],
          [0.25 * props.power, 1 * props.power, 0],
        ],
      },
      acceleration: {
        initialRange: [
          [0, -5.8, 0],
          [0, -5.8, 0],
        ],
      },
    }}
  />
);

export default SmokeEmitter;
