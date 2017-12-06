import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation'
import ImageCapture from '../Screens/ImageCapture';
import ImageBrowser from '../Screens/ImageBrowser';

const ImageNavigator = StackNavigator({
    ImageCapture: {
        screen: ImageCapture,
        navigationOptions:({navigation}) => ({
            title: "Image Capture",
        })
    },
    ImageBrowser: {
        screen: ImageBrowser,
        navigationOptions: (props) => ({
            title: "Image Browser",
        })
    }
})

export default ImageNavigator;
