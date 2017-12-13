import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

class LineupForm extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  });
}