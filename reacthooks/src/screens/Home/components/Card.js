import React, {useReducer, useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Stars from '../../../assets/components/Stars';

const Card = ({name, image, distance, rating}) => {
  //const [select, setSelect] = useState(false);

  const [select, inverter ] = useReducer(
    (select) => !select,
    false
  )
  return (
    <TouchableOpacity style={Styles.card} onPress={inverter}>
      <Image source={image} accessibilityLabel={name} style={Styles.logo} />
      <View style={Styles.info}>
        <View>
          <Text style={Styles.name}>{name}</Text>
          <Stars quantity={rating} editable={select} big={select} />
        </View>
        <Text style={Styles.distance}>{distance}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  card: {
    backgroundColor: '#f6f6f5',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 30,
    flexDirection: 'row',
    elevation: 10,
  },
  logo: {
    height: 64,
    width: 64,
    borderRadius: 30,
    marginRight: 20,
    marginLeft: 10,
    marginVertical: 12,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 22,
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
  },
});

export default Card;
