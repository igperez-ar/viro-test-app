import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  Viro360Image,
  ViroImage,
  ViroAnimations,
} from '@viro-community/react-viro';
import OfficeTourSplashScene from './WestLakeTowers';

/**
 * Set all the images and assets required in this scene.
 */
var backgroundImage = require('./res/westlake_towers.jpg');
var weworkImage = require('./res/wework_title.png');

const MainScene: React.FC = (props: any) => {
  const [runShowTitleAnimation, setRunShowTitleAnimation] = useState(false);

  useEffect(() => {
    /**
     * Declare all your animations here. They'll be referenced by the animation props.
     */
    ViroAnimations.registerAnimations({
      showTitleAnimation: {
        properties: {scaleX: 2, scaleY: 2, scaleZ: 2, opacity: 1.0},
        easing: 'PowerDecel',
        duration: 1000,
      },
    });
  }, []);
  /**
   * Callback function for when image has finished loading in the Viro360Photo.
   * We then animate the WeWork ViroImage into the scene through the
   * setting of state runShowTitleAnimation.
   */
  const _onBackgroundPhotoLoadEnd = () => setRunShowTitleAnimation(true);

  /**
   * Callback function for when the user taps on the WeWork ViroImage
   * where we navigate into the second scene.
   */
  const _onTitleClicked = () => {
    console.log(props)
    props.sceneNavigator.push({scene: OfficeTourSplashScene});
  };

  /**
   * Renders a scene with a 360 Photo background that contains a single WeWork ViroImage. This
   * image will be faded/scaled in with the "showTitleAnimation" when the scene first appears. Clicking on
   * the WeWork ViroImage will launch the user into the next scene (WestLakeTowers).
   */
  return (
    <ViroARScene style={styles.container}>
      <Viro360Image
        source={backgroundImage}
        onLoadEnd={_onBackgroundPhotoLoadEnd}
      />

      <ViroImage
        position={[0, 0, -5]}
        source={weworkImage}
        scale={[0.1, 0.1, 0.1]}
        opacity={0.0}
        onClick={_onTitleClicked}
        animation={{
          name: 'showTitleAnimation',
          run: runShowTitleAnimation,
          loop: false,
        }}
      />
    </ViroARScene>
  );
};

export default MainScene;

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
