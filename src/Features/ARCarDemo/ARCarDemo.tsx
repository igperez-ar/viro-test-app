import React, {useEffect, useState} from 'react';

import {
  ViroARScene,
  ViroMaterials,
  ViroNode,
  ViroAnimations,
  Viro3DObject,
  ViroLightingEnvironment,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroSphere,
  ViroSpotLight,
  ViroQuad,
} from '@viro-community/react-viro';

const ARCarDemo: React.FC = ({}) => {
  const [texture, setTexture] = useState('white');
  const [playAnim, setPlayAnim] = useState(false);
  const [animateCar, setAnimateCar] = useState(false);
  const [animName, setAnimName] = useState("");
  const [tapWhite, setTapWhite] = useState(false);
  const [tapBlue, setTapBlue] = useState(false);
  const [tapGrey, setTapGrey] = useState(false);
  const [tapRed, setTapRed] = useState(false);
  const [tapYellow, setTapYellow] = useState(false);

  ViroMaterials.createMaterials({
    white: {
      lightingModel: 'PBR',
      diffuseTexture: require('./res/tesla/object_car_main_Base_Color.png'),
      metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
      roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
    },
    blue: {
      lightingModel: 'PBR',
      diffuseTexture: require('./res/tesla/object_car_main_Base_Color_blue.png'),
      metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
      roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
    },
    grey: {
      lightingModel: 'PBR',
      diffuseTexture: require('./res/tesla/object_car_main_Base_Color_grey.png'),
      metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
      roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
    },
    red: {
      lightingModel: 'PBR',
      diffuseTexture: require('./res/tesla/object_car_main_Base_Color_red.png'),
      metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
      roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
    },
    yellow: {
      lightingModel: 'PBR',
      diffuseTexture: require('./res/tesla/object_car_main_Base_Color_yellow.png'),
      metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
      roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
    },
    white_sphere: {
      lightingModel: 'PBR',
      diffuseColor: 'rgb(231,231,231)',
    },
    blue_sphere: {
      lightingModel: 'PBR',
      diffuseColor: 'rgb(19,42,143)',
    },
    grey_sphere: {
      lightingModel: 'PBR',
      diffuseColor: 'rgb(75,76,79)',
    },
    red_sphere: {
      lightingModel: 'PBR',
      diffuseColor: 'rgb(168,0,0)',
    },
    yellow_sphere: {
      lightingModel: 'PBR',
      diffuseColor: 'rgb(200,142,31)',
    },
  });

  ViroARTrackingTargets.createTargets({
    logo: {
      source: require('./res/logo.png'),
      orientation: 'Up',
      physicalWidth: 0.165, // real world width in meters
    },
  });

  ViroAnimations.registerAnimations({
    scaleUp: {
      properties: {scaleX: 1, scaleY: 1, scaleZ: 1},
      duration: 500,
      easing: 'bounce',
    },
    scaleDown: {properties: {scaleX: 0, scaleY: 0, scaleZ: 0}, duration: 200},
    scaleCar: {
      properties: {scaleX: 0.09, scaleY: 0.09, scaleZ: 0.09},
      duration: 500,
      easing: 'bounce',
    },
    scaleSphereUp: {
      properties: {scaleX: 0.8, scaleY: 0.8, scaleZ: 0.8},
      duration: 50,
      easing: 'easeineaseout',
    },
    scaleSphereDown: {
      properties: {scaleX: 1, scaleY: 1, scaleZ: 1},
      duration: 50,
      easing: 'easeineaseout',
    },
    tapAnimation: [['scaleSphereUp', 'scaleSphereDown']],
  });
  useEffect(() => {
  }, []);

  const _onAnchorFound = () => setAnimateCar(true);

  const _toggleButtons = () => {
    setAnimName(animName == 'scaleUp' ? 'scaleDown' : 'scaleUp');
    setPlayAnim(true);
  };

  const _selectWhite = () => {
    setTexture('white');
    setTapWhite(true);
  };

  const _selectBlue = () => {
    setTexture('blue');
    setTapBlue(true);
  };

  const _selectGrey = () => {
    setTexture('grey');
    setTapGrey(true);
  };

  const _selectRed = () => {
    setTexture('red');
    setTapRed(true);
  };

  const _selectYellow = () => {
    setTexture('yellow');
    setTapYellow(true);
  };

  const _animateFinished = () => {
    setTapBlue(false);
    setTapGrey(false);
    setTapRed(false);
    setTapYellow(false);
    setTapWhite(false);
  };

  return (
    <ViroARScene>
      <ViroLightingEnvironment source={require('./res/tesla/garage_1k.hdr')} />

      <ViroARImageMarker
        target={'logo'}
        onAnchorFound={_onAnchorFound}
        onAnchorUpdated={() => console.log("Anchor updated")}
        onDrag={() => console.log("Dragging")}
        >
        <ViroNode
          scale={[0, 0, 0]}
          onAnchorFound={() => console.log("Node anchor found")}
          onDrag={() => console.log("Node Drag")}
          transformBehaviors={['billboardY']}
          animation={{name: animName, run: playAnim}}>
          <ViroSphere
            materials={['white_sphere']}
            heightSegmentCount={20}
            widthSegmentCount={20}
            radius={0.03}
            position={[-0.2, 0.25, 0]}
            onClick={_selectWhite}
            animation={{
              name: 'tapAnimation',
              run: tapWhite,
              onFinish: _animateFinished,
            }}
            shadowCastingBitMask={0}
          />

          <ViroSphere
            materials={['blue_sphere']}
            heightSegmentCount={20}
            widthSegmentCount={20}
            radius={0.03}
            position={[-0.1, 0.25, 0]}
            onClick={_selectBlue}
            animation={{
              name: 'tapAnimation',
              run: tapBlue,
              onFinish: _animateFinished,
            }}
            shadowCastingBitMask={0}
          />

          <ViroSphere
            materials={['grey_sphere']}
            heightSegmentCount={20}
            widthSegmentCount={20}
            radius={0.03}
            position={[0, 0.25, 0]}
            onClick={_selectGrey}
            animation={{
              name: 'tapAnimation',
              run: tapGrey,
              onFinish: _animateFinished,
            }}
            shadowCastingBitMask={0}
          />

          <ViroSphere
            materials={['red_sphere']}
            heightSegmentCount={20}
            widthSegmentCount={20}
            radius={0.03}
            position={[0.1, 0.25, 0]}
            onClick={_selectRed}
            animation={{
              name: 'tapAnimation',
              run: tapRed,
              onFinish: _animateFinished,
            }}
            shadowCastingBitMask={0}
          />

          <ViroSphere
            materials={['yellow_sphere']}
            heightSegmentCount={20}
            widthSegmentCount={20}
            radius={0.03}
            position={[0.2, 0.25, 0]}
            onClick={_selectYellow}
            animation={{
              name: 'tapAnimation',
              run: tapYellow,
              onFinish: _animateFinished,
            }}
            shadowCastingBitMask={0}
          />
        </ViroNode>

        <Viro3DObject
          scale={[0, 0, 0]}
          source={require('./res/tesla/object_car.obj')}
          resources={[require('./res/tesla/object_car.mtl')]}
          type="OBJ"
          materials={texture}
          onClick={_toggleButtons}
          animation={{name: 'scaleCar', run: animateCar}}
        />

        <ViroSpotLight
          innerAngle={5}
          outerAngle={25}
          direction={[0, -1, 0]}
          position={[0, 5, 1]}
          color="#ffffff"
          castsShadow={true}
          shadowMapSize={2048}
          shadowNearZ={2}
          shadowFarZ={7}
          shadowOpacity={0.7}
        />

        <ViroQuad
          rotation={[-90, 0, 0]}
          position={[0, -0.001, 0]}
          width={2.5}
          height={2.5}
          arShadowReceiver={true}
        />
      </ViroARImageMarker>
    </ViroARScene>
  );
};

export default ARCarDemo;
