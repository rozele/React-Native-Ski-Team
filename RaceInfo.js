import React, { Component }                             from 'react'                      ;
import {AppRegistry, Text, TextInput, View, ScrollView} from 'react-native'               ;
import Button                                           from 'react-native-button'        ;
import ModalDropdown                                    from 'react-native-modal-dropdown';

export default class RaceInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phaseID: '0'       ,
      heatNum: '0'       ,
      sport  : 'default' ,
      event  : 'default' ,
      temp   : 'default' ,
      precip : 'default' ,
      gender : 'default' ,
      bibCol : 'default' ,
    };

    // Modal options 
    this.raceCodex = [0                                                             ];
    this.phaseID   = ['Heat1'   , 'Heat2'   , 'Heat3'   , 'Heat4'   , 'Heat5', 'Heat6',
                      'Quarter1', 'Quarter2', 'Quarter3', 'Quarter4',
                      'Semi1'   , 'Semi2'   , 'Final'                               ];
    this.sportOpt  = ['Snowboarding', 'Skiing'                                      ];
    this.eventOpt  = ['SBX, other'                                                  ];
    this.precipOpt = ['None'                                                        ];
    this.genderOpt = ['Male', 'Female'                                              ];
    this.heatOpt   = [1,2,3,4                                                       ];
    this.laneOpt   = [1,2,3,4,5,6                                                   ];
    this.bibOpt    = ['Red', 'Green', 'Blue', 'Purple', 'Orange', 'Yellow', 'Black' ];

    // Display props
    this.nHeight        =  35    ;
    this.nPadding       =  15    ;
    this.nFontSize      =  20    ;
    this.nMargin        =  15    ;
    this.nBorderWidth   =   1    ;
    this.nModalPadding  =  10    ;
    this.nModalMargin   =  20    ;
    this.nModalWidth    = 130    ;
    this.nModalFontSize =  20    ;
    this.sBorderColor   = 'black';
    
    // NOTE: fetch on iOS ONLY accepts https requests.
    // See : https://stackoverflow.com/questions/38418998/react-native-fetch-network-request-failed
    this.sAzureUrl      = "https://sportstrackinglogger.azurewebsites.net/?";
    this.sDemoUrlParams = "raceCodex=R1115&phaseID=Heat1&sport=snowboarding&event=SBX&temp=0&precip=None&gender=Female";
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
    console.log(_sAzureUrl);

    return fetch(_sAzureUrl)
      .then((response    ) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }   

  /**
   * Post func using Fetch
   * NOT USED
   */
  postDataToAzureAsync() {
    fetch(this.sAzureUrl + this.state, {
      method: 'post',
      headers: {
        'Accept'      : 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(this.state)
    }).then(res=>res.json())
      .then(res => console.log(res));
  }

    // Test dummy func - sanity check to verify Fetch is working
    getMoviesFromApiAsync() {
      return fetch('https://facebook.github.io/react-native/movies.json')
       .then((response) => response.json())
       .then((responseJson) => {
         console.log(responseJson.movies)
         return responseJson.movies;
       })
       .catch((error) => {
         console.error(error);
       });
   }

  /** Event handlers for button and modals
   * ------------------------------------ */
  _handleBtnPress() {
    this.postDataToAzureFuncAsync();
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

  _handleSportSelect(idx, value){
    this.state.sport = value;
    console.log('Sport selected ' + this.state.sport);
  }

  _handleEventSelect(idx, value){
    this.state.event = value;
    console.log('Event selected ' + this.state.event);
  }

  _handlePrecipSelect(idx, value){
    this.state.precip = value;
    console.log('Precip selected ' + this.state.precip);
  }

  _handleTempSelect(idx, value){
    this.state.temp = value;
    console.log('Temp selected '   + this.state.temp);
  }

  render() {
    return (
      // NOTE: Need margin of at least 40 to prevent text from hidding top of phone in simulator when in portrait
      <ScrollView>
              
        <TextInput 
        style={{width: this.nModalWidth, height: this.nHeight, margin: this.nMargin, fontSize: this.nFontSize, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth}}
        placeholder="Phase ID"
        onChangeText={(phaseID) => this.setState({phaseID})}
        />

        <TextInput 
        style={{width: this.nModalWidth, height: this.nHeight, margin: this.nMargin, fontSize: this.nFontSize, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth}}
        placeholder="Temp"
        onChangeText={(temp) => this.setState({temp})}
        />

        <ModalDropdown
        defaultValue="Sport"
        onSelect={(idx, value) => this._handleSportSelect(idx, value)}
        options= {this.sportOpt}
        textStyle={{fontSize: this.nFontSize}}
        dropdownStyle={{padding: this.nModalPadding, margin: this.nModalMargin, height: 280}}                
        style={{width: this.nModalWidth, margin: this.nMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:10, height:this.nHeight}}        
        dropdownTextStyle= {{fontSize: this.nModalFontSize, color: 'black'}} 
        />
  
        <ModalDropdown
        defaultValue="Heat #"
        onSelect={(idx, value) => this._handleHeatSelect(idx, value)}
        options= {this.heatOpt}
        dropdownStyle={{padding: this.nModalPadding, margin: this.nModalMargin, height: 200}}
        textStyle={{fontSize: this.nFontSize}}
        style={{width: this.nModalWidth, margin: this.nMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:10, height:this.nHeight}}        
        dropdownTextStyle= {{fontSize: this.nModalFontSize, color: 'black'}} 
        />

        <ModalDropdown
        defaultValue="Precip"
        onSelect={(idx, value) => this._handlePrecipSelect(idx, value)}
        options= {this.precipOpt}
        textStyle={{fontSize: this.nFontSize}}
        style={{width: this.nModalWidth, margin: this.nMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:10, height:this.nHeight}}
        dropdownStyle={{padding: this.nModalPadding, margin: this.nModalMargin, height: 100}}               
        dropdownTextStyle= {{fontSize: this.nModalFontSize, color: 'black'}} 
        />

        <ModalDropdown
        defaultValue="Lane ID"
        onSelect={(idx, value) => this._handleLaneSelect(idx, value)}
        options= {this.laneOpt}
        dropdownStyle={{padding: this.nModalPadding, margin: this.nModalMargin, height: 280}}        
        textStyle={{fontSize: this.nFontSize}}
        style={{width: this.nModalWidth, margin: this.nMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:10, height:this.nHeight}}        
        dropdownTextStyle= {{fontSize: this.nModalFontSize, color: 'black'}} 
        />

        <ModalDropdown
        defaultValue="Event"
        onSelect={(idx, value) => this._handleEventSelect(idx, value)}
        options= {this.eventOpt}
        dropdownStyle={{padding: this.nModalPadding, margin: this.nModalMargin, height: 280}}        
        textStyle={{fontSize: this.nFontSize}}
        style={{width: this.nModalWidth, margin: this.nMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:10, height:this.nHeight}}        
        dropdownTextStyle= {{fontSize: this.nModalFontSize, color: 'black'}} 
        />

        <ModalDropdown
        defaultValue="Gender"
        onSelect={(idx, value) => this._handleGenderSelect(idx, value)}
        options= {this.genderOpt}
        textStyle={{fontSize: this.nFontSize}}
        style={{width: this.nModalWidth, margin: this.nMargin, borderWidth: this.borderWidth, borderColor: this.sBorderColor, borderWidth: this.nBorderWidth, padding:10, height:this.nHeight}}
        dropdownStyle={{padding: this.nModalPadding, margin: this.nModalMargin, height: 100}}               
        dropdownTextStyle= {{fontSize: this.nModalFontSize, color: 'black'}} 
        />

        <ModalDropdown
        defaultValue="Bib Col"
        onSelect={(idx, value) => this._handleBibSelect(idx, value)}
        options= {this.bibOpt}
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
AppRegistry.registerComponent('SkiApp', () => RaceInfo);