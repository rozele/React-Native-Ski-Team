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

    this.sGenderOptions = ['Male', 'Female'];

    this.nHeight     = 80;
    this.nPadding    = 40;
    this.nFontSize   = 50;
    this.nMargin     = 15;
    this.borderWidth = 1;
    this.borderColor = 'black';
  }
  
  _handlePBtnPress() {
    // TODO: POST content from input fields to DB
    console.log('Pressed!');
  }

  _handleGenderSelect(gender){
    console.log('Gender Selected');
  }

  render() {
    return (
      // need at least 40 to prevent text from hidding top of phone in simulator
      <View style={{padding: this.nPadding}}>
        <TextInput
        style={{height: this.nHeight, margin: this.nMargin, fontSize: this.nFontSize, borderColor: this.borderColor, borderWidth: this.borderWidth}}
        placeholder="Bib Color"
        onChangeText={(bibCol) => this.setState({bibCol})}
        />
        <TextInput 
        style={{height: this.nHeight, margin: this.nMargin, fontSize: this.nFontSize, borderColor: this.borderColor, borderWidth: this.borderWidth}}
        placeholder="Bib #"
        onChangeText={(bibNum) => this.setState({bibNum})}
        />
        <TextInput 
        style={{height: this.nHeight, margin: this.nMargin, fontSize: this.nFontSize, borderColor: this.borderColor, borderWidth: this.borderWidth}}
        placeholder="Heat #"
        onChangeText={(heatNum) => this.setState({heatNum})}
        />
        <TextInput 
        style={{height: this.nHeight, margin: this.nMargin, fontSize: this.nFontSize, borderColor: this.borderColor, borderWidth: this.borderWidth}}
        placeholder="Lane #"
        onChangeText={(laneNum) => this.setState({laneNum})}
        />
        <TextInput 
        style={{height: this.nHeight, margin: this.nMargin, fontSize: this.nFontSize, borderColor: this.borderColor, borderWidth: this.borderWidth}}
        placeholder="Gender"
        onChangeText={(gender) => this.setState({gender})}
        />

        <ModalDropdown
        onSelect={this._handleGenderSelect()}
        options= {this.sGenderOptions}
        textStyle={{fontSize: 20}}
        style={{borderWidth: this.borderWidth, borderColor: this.borderColor, borderWidth: this.borderWidth, padding:10, height:40}}        
        dropdownTextStyle= {{fontSize: 20, fontColor: 'black'}} 
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