import React, { Component } from 'react'
import Button from 'react-native-button'
import ModalDropdown from 'react-native-modal-dropdown'
import { Col, Row, Grid } from 'react-native-easy-grid'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native'
import styles from '../Styles/LineupFormStyles'

class LineupForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nLane: [1, 2, 3, 4, 5, 6],
      bibCol: ['Red', 'Green', 'Blue', 'White', 'Yellow', 'Black']
    }

    // Modal options
    this.bibOpt = ['Red', 'Green', 'Blue', 'White', 'Yellow', 'Black']
    this.laneOpt = [1, 2, 3, 4, 5, 6]

    // NOTE: fetch on iOS ONLY accepts https requests.
    // See : https://stackoverflow.com/questions/38418998/react-native-fetch-network-request-failed
    this.sAzureUrl = "https://sportstrackinglogger.azurewebsites.net/?"
  }

  /**
   * Loop through each item in state and create a string formatted correctly for Azure Func 
   */
  createUrlToPost() {
    var myString = ''

    for (var key in this.state.nLane) {
      // Get values in this.state object
      if (this.state.nLane.hasOwnProperty(key)) {
        var obj = this.state.bibCol[key]
        myString += 'laneID' + key + '=' + obj + '&'
      }
    }

    // Remove the final & from the end of the string
    var pos = myString.lastIndexOf('&')
    var newString = myString.substring(0, pos) + "" + myString.substring(pos + 1)
    console.log(newString)

    return newString
  }

  /** 
   * Is actually a GET operation, as that is what Azure Functions accept to post data 
   */
  postDataToAzureFuncAsync() {
    var _sAzureFuncParams = this.createUrlToPost()
    var _sAzureUrl = this.sAzureUrl + _sAzureFuncParams

    return fetch(_sAzureUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        return responseJson
      })
      .catch((error) => {
        console.error(error)
      })
  }

  /**
   *  NavBar at bottom of screen
   */
  // static navigationOptions = {
  //   tabBarLabel: 'FORMVAR',
  //   // tabBarIcon: ({ tintColor }) => (
  //   //   <Image
  //   //     source={require('../React-Native-Ski-Team/images/chat-icon.png')}
  //   //     style={[styles.icon, { tintColor: tintColor }]}
  //   //   />
  //   // )
  // }

  // Event Handlers
  // --------------------------------------------------
  _handleBtnPress() {
    //this.postDataToAzureFuncAsync()
    console.log(this.props)
  }

  /**
   * Stores bib color to a lane.
   * Removes current value from array, so that it does not appear when next button is selected.
   * @param {number} idx   - Index of currently selected item in array
   * @param {*}      value - Currently selected item in array
   */
  _handleBibSelect(idx, value, nLane) {
    this.state.bibCol[nLane - 1] = value
    this.state.nLane[nLane - 1] = nLane
    this.bibOpt.splice(idx, 1)
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Grid>
        {/* --------- Column------------- */}
        <Col size={60} style={styles.columnLeft} >
          <View style={styles.imageView}>
            <Image source={require('../images/StartLineImg.jpg')}
              style={styles.image}
            />
          </View>
          <Row>
            <Col style={styles.modalCol}>
              <ModalDropdown
                defaultValue="LISTVAR"
                onSelect={(idx, value) => this._handleBibSelect(idx, value, 1)}
                options={this.bibOpt}
                dropdownStyle={styles.dropdown}
                textStyle={styles.modalText}
                style={styles.modalLeft}
                dropdownTextStyle={styles.dropdownText}
              />
            </Col>
            <Col style={styles.modalCol}>
              <ModalDropdown
                defaultValue="LISTVAR"
                onSelect={(idx, value) => this._handleBibSelect(idx, value, 2)}
                options={this.bibOpt}
                dropdownStyle={styles.dropdown}
                textStyle={styles.modalText}
                style={styles.modalLeft}
                dropdownTextStyle={styles.dropdownText}
              />
            </Col>
            <Col style={styles.modalCol}>
              <ModalDropdown
                defaultValue="LISTVAR"
                onSelect={(idx, value) => this._handleBibSelect(idx, value, 3)}
                options={this.bibOpt}
                dropdownStyle={styles.dropdown}
                textStyle={styles.modalText}
                style={styles.modalLeft}
                dropdownTextStyle={styles.dropdownText}
              />
            </Col>
            <Col style={styles.modalCol}>
              <ModalDropdown
                defaultValue="LISTVAR"
                onSelect={(idx, value) => this._handleBibSelect(idx, value, 4)}
                options={this.bibOpt}
                dropdownStyle={styles.dropdown}
                textStyle={styles.modalText}
                style={styles.modalLeft}
                dropdownTextStyle={styles.dropdownText}
              />
            </Col>
            <Col style={styles.modalCol}>
              <ModalDropdown
                defaultValue="LISTVAR"
                onSelect={(idx, value) => this._handleBibSelect(idx, value, 5)}
                options={this.bibOpt}
                dropdownStyle={styles.dropdown}
                textStyle={styles.modalText}
                style={styles.modalLeft}
                dropdownTextStyle={styles.dropdownText}
              />
            </Col>
            <Col style={styles.modalCol}>
              <ModalDropdown
                defaultValue="LISTVAR"
                onSelect={(idx, value) => this._handleBibSelect(idx, value, 6)}
                options={this.bibOpt}
                dropdownStyle={styles.dropdown}
                textStyle={styles.modalText}
                style={styles.modalLeft}
                dropdownTextStyle={styles.dropdownText}
              />
            </Col>
          </Row>
        </Col>
        {/* --------- Column------------- */}
        <Col size={35}>
          <Row style={styles.titleRow}>
            <View>
              <Text style={styles.title}>
                FORMVAR
                        </Text>
            </View>
          </Row>
          <Row>
            <Col style={styles.modalCol}>
              <ModalDropdown
                defaultValue="Race: R9999"
                onSelect={(idx, value) => this._handleLaneSelect(idx, value)}
                options={this.laneOpt}
                dropdownStyle={styles.dropdown}
                textStyle={styles.dropdownText}
                style={styles.modalRight}
                dropdownTextStyle={styles.dropdownText}
              />
            </Col>
            <Col style={styles.modalCol}>
              <ModalDropdown
                defaultValue="Phase: Heat1"
                onSelect={(idx, value) => this._handleLaneSelect(idx, value)}
                options={this.laneOpt}
                dropdownStyle={styles.dropdown}
                textStyle={styles.dropdownText}
                style={styles.modalRight}
                dropdownTextStyle={styles.dropdownText}
              />
            </Col>
          </Row>
          <Row style={styles.cameraRow}>
            <View style={styles.cameraView}>
              <Button onPress={() => navigate('ImageCapture')}>
                <Image source={require('../images/CameraIcon.png')}
                  style={styles.cameraImage} />
              </Button>
            </View>
          </Row>
          <Row style={styles.goRow}>
            <View style={styles.goView}>
              <Button
                containerStyle={styles.goButton}
                style={{ fontSize: 24, color: 'white' }}
                onPress={() => this._handleBtnPress()} >
                GO
                </Button>
            </View>
          </Row>
        </Col>
      </Grid>
    )
  }
}

export default LineupForm