import React, {Fragment, useEffect, useState} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
// import {loadProducers} from '../../../services/loadingData';
import Card from './Card';
import useProducers from '../../../hooks/useProducers';

const Producers = ({top: Top}) => {
  const [title, list] = useProducers()

  const header = () => {
    return (
      <Fragment>
        <Top />
        <Text style={Styles.title}>{title}</Text>
      </Fragment>
    );
  };

  return (
    <FlatList
      data={list}
      renderItem={({item}) => <Card {...item}/> }
      keyExtractor={({name}) => name}
      ListHeaderComponent={header}/>
      
  );
};

const Styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
  flatlist: {},
});

export default Producers;
