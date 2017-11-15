import React, { Component } from 'react';
import {AppRegistry, Text, TextInput, View} from 'react-native';
import Button from 'react-native-button';
import ModalDropdown from 'react-native-modal-dropdown';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bibCol : "Bib Color",
      bibNum : "Bib #"    ,
      heatNum: "Heat #"   ,
      laneNum: "Lane #"   ,
      gender : "Gender" 
    };

    this.aGenderOptions = ['Male', 'Female'];
    this.aLaneOptions   = [1,2,3,4,5,6     ];
    this.aHeatOptions   = [1,2,3,4         ];
    this.aBibOptions    = ['Red', 'Blue', 'Green', 'Purple, Orange', 'Yellow', 'Black' ];

    this.nHeight     = 80;
    this.nPadding    = 40;
    this.nFontSize   = 50;
    this.nMargin     = 15;
    this.borderWidth = 1;
    this.borderColor = 'black';
  }
  
  /** Event handlers for button and modals
   * ------------------------------------ */
  _handlePBtnPress() {
    // TODO: POST content from input fields to DB
    console.log('Pressed!');
  }

  _handleGenderSelect(idx, value){
    this.state.gender = value;
    console.log('Gender selected' + this.state.gender);
  }

  _handleLaneSelect(idx, value){
    this.state.laneNum = value;
    console.log('Lane selected' + this.state.laneNum);
  }

  _handleHeatSelect(idx, value){
    this.state.heatNum = value;
    console.log('Lane selected' + this.state.heatNum);
  }

  _handleBibSelect(idx, value){
    this.state.bibCol = value;
    console.log('Lane selected' + this.state.bibCol);
  }

  render() {
    return (
      // need at least 40 to prevent text from hidding top of phone in simulator
      <View style={{padding: this.nPadding}}>
              
        <TextInput 
        style={{height: this.nHeight, margin: this.nMargin, fontSize: this.nFontSize, borderColor: this.borderColor, borderWidth: this.borderWidth}}
        placeholder="Bib #"
        onChangeText={(bibNum) => this.setState({bibNum})}
        />

        <ModalDropdown
        defaultValue="Bib Color"
        onSelect={(idx, value) => this._handleBibSelect(idx, value)}
        options= {this.aBibOptions}
        textStyle={{fontSize: this.nFontSize}}
        style={{margin: this.nMargin, borderWidth: this.borderWidth, borderColor: this.borderColor, borderWidth: this.borderWidth, padding:10, height:this.nHeight}}        
        dropdownTextStyle= {{fontSize: 20, color: 'black'}} 
        />
  
        <ModalDropdown
        defaultValue="Heat #"
        onSelect={(idx, value) => this._handleHeatSelect(idx, value)}
        options= {this.aHeatOptions}
        textStyle={{fontSize: this.nFontSize}}
        style={{margin: this.nMargin, borderWidth: this.borderWidth, borderColor: this.borderColor, borderWidth: this.borderWidth, padding:10, height:this.nHeight}}        
        dropdownTextStyle= {{fontSize: 20, color: 'black'}} 
        />

        <ModalDropdown
        defaultValue="Lane #"
        onSelect={(idx, value) => this._handleLaneSelect(idx, value)}
        options= {this.aLaneOptions}
        textStyle={{fontSize: this.nFontSize}}
        style={{margin: this.nMargin, borderWidth: this.borderWidth, borderColor: this.borderColor, borderWidth: this.borderWidth, padding:10, height:this.nHeight}}        
        dropdownTextStyle= {{fontSize: 20, color: 'black'}} 
        />

        <ModalDropdown
        defaultValue="Gender"
        onSelect={(idx, value) => this._handleGenderSelect(idx, value)}
        options= {this.aGenderOptions}
        textStyle={{fontSize: this.nFontSize}}
        style={{margin: this.nMargin, borderWidth: this.borderWidth, borderColor: this.borderColor, borderWidth: this.borderWidth, padding:10, height:this.nHeight}}        
        dropdownTextStyle= {{fontSize: 20, color: 'black'}} 
        />

        <Button          
        containerStyle={{padding:10, height:45, margin: 60, overflow:'hidden', borderRadius:6, backgroundColor: 'black'}}
        style={{fontSize: 24, color: 'white'}}
        onPress={() => this._handleBtnPress()} >
        Submit
        </Button>

      </View>
    );
  }
}
// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);