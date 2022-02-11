import React, {useEffect, useState} from 'react';

import {ViroImage, ViroNode, ViroAnimations} from '@viro-community/react-viro';

/**
 * Pull in all the images needed for this control.
 */
var infoIconImage = require('../res/icon_info.png');

/**
 * Tags for referencing the animation component views used to execute animations on
 * our Icon Card and our Content Card views.
 */
var CONTENT_CARD_REF = 'contentCard';
var ICON_CARD_REF = 'iconCard';

/**
 * Custom control that toggles between two viro images: an Icon Card and a Content Card.
 * This control can be given a reference to the required('./image') content to be displayed,
 * and as well as the size it should be scaled to. Note that the Icon Card is displayed by default.
 *
 * Accepted propTypes:
 * @content - Reference to the require('./image') content to displayed upon clicking of the Icon Card.
 * @contentCardScale - The size of the Content Card that it should be animated to.
 */

const InfoElement: React.FC<any> = (props) => {
  const [iconCardAnimation, setIconCardAnimation] = useState('showIconAnim');
  const [contentCardAnimation, setContentCardAnimation] = useState('hideAnim');
  const [runInfoCardAnimation, setRunInfoCardAnimation] = useState(false);
  const [runIconCardAnimation, setRunIconCardAnimation] = useState(false);

  useEffect(() => {
    ViroAnimations.registerAnimations({
      hideAnim: {
        properties: {scaleX: 0.1, scaleY: 0.1, scaleZ: 0.1, opacity: 0.0},
        easing: 'Bounce',
        duration: 100,
      },
      showContentCardAnim: {
        properties: {scaleX: 1, scaleY: 1, scaleZ: 1, opacity: 1.0},
        easing: 'PowerDecel',
        duration: 150,
      },
      showIconAnim: {
        properties: {scaleX: 0.5, scaleY: 0.5, scaleZ: 0.5, opacity: 1.0},
        easing: 'PowerDecel',
        duration: 150,
      },
    });
  }, []);

  /**
   * Attached callback to the onClick event of this control. We then
   * animate in / out either the Icon or Content card correspondingly.
   */
  const _onCardClick = () => {
    var showContentCard = contentCardAnimation == 'hideAnim';
    if (showContentCard) {
      _animateIconCard(!showContentCard);
    } else {
      _animateContentCard(showContentCard);
    }
  };

  /**
   * Show and hide animations for both the Icon and Content Card in this control.
   */
  const _animateIconCard = (isVisible: Boolean) => {
    setIconCardAnimation(isVisible ? 'showIconAnim' : 'hideAnim');
    setRunIconCardAnimation(true);
  };

  const _animateContentCard = (isVisible: Boolean) => {
    setContentCardAnimation(isVisible ? 'showContentCardAnim' : 'hideAnim');
    setRunInfoCardAnimation(true);
  };

  /**
   * Animation callbacks for displaying either the Content
   * card after hiding the Icon card and vice versa.
   */
  const _animateIconCardFinished = () => {
    if (iconCardAnimation == 'hideAnim') {
      _animateContentCard(true);
    }
  };

  const _animateContentCardFinished = () => {
    if (contentCardAnimation == 'hideAnim') {
      _animateIconCard(true);
    }
  };

  /**
   * Displays either an Icon Card or a Content Card. The Icon Card is displayed by default
   * until the user does click it (_onCardClick). We then animate the Icon Card out, and the Content
   * Card in, and vice versa if the user clicks on it again.
   */
  return (
    <ViroNode onClick={_onCardClick} {...props}>
      {/* Info Card */}
      <ViroImage
        transformBehaviors={['billboard']}
        width={1}
        height={1}
        opacity={1.0}
        scale={[0.5, 0.5, 0.5]}
        source={infoIconImage}
        animation={{
          name: iconCardAnimation,
          run: runIconCardAnimation,
          loop: false,
          onFinish: _animateIconCardFinished,
        }}
      />

      {/* Content Card*/}
      <ViroNode
        scale={[
          props.contentCardScale[0],
          props.contentCardScale[1],
          props.contentCardScale[2],
        ]}
        transformBehaviors={['billboard']}>
        <ViroImage
          width={1}
          height={1}
          opacity={0.0}
          scale={[0.1, 0.1, 0.1]}
          source={props.content}
          animation={{
            name: contentCardAnimation,
            run: runInfoCardAnimation,
            loop: false,
            onFinish: _animateContentCardFinished,
          }}
        />
      </ViroNode>
    </ViroNode>
  );
};

export default InfoElement;
