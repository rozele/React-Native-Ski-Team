import React from 'react'

import {
  View,
  Text,
  Button,
  Image,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  ScrollView,
  CameraRoll,
  TouchableHighlight,
  Platform,
  Alert
} from 'react-native'

import RNFetchBlob from 'react-native-fetch-blob'

const { width, height } = Dimensions.get('window')

class ImageBrowser extends React.Component {
  static navigationOptions = {
    title: 'Image Browser',
  }

  state = {
    images: [],
    loading: false,
    page: 1
  }

  fetchPhotos = () => {
    console.log('props: ', this.props.navigation.state.params.images)    
    this.setState({images: this.props.navigation.state.params.images})
  }

  render() {
    if (this.state.images.length < 1) {
      return (
        <View style={{flex: 1}}>
          {
            this.state.loading ? (
              <Text style={{ padding: 10, textAlign: 'center' }}>Loading...</Text>
            ) : (
              <Button
                onPress={this.fetchPhotos}
                title='View More'
              />
            )
          }
        </View>
      )
    }
    else {
      return (
        <View style={{flex: 1}}>
          {
            this.state.loading ? (
              <Text style={{ padding: 10, textAlign: 'center' }}>Loading...</Text>
            ) : (
              <Button
                onPress={this.fetchPhotos}
                title='View More'
              />
            )
          }
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {
              this.state.images.map((image, i) => {
                return (
                  <Image
                    style={styles.image}
                    source={{ uri: image.source }}
                  />
                )
              })
            }
          </ScrollView>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  centerLoader: {
    height: height - 100,
    width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: width / 2, height: width / 2
  },
  title: {
    textAlign: 'center',
    padding: 20
  }
})

export default ImageBrowser