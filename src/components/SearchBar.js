import React, { Component } from 'react';

import { StyleSheet, View, TextInput } from 'react-native';

import Services from '../services';

import { PINK } from '../../styles';

export default class SearchBar extends Component {
  state = {
    value: ''
  };

  onChange = text => {
    // this.setState(state => ({ value: text }));
    this.setState({ value: text });
  };

  onSubmit = () => {
    // call api
    console.log('call search api');
    Services.getSearchResults(this.state.value).then(respose => console.log(response));
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          value={this.state.value}
          onChangeText={this.onChange}
          onSubmitEditing={this.onSubmit}
        />
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
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center'
  },
  textinput: {
    fontSize: 16,
    color: '#fff'
  }
});
