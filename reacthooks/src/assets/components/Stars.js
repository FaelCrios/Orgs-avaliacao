import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Star from './Star';

const Stars = ({quantity: oldQuantity, editable = false, big = false}) => {
  const [quantity, setQuantify] = useState(oldQuantity);

  const StarRenders = () => {
    const starList = [];
    for (let i = 0; i < 5; i++) {
      starList.push(
        <Star
          onPress={() => setQuantify(i + 1)}
          disable={!editable}
          full={i < quantity}
          big={big}
          key={i}
        />,
      );
    }
    return starList;
  };

  return (
    <>
      <View style={Styles.stars}>
        <StarRenders />
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
  },
});

export default Stars;
