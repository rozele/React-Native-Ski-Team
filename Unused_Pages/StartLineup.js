import React, { Component } from 'react'                      ;
import styles               from './styles'                   ;
import Button               from 'react-native-button'        ;
import ModalDropdown        from 'react-native-modal-dropdown';
import {
  StyleSheet        ,
  TouchableHighlight,
  Text              ,
  View              ,
  Image             ,
  ScrollView
}                           from 'react-native'               ;

export default class StartLineup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      laneID : '0'       ,
      bibCol : 'default' ,
    };

    // Modal options
    this.bibOpt    = ['Red', 'Green', 'Blue', 'Purple', 'Orange', 'Yellow', 'Black' ];
    this.laneOpt   = [1,2,3,4,5,6                                                   ];    

    // Display props
    this.nHeight        =  35    ;
    this.nPadding       =  15    ;
    this.nFontSize      =  20    ;
    this.nMargin        =  15    ;
    this.nBorderWidth   =   1    ;
    this.nModalPadding  =  10    ;
    this.nModalMargin   =  20    ;
    this.nModalWidth    = 230    ;
    this.nModalFontSize =  20    ;
    this.sBorderColor   = 'black';     
    
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
      var pos       = myString.lastIndexOf('&');
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
    tabBarLabel: 'Start Lineup',
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

  _handleLaneSelect(idx, value){
    this.state.laneNum = value;
    console.log('Lane selected ' + this.state.laneNum);
  }

  _handleBibSelect(idx, value){
    this.state.bibCol = value;
    console.log('Bib selected ' + this.state.bibCol);
  }

  render() {
    return (
      <View style={{marginTop: 20}}>
      <ScrollView>
        <ModalDropdown
          defaultValue      = "Lane ID"
          onSelect          = {(idx, value) => this._handleLaneSelect(idx, value)}
          options           = {this.laneOpt}
          dropdownStyle     = {{padding: this.nModalPadding, margin: this.nModalMargin, height: 280}}        
          textStyle         = {{fontSize: this.nFontSize}}
          style             = {{width: this.nModalWidth, margin: this.nMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:10, height:this.nHeight}}        
          dropdownTextStyle = {{fontSize: this.nModalFontSize, color: 'black'}} 
         />

        <ModalDropdown
          defaultValue      = "Bib Color"
          onSelect          = {(idx, value) => this._handleBibSelect(idx, value)}
          options           = {this.bibOpt}
          textStyle         = {{fontSize: this.nFontSize}}
          style             = {{width: this.nModalWidth, margin: this.nMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:10, height:this.nHeight}}
          dropdownStyle     = {{padding: this.nModalPadding, margin: this.nModalMargin, height: 400}}               
          dropdownTextStyle = {{fontSize: this.nModalFontSize, color: 'black'}} 
        />

        <Button          
          containerStyle = {{width:this.nModalWidth, height:40, margin: 15, overflow:'hidden', borderRadius:6, backgroundColor: 'black'}}
          style          = {{fontSize: 24, color: 'white'}}
          onPress        = {() => this._handleBtnPress()} >
          Submit
        </Button>         
      </ScrollView>
      </View>
    )
  }

}



