import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { StackNavigator }   from 'react-navigation'
import ImageCapture         from '../Screens/ImageCapture'
import LineupForm           from '../Screens/LineupForm'
import NewRace              from '../Screens/NewRace'

const AppNavigator = StackNavigator({
  NewRace: {
    screen: NewRace
  },
  LineupForm: {
    screen: LineupForm
  },
  ImageCapture: {
    screen: ImageCapture,
  }
}, 
// {
//   headerMode: 'none'
// }
)

export default AppNavigator
