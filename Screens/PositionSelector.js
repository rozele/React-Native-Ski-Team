import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
}                           from 'react-native'

class PositionSelector extends Component {
  static navigationOptions = {
    title: 'Position Selector'
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Button
            onPress={() =>
              navigate('LineupForm', { title: 'Start Gate' })
            }
            style={styles.button}
            title='Start Gate'
            />
        </View>
        <View style={styles.row}>
          <Button
            onPress={() =>
              navigate('LineupForm', { title: 'Split' })
            }
            style={styles.button}
            title='Split'
            />
        </View>
        <View style={styles.row}>
          <Button
            onPress={() =>
              navigate('LineupForm', { title: 'Hole' })
            }
            style={styles.button}
            title='Hole'
            />
        </View>
        <View style={styles.row}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    flex: 1,
  }
})

export default PositionSelector