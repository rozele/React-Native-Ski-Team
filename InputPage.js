import React, { Component }                             from 'react'                      ;
import {AppRegistry, Text, TextInput, View, ScrollView} from 'react-native'               ;
import Button                                           from 'react-native-button'        ;
import ModalDropdown                                    from 'react-native-modal-dropdown';

export default class InputPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bibCol : "Bib Color",
      bibNum : "Bib #"    ,
      heatNum: "Heat #"   ,
      laneNum: "Lane #"   ,
      gender : "Gender" 
    };

    // Modal options
    this.aGenderOptions = ['Male', 'Female'];
    this.aHeatOptions   = [1,2,3,4         ];
    this.aLaneOptions   = [1,2,3,4,5,6     ];
    this.aBibOptions    = ['Red', 'Green', 'Blue', 'Purple, Orange', 'Yellow', 'Black' ];

    // Display props
    this.nHeight        = 35;
    this.nPadding       = 15;
    this.nFontSize      = 20;
    this.nMargin        = 15;
    this.nBorderWidth   = 1;
    this.nModalPadding  = 10;
    this.nModalMargin   = 20;
    this.nModalWidth    = 130;
    this.nModalFontSize = 20;
    this.sBorderColor   = 'black';
    
  }
  
  // Test dummy func
  getMoviesFromApiAsync() {
    // return fetch('https://facebook.github.io/react-native/movies.json')
     return fetch('https://sporttrackingdataloggingfunction.azurewebsites.net/api/HttpTriggerJS1?code=GLkzGlv7iRaga6UypZfEYBCuZIzpsFsOJw3opUmxPkrDZrsdsrzqFg==')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.movies)
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /**
   * Posts this.state to Azure Func */
  postDataToAzureAsync() {
    fetch('https://sporttrackingdataloggingfunction.azurewebsites.net/api/HttpTriggerJS1?code=GLkzGlv7iRaga6UypZfEYBCuZIzpsFsOJw3opUmxPkrDZrsdsrzqFg==', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(res=>res.json())
      .then(res => console.log(res));
  }


  /** Event handlers for button and modals
   * ------------------------------------ */
  _handleBtnPress() {
    console.log('Pressed!');
    this.getMoviesFromApiAsync();
  }

  _handleGenderSelect(idx, value){
    this.state.gender = value;
    console.log('Gender selected ' + this.state.gender);
  }

  _handleLaneSelect(idx, value){
    this.state.laneNum = value;
    console.log('Lane selected ' + this.state.laneNum);
  }

  _handleHeatSelect(idx, value){
    this.state.heatNum = value;
    console.log('Lane selected ' + this.state.heatNum);
  }

  _handleBibSelect(idx, value){
    this.state.bibCol = value;
    console.log('Lane selected ' + this.state.bibCol);
  }

  render() {
    return (
      // NOTE: Need margin of at least 40 to prevent text from hidding top of phone in simulator when in portrait
      <ScrollView>
              
        <TextInput 
        style={{width: this.nModalWidth, height: this.nHeight, margin: this.nMargin, fontSize: this.nFontSize, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth}}
        placeholder="Bib #"
        onChangeText={(bibNum) => this.setState({bibNum})}
        />

        <ModalDropdown
        defaultValue="Bib Color"
        onSelect={(idx, value) => this._handleBibSelect(idx, value)}
        options= {this.aBibOptions}
        textStyle={{fontSize: this.nFontSize}}
        dropdownStyle={{padding: this.nModalPadding, margin: this.nModalMargin, height: 280}}                
        style={{width: this.nModalWidth, margin: this.nMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:10, height:this.nHeight}}        
        dropdownTextStyle= {{fontSize: this.nModalFontSize, color: 'black'}} 
        />
  
        <ModalDropdown
        defaultValue="Heat #"
        onSelect={(idx, value) => this._handleHeatSelect(idx, value)}
        options= {this.aHeatOptions}
        dropdownStyle={{padding: this.nModalPadding, margin: this.nModalMargin, height: 200}}
        textStyle={{fontSize: this.nFontSize}}
        style={{width: this.nModalWidth, margin: this.nMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:10, height:this.nHeight}}        
        dropdownTextStyle= {{fontSize: this.nModalFontSize, color: 'black'}} 
        />

        <ModalDropdown
        defaultValue="Lane #"
        onSelect={(idx, value) => this._handleLaneSelect(idx, value)}
        options= {this.aLaneOptions}
        dropdownStyle={{padding: this.nModalPadding, margin: this.nModalMargin, height: 280}}        
        textStyle={{fontSize: this.nFontSize}}
        style={{width: this.nModalWidth, margin: this.nMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:10, height:this.nHeight}}        
        dropdownTextStyle= {{fontSize: this.nModalFontSize, color: 'black'}} 
        />

        <ModalDropdown
        defaultValue="Gender"
        onSelect={(idx, value) => this._handleGenderSelect(idx, value)}
        options= {this.aGenderOptions}
        textStyle={{fontSize: this.nFontSize}}
        style={{width: this.nModalWidth, margin: this.nMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:10, height:this.nHeight}}
        dropdownStyle={{padding: this.nModalPadding, margin: this.nModalMargin, height: 100}}               
        dropdownTextStyle= {{fontSize: this.nModalFontSize, color: 'black'}} 
        />

        <Button          
        containerStyle={{width:this.nModalWidth, height:40, margin: 0, overflow:'hidden', borderRadius:6, backgroundColor: 'black'}}
        style={{fontSize: 24, color: 'white'}}
        onPress={() => this._handleBtnPress()} >
        Submit
        </Button>        
        </ScrollView>
    );

    
  }
}
// skip this line if using Create React Native App
AppRegistry.registerComponent('SkiApp', () => InputPage);