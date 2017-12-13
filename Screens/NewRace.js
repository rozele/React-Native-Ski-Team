import React, { Component } from 'react'
import {
  Button,
  Dimensions,
  Picker,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

class NewRace extends Component {
  static navigationOptions = {
    title: 'New Race'
  }

  onLayeout(e) {
    const { width, height } = Dimensions.get('window')
    console.log(width, height)
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View
        onLayout={this.onLayout}
        style={styles.container}
        >
        <View style={styles.row}>
          <Text style={styles.text}>Race Codex:</Text>
          <TextInput
            style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Gender:</Text>
          <Picker
            style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Temp:</Text>
          <TextInput
            style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Precip:</Text>
          <Picker
            style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Course:</Text>
          <TextInput
            style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Racers:</Text>
          <Picker
            style={styles.input}
          />
      </View>
      <Button
        onPress={() =>
          navigate('PositionSelector')
        }
        style={styles.button}
        title='Position >'
        />
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 20,
    textAlign: 'left',
    padding: 30
  },
  input: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
})

export default NewRace