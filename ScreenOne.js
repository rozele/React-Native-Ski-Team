import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';

import Gallery from 'react-native-image-gallery';

import styles from './styles';

class ScreenOne extends Component {
  static navigationOptions = {
    title: 'Welcome',
    tabBarLabel: 'ScreenOne',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../React-Native-Ski-Team/images/notification-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  }

//   <TouchableHighlight
//   onPress={() => navigate('ScreenTwo')}
//   style={[styles.button, {backgroundColor: '#7567B1'}]}>
//   <Text style={styles.buttonText}> Go To Screen Two </Text>
// </TouchableHighlight>

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>


        <Gallery
        style={{ flex: 1, backgroundColor: 'black' }}
        images={[
          { source: require('./images/broadchurch_thumbnail.png'), dimensions: { width: 150, height: 150 } },
          { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
          { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
          { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
          { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
        ]}
      />
      </View>
    );
  }
}

export default ScreenOne;