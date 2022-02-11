import React from 'react';
import {ViroParticleEmitter} from '@viro-community/react-viro';

const FireworkEmitter: React.FC<any> = props => {
  var viroFireworkColors = [
    '#ff2d2d',
    '#42ff42',
    '#00edff',
    '#ffff00',
    '#ffb5f8',
    '#00ff1d',
    '#00edff',
    '#ffb14c',
    '#ff7cf4',
  ];
  var colorRand1 = viroFireworkColors[Math.floor(Math.random() * 5 + 0)];
  var colorRand2 = viroFireworkColors[Math.floor(Math.random() * 5 + 0)];
  var colorRand3 = viroFireworkColors[Math.floor(Math.random() * 5 + 0)];

  var startColorRange1 =
    props.startColor == undefined ? colorRand1 : props.startColor;
  var startColorRange2 =
    props.startColor == undefined ? colorRand2 : props.startColor;
  var endColor = props.endColor == undefined ? colorRand3 : props.endColor;

  return (
    <ViroParticleEmitter
      position={props.explosionLocation}
      duration={1200}
      delay={props.explosionDelay}
      visible={true}
      run={true}
      loop={props.loop}
      fixedToEmitter={true}
      image={{
        source: require('./res/particle_firework.png'),
        height: 0.1,
        width: 0.1,
        bloomThreshold: 0.0,
      }}
      spawnBehavior={{
        particleLifetime: [1200, 1200],
        emissionRatePerSecond: [0, 0],
        emissionBurst: [{time: 0, min: 300, max: 350, cycles: 1}],
        spawnVolume: {shape: 'sphere', params: [0.15], spawnOnSurface: true},
        maxParticles: 1000,
      }}
      particleAppearance={{
        opacity: {
          initialRange: [1.0, 1.0],
          factor: 'time',
          interpolation: [{endValue: 0.0, interval: [800, 1200]}],
        },

        color: {
          initialRange: [startColorRange1, startColorRange2],
          factor: 'time',
          interpolation: [{endValue: endColor, interval: [300, 1200]}],
        },
      }}
      particlePhysics={{
        explosiveImpulse: {
          impulse: 0.12 * props.explosionSize,
          position: [0, 0, 0],
          decelerationPeriod: 1.0,
        },
      }}
    />
  );
};

export default FireworkEmitter;
