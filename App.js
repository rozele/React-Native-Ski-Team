import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View} from 'react-native';
import Button from 'react-native-button';

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

    this.nHeight     = 80;
    this.nPadding    = 40;
    this.nFontSize   = 50;
    this.nMargin     = 15;
    this.borderWidth = 1;
    this.borderColor = 'black';
  }
  
  _handlePress() {
    // TODO: POST content from input fields to DB
    console.log('Pressed!');
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

        <Button          
        containerStyle={{padding:10, height:45, margin: 80, overflow:'hidden', borderRadius:6, backgroundColor: 'black'}}
        style={{fontSize: 24, color: 'white'}}
        onPress={() => this._handlePress()} >
        Submit
        </Button>

      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);