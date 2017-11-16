'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import Camera from 'react-native-camera';

import RNFetchBlob from 'react-native-fetch-blob'

export default class ImageCapture extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>&#128247;</Text>
                </Camera>
            </View>
        );
    }

    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({ metadata: options })
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }

    saveToCameraRoll = (image) => {
        if (Platform.OS === 'android') {
            RNFetchBlob
                .config({
                    fileCache: true,
                    appendExt: 'jpg'
                })
                .fetch('GET', image.urls.small)
                .then((res) => {
                    CameraRoll.saveToCameraRoll(res.path())
                        .then(Alert.alert('Success', 'Photo added to camera roll!'))
                        .catch(err => console.log('err:', err))
                })
        } else {
            CameraRoll.saveToCameraRoll(image.urls.small)
                .then(Alert.alert('Success', 'Photo added to camera roll!'))
        }
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