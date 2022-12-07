import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import logo from '../../../assets/logo.png';

import {loadTop} from '../../../services/loadingData';

class Top extends React.Component {
    state = {
        top: {
            welcome: '',
            subtitle: '',
        }
    }

  updateTop() {
    const result = loadTop();
    this.setState({
        top: result,
    })
    console.log(result);
  }

  componentDidMount() {
    this.updateTop();
  }

  render() {
    return (
      <View style={Styles.head}>
        <Image source={logo} style={Styles.logo}></Image>
        <Text style={Styles.welcome}>{this.state.top.welcome}</Text>
        <Text style={Styles.subtitle}>{this.state.top.subtitle}</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  head: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  logo: {
    width: 70,
    height: 28,
  },
  welcome: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646'
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
    color: '#a3a3a3'
  },
});

export default Top;
