import React from 'react';
import {StyleSheet} from 'react-native';

import {
  ViroNode,
  ViroSpinner,
  ViroText,
  ViroUtils,
} from '@viro-community/react-viro';

let polarToCartesian = ViroUtils.polarToCartesian;

/**
 * Render a simple custom control that groups together a ViroSpinner and text.
 */
const LoadingSpinner: React.FC<any> = (props: any) => {
  var spinnerPosition = polarToCartesian([0, 0, 0]);
  var textPosition = polarToCartesian([1, -25, -40]);

  return (
    <ViroNode {...props}>
      {/* NOTE: Additional layer of ViroNode is placed to get around a temporary billboarding bug */}
      <ViroNode
        position={polarToCartesian([0, 0, 0])}
        transformBehaviors={['billboard']}>
        <ViroSpinner
          position={spinnerPosition}
          scale={[0.7, 0.7, 0.1]}
          spinnerType="dark"
        />
        <ViroText
          style={styles.spinnerTextStyle}
          position={textPosition}
          text="Loading ...."
        />
      </ViroNode>
    </ViroNode>
  );
};

export default LoadingSpinner;

/**
 * Declare the spinner's text font family, size and color in terms of
 * a spinnerTextStyle.
 */
var styles = StyleSheet.create({
  spinnerTextStyle: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 70,
    color: '#FFFFFF',
  },
});
