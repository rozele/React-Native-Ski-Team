import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Camera from 'react-native-camera'

class ImageCapture extends Component {
  state = {
    images: []
  }

  static navigationOptions = {
    title: 'Camera'
  }

  takePicture() {
    const options = {}
    this.camera.capture({ metadata: options })
      .then((data) => {
        console.log('image captured')
        console.log('data: ', data)

        this.setState({
          images: [...this.state.images,
                    {
                      key: this.state.images.length,
                      source: data.mediaUri,
                    }
                  ]
        })
        console.log('captured images:', this.state.images)
      })
      .catch(err => console.error(err))
  }

  render() {
    const { goBack } = this.props.navigation
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={
            this.takePicture.bind(this)}
            >
            Capture
          </Text>
          {/* <Text style={styles.capture} onPress={() =>
            goBack(null)}
            >
            Back
          </Text> */}
        </Camera>
      </View>
    )
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
})

export default ImageCapture
