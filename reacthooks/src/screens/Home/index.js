import React, {Fragment} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Producers from './components/Producers';
import Top from './components/Top';

const Home = () => {
  return (
    <Fragment>
      <Producers top={Top}></Producers>
    </Fragment>
  );
};

export default Home;
