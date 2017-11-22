import React, { Component } from 'react'                      ;
import styles               from './styles'                   ;
import Button               from 'react-native-button'        ;
import ModalDropdown        from 'react-native-modal-dropdown';
import { Col, Row, Grid }   from 'react-native-easy-grid'     ;
import {
  StyleSheet        ,
  TouchableHighlight,
  Text              ,
  View              ,
  Image             ,
  ScrollView
}                           from 'react-native'               ;

export default class StartGateLineup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      laneID : '0'       ,
      bibCol : 'default' ,
    };

    // Modal options
    this.bibOpt    = ['Red', 'Green', 'Blue', 'White', 'Yellow', 'Black' ];

    // Display props
    this.nHeight         =  35    ;
    this.nLaneBtnHeight  =  40    ;
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
    tabBarLabel: 'Start',
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

  _handleRaceCodexSelect(idx, value){

  }

  _handleBibSelect(idx, value){
    this.state.bibCol = value;
    console.log('Bib selected ' + this.state.bibCol);
  }

  // See this for rendering Col|Rows: https://code.tutsplus.com/tutorials/get-started-with-layouts-in-react-native--cms-27418

  render() {
        return (
            <Grid>

            {/* --------- Column------------- */}
            <Col size={60} style = {{alignItems: 'center', justifyContent: 'center'}} >
                <View style   = {{alignItems: 'center', justifyContent: 'center', paddingTop: 10}}>   
                <Image source = {require ('./images/StartLineImg.jpg')}
                    style  = {{ width: 300, height: 220}} 
                />     
                </View>    

            <Row>
                <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                    <ModalDropdown
                        defaultValue      = "Lane 1"
                        onSelect          = {(idx, value) => this._handleBibSelect(idx, value)}
                        options           = {this.bibOpt}
                        dropdownStyle     = {{padding: this.nModalPadding, margin: this.nModalMargin, height: 280}}        
                        textStyle         = {{fontSize: 14, textAlign: 'center', }}
                        style             = {{justifyContent: "center", alignItems: "center", width: 55,
                                            margin: this.nTextBoxMargin,  borderColor: this.sBorderColor, borderWidth: this.nBorderWidth,  height:this.nLaneBtnHeight}}
                        dropdownTextStyle = {{fontSize: this.nModalFontSize, color: 'black'}} 
                    />
                </Col>
                <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                        <ModalDropdown
                            defaultValue      = "Lane 2"
                            onSelect          = {(idx, value) => this._handleBibSelect(idx, value)}
                            options           = {this.bibOpt}
                            dropdownStyle     = {{padding: this.nModalPadding, margin: this.nModalMargin, height: 280}}        
                            textStyle         = {{fontSize: 14, textAlign: 'center', }}
                            style             = {{justifyContent: "center", alignItems: "center", width: 55,
                                                margin: this.nTextBoxMargin,  borderColor: this.sBorderColor, borderWidth: this.nBorderWidth,  height:this.nLaneBtnHeight}}
                            dropdownTextStyle = {{fontSize: this.nModalFontSize, color: 'black'}} 
                        />
                    </Col>
                    <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                        <ModalDropdown
                            defaultValue      = "Lane 3"
                            onSelect          = {(idx, value) => this._handleBibSelect(idx, value)}
                            options           = {this.bibOpt}
                            dropdownStyle     = {{padding: this.nModalPadding, margin: this.nModalMargin, height: 280}}        
                            textStyle         = {{fontSize: 14, textAlign: 'center', }}
                            style             = {{justifyContent: "center", alignItems: "center", width: 55,
                                                margin: this.nTextBoxMargin,  borderColor: this.sBorderColor, borderWidth: this.nBorderWidth,  height:this.nLaneBtnHeight}}
                            dropdownTextStyle = {{fontSize: this.nModalFontSize, color: 'black'}} 
                        />
                    </Col>
                    <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                        <ModalDropdown
                            defaultValue      = "Lane 4"
                            onSelect          = {(idx, value) => this._handleBibSelect(idx, value)}
                            options           = {this.bibOpt}
                            dropdownStyle     = {{padding: this.nModalPadding, margin: this.nModalMargin, height: 280}}        
                            textStyle         = {{fontSize: 14, textAlign: 'center', }}
                            style             = {{justifyContent: "center", alignItems: "center", width: 55,
                                                margin: this.nTextBoxMargin,  borderColor: this.sBorderColor, borderWidth: this.nBorderWidth,  height:this.nLaneBtnHeight}}
                            dropdownTextStyle = {{fontSize: this.nModalFontSize, color: 'black'}} 
                        />
                    </Col>  
                    <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                        <ModalDropdown
                            defaultValue      = "Lane 5"
                            onSelect          = {(idx, value) => this._handleBibSelect(idx, value)}
                            options           = {this.bibOpt}
                            dropdownStyle     = {{padding: this.nModalPadding, margin: this.nModalMargin, height: 280}}        
                            textStyle         = {{fontSize: 14, textAlign: 'center', }}
                            style             = {{justifyContent: "center", alignItems: "center", width: 55,
                                                margin: this.nTextBoxMargin,  borderColor: this.sBorderColor, borderWidth: this.nBorderWidth,  height:this.nLaneBtnHeight}}
                            dropdownTextStyle = {{fontSize: this.nModalFontSize, color: 'black'}} 
                        />
                    </Col>
                    <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                        <ModalDropdown
                            defaultValue      = "Lane 6"
                            onSelect          = {(idx, value) => this._handleBibSelect(idx, value)}
                            options           = {this.bibOpt}
                            dropdownStyle     = {{padding: this.nModalPadding, margin: this.nModalMargin, height: 3280}}        
                            textStyle         = {{fontSize: 14, textAlign: 'center', }}
                            style             = {{justifyContent: "center", alignItems: "center", width: 55,
                                                margin: this.nTextBoxMargin,  borderColor: this.sBorderColor, borderWidth: this.nBorderWidth,  height:this.nLaneBtnHeight}}
                            dropdownTextStyle = {{fontSize: this.nModalFontSize, color: 'black'}} 
                        />
                    </Col>
                </Row>
            </Col>
            
            {/* --------- Column------------- */}
            <Col size={35}>
            <Row style={{alignItems: 'center', justifyContent: 'center', margin:-20}}>
                <View>
                    <Text style = {{fontSize: 30}}> 
                        Start Gate Line Up
                        </Text>
                </View>
            </Row>
            <Row>
                <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                    <ModalDropdown
                        defaultValue      = "Race: R9999"
                        onSelect          = {(idx, value) => this._handleLaneSelect(idx, value)}
                        options           = {this.laneOpt}
                        dropdownStyle     = {{padding: this.nModalPadding, margin: this.nModalMargin, height: 280}}        
                        textStyle         = {{fontSize: 18, textAlign: 'center', }}
                        style             = {{justifyContent: "center", alignItems: "center", width: this.nModalWidth /2,
                                              margin: this.nTextBoxMargin,  borderColor: this.sBorderColor, borderWidth: this.nBorderWidth,  height:this.nHeight}}
                        dropdownTextStyle = {{fontSize: this.nModalFontSize, color: 'black'}} 
                    />
                </Col>
                <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                    <ModalDropdown
                    defaultValue      = "Phase: Heat1"
                    onSelect          = {(idx, value) => this._handleLaneSelect(idx, value)}
                    options           = {this.laneOpt}
                    dropdownStyle     = {{padding: this.nModalPadding, margin: this.nModalMargin, height: 280}}        
                    textStyle         = {{fontSize: 18, textAlign: 'center', }}
                    style             = {{justifyContent: "center", alignItems: "center", width: this.nModalWidth /2,
                                          borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, height:this.nHeight}}
                    dropdownTextStyle = {{fontSize: this.nModalFontSize, color: 'black'}} 
                    />
                </Col>
            </Row>
            <Row  style={{justifyContent: 'center', margin: -20, paddingBottom: 6}}>
            <View style={{justifyContent: 'center'}}>   
                <Image source = {require ('./images/CameraIcon.png')}
                       style  = {{ width: 70, height: 70, }} 
                />     
            </View>     
            </Row>   
            <Row style={{justifyContent: 'center', margin: -10}}>
            <View style={{alignItems: 'flex-end'}}>
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

const stylesObj = StyleSheet.create({
    orange_box: {
      backgroundColor: 'orange'
    },
    green_box: {
      backgroundColor: 'green'
    },
    gray_box: {
      backgroundColor: 'gray'
    },
    blue_box: {
      backgroundColor: 'blue'
    },
    border_styles: {
        width: this.nModalWidth, margin: this.nMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:10, height:this.nHeight
    }
  });






