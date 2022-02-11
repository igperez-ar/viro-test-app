import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroImage,
  ViroARImageMarker,
  Viro360Image,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('Hello World!');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <Viro360Image
        source={require('assets/images/360.jpg')}
        /* rotation={[0, 45, 0]}
        format="RGBA8"
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError} */
      />
      {/* <ViroImage
        position={[-5, 0, -7]}
        rotation={[0, 10, 0]}
        height={2} 
        width={2}
        source={require('./assets/images/target.jpeg')}
      />
      <ViroImage
        position={[-2.5, 0, -7]}
        rotation={[0, 5, 0]}
        height={2} 
        width={2}
        source={require('./assets/images/target.jpeg')}
      />
      <ViroImage
        position={[0, 0, -7]}
        height={2} 
        width={2}
        source={require('./assets/images/target.jpeg')}
      />
      <ViroImage
        position={[2.5, 0, -7]}
        rotation={[0, -5, 0]}
        height={2} 
        width={2}
        source={require('./assets/images/target.jpeg')}
      />
      <ViroImage
        position={[5, 0, -7]}
        rotation={[0, -10, 0]}
        height={2} 
        width={2}
        source={require('./assets/images/target.jpeg')}
      /> */}
      {/* <ViroARImageMarker target={"targetOne"}>
        <ViroImage
          position={[0, 0, 0]}
          rotation={[-90, 0, 0]}
          height={20} 
          width={20}
          source={require('./assets/images/target.jpeg')}
        />
      </ViroARImageMarker> */}
      {/* <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      /> */}
    </ViroARScene>
  );
};

const ViroScreen: React.FC = () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};
export default ViroScreen;

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
