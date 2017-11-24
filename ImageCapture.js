'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
}                           from 'react-native';
import Camera               from 'react-native-camera';

import RNFetchBlob from 'react-native-fetch-blob'

export default class ImageCapture extends Component {
  static navigationOptions = {
    tabBarLabel: 'Camera',
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('../React-Native-Ski-Team/images/chat-icon.png')}
    //     style={[styles.icon, { tintColor: tintColor }]}
    //   />
    // )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style  = {styles.preview}
          aspect = {Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>&#128247;</Text>
        </Camera>
      </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log  (data))
      .catch(err   => console.error(err));
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});

AppRegistry.registerComponent('SkiApp', () => ImageCapture);