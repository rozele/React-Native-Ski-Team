import React, { Component } from 'react'                      ;
import styles               from './styles'                   ;
import Button               from 'react-native-button'        ;
import ModalDropdown        from 'react-native-modal-dropdown';
import { Col, Row, Grid }   from 'react-native-easy-grid'     ;
import {
  StyleSheet        ,
  TouchableHighlight,
  Text              ,
  TextInput         ,
  View              ,
  Image             ,
  ScrollView
}                           from 'react-native'               ;

export default class NewRace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sCodex : 'R9999'          ,
      sGender: 'Male'           ,
      nTemp  : 0                ,
      sPrecip: 'Light Snow'     ,
      sResort: 'Copper Mountain',
      nRacers: 0
    };

    // Modal options
    this.bibOpt    = ['Red', 'Green', 'Blue', 'Purple', 'Orange', 'Yellow', 'Black' ];
    this.precipOpt = ['None', 'Light-Snow', 'Heavy-Snow', 'Rain'                    ];
    this.genderOpt = ['Male', 'Female'                                              ];
    this.laneOpt   = [1,2,3,4,5,6                                                   ];   
    this.racersOpt = [1,2,3,4,5,6                                                   ];    

    // Display props
    this.nHeight         =  35    ;
    this.nPadding        =  15    ;
    this.nFontSize       =  20    ;
    this.nMargin         =  15    ;
    this.nBorderWidth    =   1    ;
    this.nModalPadding   =  10    ;
    this.nModalMargin    =  20    ;
    this.nModalWidth     = 230    ;
    this.nModalFontSize  =  20    ;
    this.sBorderColor    = 'black'; 
    
    this.nTextBoxMargin  =  10    ;
    this.nTextBoxpadding =  20    ; 
    this.nTextBoxWidth   = 130    ;
    this.nTextBoxFont    =  18    ;
    this.nThirdColPadL   =  40    ;
    
    // NOTE: fetch on iOS ONLY accepts https requests.
    // See : https://stackoverflow.com/questions/38418998/react-native-fetch-network-request-failed
    this.sAzureUrl      = "https://sportstrackinglogger.azurewebsites.net/?";
  }

  /**
   * Loop through each item in state and create a string formatted correctly for Azure Func 
   */
  createUrlToPost() {
    var myString = '';
    for (var key in this.state) {
      // Get values in this.state object
      if (this.state.hasOwnProperty(key)) {
         var obj = this.state[key];
         // Build the string for param urls
         myString += key + '=' + obj + '&';

         console.log("obj: " + obj);
         console.log("key: " + key);
         }
      }
      // Remove the final & from the end of the string
      var pos     = myString.lastIndexOf('&');
      var newString = myString.substring(0,pos) + "" + myString.substring(pos+1)
      console.log(newString);

      return newString;
   }

  /** 
   * Is actually a GET operation, as that is what Azure Functions accept to post data 
   */
  postDataToAzureFuncAsync() {
    var _sAzureFuncParams = this.createUrlToPost()
    var _sAzureUrl        = this.sAzureUrl + _sAzureFuncParams;

    return fetch(_sAzureUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
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
    this.postDataToAzureFuncAsync();
  }

  _handleSelection(idx, value, params){
    switch (params) {
        case 'codex':
            this.state.sCodex = value;
            console.log('Codex selected '       + this.state.sCodex);
        case 'gender':
            this.state.sGender = value;
            console.log('Gender selected '      + this.state.sGender);
            break;
        case 'precip':
            this.state.sPrecip = value;
            console.log('Precip selected '      + this.state.sPrecip);
            break;
        case 'racers':
            this.state.nRacers = value;
            console.log('# of racers selected ' + this.state.nRacers)    
    }
    console.log(params);
  }


  render() {
        return (
            <Grid>

            {/* --------- Column------------- */}
            <Col>
                <View style={{justifyContent: 'center', alignItems: 'flex-end', width: this.nTextBoxWidth, margin: this.nTextBoxMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:this.nText, height:this.nHeight}}>
                    <Text style = {{fontSize: this.nTextBoxFont}}> 
                        Race Codex:
                    </Text>
                </View>
                <View style = {{justifyContent: 'center', alignItems: 'flex-end', width: this.nTextBoxWidth, margin: this.nTextBoxMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:this.nText, height:this.nHeight}}>
                    <Text style = {{fontSize: this.nTextBoxFont }}> 
                        Gender:
                    </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'flex-end', width: this.nTextBoxWidth, margin: this.nTextBoxMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:this.nText, height:this.nHeight}}>
                    <Text style = {{fontSize: this.nTextBoxFont }}> 
                        Temp:
                    </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'flex-end', width: this.nTextBoxWidth, margin: this.nTextBoxMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:this.nText, height:this.nHeight}}>
                    <Text style = {{fontSize: this.nTextBoxFont }}> 
                        Precip:
                    </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'flex-end', width: this.nTextBoxWidth, margin: this.nTextBoxMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:this.nText, height:this.nHeight}}>
                    <Text style = {{fontSize: this.nTextBoxFont }}> 
                        Resort:
                    </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'flex-end', width: this.nTextBoxWidth, margin: this.nTextBoxMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:this.nText, height:this.nHeight}}>
                    <Text style = {{fontSize: this.nTextBoxFont }}> 
                            Racers:
                    </Text>
                </View>
            </Col>

            {/* --------- Column------------- */}
            <Col>
                <TextInput 
                    style        = {{justifyContent: "center", alignItems: "center", width: this.nModalWidth, margin: this.nTextBoxMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:this.nText, height:this.nHeight}}
                    placeholder  = " R9998"
                    onChangeText = {(sCodex) => this.setState({sCodex})}
                />
                <ModalDropdown
                    defaultValue      = "Male"
                    onSelect          = {(idx, value) => this._handleSelection(idx, value, 'gender')}
                    options           = {this.genderOpt}
                    dropdownStyle     = {{padding: this.nModalPadding, margin: this.nModalMargin, height: 280}}        
                    textStyle         = {{fontSize: this.nFontSize,textAlign: 'center', }}
                    style             = {{justifyContent: "center", alignItems: "center", width: this.nModalWidth, margin: this.nTextBoxMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:this.nText, height:this.nHeight}}
                    dropdownTextStyle = {{fontSize: this.nModalFontSize, color: 'black'}} 
                />
                <TextInput 
                    style        = {{justifyContent: "center", alignItems: "center", width: this.nModalWidth, margin: this.nTextBoxMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:this.nText, height:this.nHeight}}
                    placeholder  = " 0 C"
                    onChangeText = {(temp) => this.setState({temp})}
                />
                <ModalDropdown
                    defaultValue      = "Light Snow"
                    onSelect          = {(idx, value) => this._handleSelection(idx, value, 'precip')}
                    options           = {this.precipOpt}
                    dropdownStyle     = {{padding: this.nModalPadding, margin: this.nModalMargin, height: 280}}        
                    textStyle         = {{fontSize: this.nFontSize,textAlign: 'center', }}
                    style             = {{justifyContent: "center", alignItems: "center", width: this.nModalWidth, margin: this.nTextBoxMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:this.nText, height:this.nHeight}}
                    dropdownTextStyle = {{fontSize: this.nModalFontSize, color: 'black'}} 
                />
                <TextInput 
                style        = {{justifyContent: "center", alignItems: "center", width: this.nModalWidth, margin: this.nTextBoxMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:this.nText, height:this.nHeight}}
                placeholder  = " Copper Mountain"
                onChangeText = {(sResort) => this.setState({sResort})}
                />
                <ModalDropdown
                    defaultValue      = "1"
                    onSelect          = {(idx, value) => this._handleSelection(idx, value, 'racers')}
                    options           = {this.laneOpt}
                    dropdownStyle     = {{padding: this.nModalPadding, margin: this.nModalMargin, height: 280}}        
                    textStyle         = {{fontSize: this.nFontSize,textAlign: 'center', }}
                    style             = {{justifyContent: "center", alignItems: "center", width: this.nModalWidth, margin: this.nTextBoxMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:this.nText, height:this.nHeight}}
                    dropdownTextStyle = {{fontSize: this.nModalFontSize, color: 'black'}} 
                />
            </Col>

            {/* --------- Column------------- */}
            <Col>
                <Row>
                    <View style = {{alignItems: 'flex-end', paddingLeft: this.nThirdColPadL}}>
                        <Text style = {{fontSize: 40}}> 
                            New Race
                            </Text>
                        </View>
                </Row>
                <Row>
                    <View style={{alignItems: 'flex-end', paddingLeft: this.nThirdColPadL}}>
                        <Button          
                        containerStyle = {{justifyContent: 'center', width: 130, height:80, margin: 15, overflow:'hidden', borderRadius: 18, backgroundColor: 'green'}}
                        style          = {{fontSize: 24, color: 'white'}}
                        onPress        = {() => this._handleBtnPress()} >
                            GO
                        </Button>       
                    </View>
                </Row>
            </Col>

        </Grid>
    )
  }
}
