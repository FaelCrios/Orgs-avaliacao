import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import star from '../../assets/estrela.png';
import greyStar from '../../assets/estrelaCinza.png';

const Star = ({onPress, disable = true, full, big = false}) => {
  const Styles = StylesFunction(big);
  const getImage = () => {
    if (full) {
      return star;
    }
    return greyStar;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disable}>
      <Image source={getImage()} style={Styles.star} />
    </TouchableOpacity>
  );
};

const StylesFunction = big =>
  StyleSheet.create({
    star: {
      width: big ? 24 : 12,
      height: big ? 24 : 12,
      marginRight: 2,
    },
  });

export default Star;
