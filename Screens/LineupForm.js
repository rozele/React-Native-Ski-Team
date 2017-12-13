import React, { Component } from 'react'
import {
  Button,
  Picker,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

class LineupForm extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  })

  constructor(props) {
    super(props)

    propState = props.navigation.state.params.props
    this.state = {
      codex:         propState.codex,
      gender:        propState.gender,
      temperature:   propState.temperature,
      precipitation: propState.precipitation,
      course:        propState.course,
      racers:        propState.racers,
      position:      propState.position,
      images: [],
      lane1: '',
      lane2: '',
      lane3: '',
      lane4: '',
      lane5: '',
      lane6: '',
    }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Text style={styles.imageText}>
            Use the camera to capture images
          </Text>
        </View>
        <Button
          onPress={() =>
            navigate('ImageCapture')
          }
          style={styles.button}
          title='Camera'
        />
        <View style={styles.row}>
          <Text style={styles.text}>
            Lane 1:
          </Text>
          <Picker style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>
            Lane 2:
          </Text>
          <Picker style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>
            Lane 3:
          </Text>
          <Picker style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>
            Lane 4:
          </Text>
          <Picker style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>
            Lane 5:
          </Text>
          <Picker style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>
            Lane 6:
          </Text>
          <Picker style={styles.input}
          />
        </View>
        <Button
          onPress={() =>
            console.log(this.state)
          }
          style={styles.button}
          title='Submit'
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
  imageView: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
  },
  text: {
    flex: 1,
    fontSize: 20,
    textAlign: 'left',
    padding: 30,
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

export default LineupForm