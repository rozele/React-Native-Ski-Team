import React, { Component } from 'react'
import Button               from 'react-native-button'
import ModalDropdown        from 'react-native-modal-dropdown'
import { Col, Row, Grid }   from 'react-native-easy-grid'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  TextInput,
  View,
  Image,
  ScrollView
}                           from 'react-native'
import styles               from './../Styles/NewRaceStyles'

class NewRace extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sCodex : 'R9999',
      sGender: 'Male',
      nTemp  : 0,
      sPrecip: 'Light Snow',
      sResort: 'Copper Mountain',
      nRacers: 0
    }

    // Modal options
    this.bibOpt    = ['Red', 'Green', 'Blue', 'Purple', 'Orange', 'Yellow', 'Black']
    this.precipOpt = ['None', 'Light-Snow', 'Heavy-Snow', 'Rain']
    this.genderOpt = ['Male', 'Female']
    this.laneOpt   = [1, 2, 3, 4, 5, 6]
    this.racersOpt = [1, 2, 3, 4, 5, 6]

    // NOTE: fetch on iOS ONLY accepts https requests.
    // See : https://stackoverflow.com/questions/38418998/react-native-fetch-network-request-failed
    this.sAzureUrl = "https://sportstrackinglogger.azurewebsites.net/?"
  }

  /**
   * Loop through each item in state and create a string formatted correctly for Azure Func 
   */
  createUrlToPost() {
    var myString = ''
    for (var key in this.state) {
      // Get values in this.state object
      if (this.state.hasOwnProperty(key)) {
        var obj = this.state[key]
        // Build the string for param urls
        myString += key + '=' + obj + '&'

        console.log("obj: " + obj)
        console.log("key: " + key)
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
  static navigationOptions = {
    tabBarLabel: 'New Race',
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('../React-Native-Ski-Team/images/chat-icon.png')}
    //     style={[styles.icon, { tintColor: tintColor }]}
    //   />
    // )
  }

  // Event Handlers
  // --------------------------------------------------
  _handleBtnPress() {
    // this.postDataToAzureFuncAsync()
    const { navigate } = this.props.navigation
    navigate('PositionSelector')
  }

  _handleSelection(idx, value, params) {
    switch (params) {
      case 'codex':
        this.state.sCodex = value
        console.log('Codex selected ' + this.state.sCodex)
      case 'gender':
        this.state.sGender = value
        console.log('Gender selected ' + this.state.sGender)
        break
      case 'precip':
        this.state.sPrecip = value
        console.log('Precip selected ' + this.state.sPrecip)
        break
      case 'racers':
        this.state.nRacers = value
        console.log('# of racers selected ' + this.state.nRacers)
    }
    console.log(params)
  }


  render() {
    return (
      <Grid>

        {/* --------- Column------------- */}
        <Col>
          <View style={styles.formLeft}>
            <Text style={styles.textBox}>
              Race Codex:
                    </Text>
          </View>
          <View style={styles.formLeft}>
            <Text style={styles.textBox}>
              Gender:
                    </Text>
          </View>
          <View style={styles.formLeft}>
            <Text style={styles.textBox}>
              Temp:
                    </Text>
          </View>
          <View style={styles.formLeft}>
            <Text style={styles.textBox}>
              Precip:
                    </Text>
          </View>
          <View style={styles.formLeft}>
            <Text style={styles.textBox}>
              Resort:
                    </Text>
          </View>
          <View style={styles.formLeft}>
            <Text style={styles.textBox}>
              Racers:
                    </Text>
          </View>
        </Col>

        {/* --------- Column------------- */}
        <Col>
          <TextInput
            style={styles.formRight}
            placeholder=" R9998"
            onChangeText={(sCodex) => this.setState({ sCodex })}
          />
          <ModalDropdown
            defaultValue="Male"
            onSelect={(idx, value) => this._handleSelection(idx, value, 'gender')}
            options={this.genderOpt}
            dropdownStyle={styles.dropdown}
            textStyle={styles.textBox}
            style={styles.formRight}
            dropdownTextStyle={styles.modalText}
          />
          <TextInput
            style={styles.formRight}
            placeholder=" 0 C"
            onChangeText={(temp) => this.setState({ temp })}
          />
          <ModalDropdown
            defaultValue="Light Snow"
            onSelect={(idx, value) => this._handleSelection(idx, value, 'precip')}
            options={this.precipOpt}
            dropdownStyle={styles.dropdown}
            textStyle={styles.textBox}
            style={styles.formRight}
            dropdownTextStyle={styles.modalText}
          />
          <TextInput
            style={styles.formRight}
            placeholder=" Copper Mountain"
            onChangeText={(sResort) => this.setState({ sResort })}
          />
          <ModalDropdown
            defaultValue="1"
            onSelect={(idx, value) => this._handleSelection(idx, value, 'racers')}
            options={this.laneOpt}
            dropdownStyle={styles.dropdown}
            textStyle={styles.textBox}
            style={styles.formRight}
            dropdownTextStyle={styles.modalText}
          />
        </Col>

        {/* --------- Column------------- */}
        <Col>
          <Row>
            <View style={styles.columnRight}>
              <Text style={styles.title}>
                New Race
                            </Text>
            </View>
          </Row>
          <Row>
            <View style={styles.columnRight}>
              <Button
                containerStyle={styles.goButton}
                style={styles.goText}
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

export default NewRace