import React from 'react';
import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroUtils,
} from '@viro-community/react-viro';
import InfoElement from './custom_controls/InfoElement';

/**
 * Set all the images and assets required in this scene.
 */
var statueWindowCard = require('./res/infocard_statue.png');

const IconsScene: React.FC = () => {
  /**
   * Renders a scene with a 360 Photo background that contains a single WeWork ViroImage. This
   * image will be faded/scaled in with the "showTitleAnimation" when the scene first appears. Clicking on
   * the WeWork ViroImage will launch the user into the next scene (WestLakeTowers).
   */
  return (
    <ViroARScene style={styles.container}>
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={[-5, 0, 5]}
      />
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={[-9, 5, 0]}
      />
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={[-8, 1, -5]}
      />
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={[6, 5, -4]}
      />
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={[-4, 2, -6]}
      />
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={[-7, 0, -6]}
      />
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={[-8, 9, 5]}
      />
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={[-5, 5, 10]}
      />
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={[-10, -4, -2]}
      />
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={[7, 5, -4]}
      />
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={[-4, 2, -6]}
      />
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={[-7, 0, -6]}
      />
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={[-2, 4, 7]}
      />
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={[-1, 0, 8]}
      />
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={[8, -4, 5]}
      />
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={[8, 5, -4]}
      />
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={[6, 2, -6]}
      />
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={[-7, 5, -8]}
      />
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={[-4, -2, 6]}
      />
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={[7, 8, 6]}
      />
    </ViroARScene>
  );
};

export default IconsScene;

/**
 * Declare all custom flex box styles here to be reference by the
 * controls above.
 */
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
