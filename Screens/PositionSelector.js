import React, { Component } from 'react'
import {
  Button,
  Text,
  TouchableHighlight,
  View
}                           from 'react-native'
import styles               from './../Styles/PositionSelectorStyles'

class PositionSelector extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Button
            onPress={() =>
              navigate('LineupForm', { title: 'Start Gate' })
            }
            style={styles.button}
            title='Start Gate'
            color="#841584"
            />
        </View>
        <View style={styles.box}>
          <Button
            onPress={() =>
              navigate('LineupForm', { title: 'Split' })
            }
            style={styles.button}
            title='Split'
            />
        </View>
        <View style={styles.box}>
          <Button
            onPress={() =>
              navigate('LineupForm', { title: 'Hole' })
            }
            style={styles.button}
            title='Hole'
            color="#841584"
            />
        </View>
        <View style={styles.box}>
          <Button
            onPress={() =>
              navigate('LineupForm', { title: 'Finish' })
            }
            style={styles.button}
            title='Finish'
            />
        </View>
      </View>
    )
  }
}

export default PositionSelector