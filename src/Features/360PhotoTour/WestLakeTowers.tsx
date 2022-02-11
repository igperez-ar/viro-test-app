import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  Viro360Image,
  ViroAnimations,
  ViroNode,
  ViroImage,
  ViroUtils,
} from '@viro-community/react-viro';
import LoadingSpinner from './custom_controls/LoadingSpinner';
import InfoElement from './custom_controls/InfoElement';

let polarToCartesian = ViroUtils.polarToCartesian;

/**
 * Set all the images and assets required in this scene.
 */
var backgroundImage = require('./res/westlake_towers.jpg');
var monorailInfoCard = require('./res/infocard_monorail.png');
var statueWindowCard = require('./res/infocard_statue.png');
var slutWindowCard = require('./res/infocard_slut.png');
var backImage = require('./res/icon_back.png');

/**
 * Grab our created custom controls used within this scene.
 */

const OfficeTourSplashScene: React.FC = (props: any) => {
  const [showSceneItems, setShowSceneItems] = useState(false);

  useEffect(() => {
    /**
     * Declare all your animations here. They'll be referenced by the animation props.
     */
    ViroAnimations.registerAnimations({
      fadeIn: {properties: {opacity: 1.0}, duration: 1000},
    });
  }, []);
  /**
   * Displays a set of InfoElement controls representing several POI locations
   * within this scene, and as well as a back button at the bottom of the scene.
   */
  const _getInfoControls = () => (
    <ViroNode
      opacity={0.0}
      animation={{
        name: 'fadeIn',
        run: showSceneItems,
        loop: false,
      }}>
      <InfoElement
        content={slutWindowCard}
        contentCardScale={[3.67, 4, 1]}
        position={polarToCartesian([-5, 0, 0])}
      />
      <InfoElement
        content={monorailInfoCard}
        contentCardScale={[3.67, 4, 1]}
        position={polarToCartesian([-5, 77, -10])}
      />
      <InfoElement
        content={statueWindowCard}
        contentCardScale={[4, 3.95, 2]}
        position={polarToCartesian([-5, 277, 0])}
      />
      <ViroImage
        scale={[1, 1, 1]}
        position={[0, -3.5, 0]}
        rotation={[-90, 0, 0]}
        source={backImage}
        onClick={_onBackClick}
      />
    </ViroNode>
  );

  /**
   * Callback function for when image has finished loading in the Viro360Photo.
   * We then animate the main info elements into the scene through the
   * setting of state showSceneItems.
   */
  const _onBackgroundPhotoLoadEnd = () => setShowSceneItems(true);

  /**
   * Callback function for when the user taps on back button located at the
   * bottom of the scene. This pops the current scene to the previous one.
   */
  const _onBackClick = () => props.sceneNavigator.pop();

  /**
   * Renders a scene with a 360 Photo background that contains a few toggleable Info UI Elements
   * featuring iconic items like the SLUT, monorail and statue.
   */
  return (
    <ViroARScene style={styles.container}>
      <Viro360Image
        source={backgroundImage}
        onLoadEnd={_onBackgroundPhotoLoadEnd}
      />

      {/*
       * Display a spinner icon while the background image is being loaded.
       * Once loaded, hide spinner and show the Info UI Elements.
       */}
      <LoadingSpinner visible={!showSceneItems} position={[0, 0, -5]} />

      {_getInfoControls()}
    </ViroARScene>
  );
};

export default OfficeTourSplashScene;

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
