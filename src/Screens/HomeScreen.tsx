import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, FlatList, View} from 'react-native';

const buttons = [
  {
    key: '1',
    title: 'Galería',
    route: 'GALLERY',
  },
  {
    key: '2',
    title: 'Imagen 360',
    route: 'IMAGE360',
  },
  {
    key: '3',
    title: 'Tour',
    route: '360TOUR',
  },
  {
    key: '4',
    title: 'Portal',
    route: 'PORTAL',
  },
  {
    key: '5',
    title: 'Partículas',
    route: 'PARTICLES',
  },
  {
    key: '6',
    title: 'Car',
    route: 'CAR',
  },
  {
    key: '7',
    title: 'Marcadores',
    route: 'MARKER',
  },
  {
    key: '8',
    title: 'Iconos',
    route: 'ICONS',
  },
];

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Text style={{color: 'black', fontSize: 25, marginBottom: 20}}>
        Home Screen
      </Text> */}
      <FlatList
        style={{width: '100%'}}
        contentContainerStyle={{padding: 10}}
        data={buttons}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <View style={{marginVertical: 5}}>
            <Button
              title={item.title}
              onPress={() => navigation.navigate(item.route)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
