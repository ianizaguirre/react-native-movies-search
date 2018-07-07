import React, { Component } from 'react';

import { StyleSheet, View, TextInput } from 'react-native';

import Services from '../services';
import { PINK } from '../../styles';

export default class SearchBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    backgroundColor: PINK,
    marginTop: 50,
    marginRight: 20,
    borderRadius: 8
  }
});
