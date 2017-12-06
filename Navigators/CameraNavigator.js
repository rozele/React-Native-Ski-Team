import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { StackNavigator }   from 'react-navigation'
import FormNavigator        from './FormNavigator'
import ImageCapture         from '../Screens/ImageCapture'

const CameraNavigator = StackNavigator({
    FormNavigator: {
      screen: FormNavigator
    },
    ImageCapture: {
      screen: ImageCapture,
      navigationOptions: (props) => ({
        title: "Image Capture",
      })
    }
  })

export default CameraNavigator
