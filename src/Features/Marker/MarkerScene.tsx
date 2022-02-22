import React from 'react';
import {
  ViroARScene,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroNode,
} from '@viro-community/react-viro';

const MarkerScene: React.FC = ({}) => {

  ViroARTrackingTargets.createTargets({
    target1: {
      source: require('./res/p_interes_001.png'),
      physicalWidth: 0.165,
      orientation: 'Up',
    },
    target2: {
      source: require('./res/p_interes_002.png'),
      physicalWidth: 0.165,
      orientation: 'Up',
    },
    target3: {
      source: require('./res/logo.png'),
      physicalWidth: 0.165,
      orientation: 'Up',
    },
    target4: {
      source: require('./res/waia.jpeg'),
      physicalWidth: 0.165,
      orientation: 'Up',
    },
  });

  const _show = (target: string) => {
    console.log(target);
  };

  return (
    <ViroARScene>
      <ViroARImageMarker
        target={'target1'}
        onAnchorFound={() => console.log('FOUND target 1')}>
        <ViroNode scale={[0, 0, 0]} />
      </ViroARImageMarker>
      <ViroARImageMarker
        target={'target2'}
        onAnchorFound={() => console.log('FOUND target 2')}>
        <ViroNode scale={[0, 0, 0]} />
      </ViroARImageMarker>
      <ViroARImageMarker
        target={'target3'}
        onAnchorFound={() => console.log('FOUND target 3')}>
        <ViroNode scale={[0, 0, 0]} />
      </ViroARImageMarker>
      <ViroARImageMarker
        target={'target4'}
        onAnchorFound={() => console.log('FOUND target 4')}>
        <ViroNode scale={[0, 0, 0]} />
      </ViroARImageMarker>
    </ViroARScene>
  );
};

export default MarkerScene;
