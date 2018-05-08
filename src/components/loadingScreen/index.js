import React, { Component } from 'react';
import { View, StatusBar, Dimensions, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Spinner from 'react-native-spinkit';

const { width, height } = Dimensions.get('window');
export default class Loading extends Component {
  render() {
    return (
      <View style={{
 height, width, alignItems: 'center', flex: 1, backgroundColor: '#fff',
}}
      >
        <StatusBar
          backgroundColor={EStyleSheet.value('$colorPrimary')}
          barStyle="dark-content"
        />
        <Spinner
          isVisible

          size={30}
          type="Wave"
          isVisible
          color={EStyleSheet.value('$colorPrimary')}
          style={{
           marginTop: height / 2,
        }}
        />
        <Text style={{ fontSize: 10, margin: 12 }}> Loading...</Text>


      </View>
    );
  }
}
