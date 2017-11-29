import { StackNavigator, TabNavigator } from 'react-navigation' ;
import RaceInfo                         from './RaceInfo'       ;
import DemoGallery                      from './DemoGallery'    ;
import ImageCapture                     from './ImageCapture'   ;
import ImageBrowser                     from './ImageBrowser'   ;
import NewRace                          from './NewRace'        ;
import StartGateLineup                  from './StartGateLineup';
import HoleLineup                       from './HoleLineup'     ;

const App = TabNavigator({
    NewRace         : { screen: NewRace         }, 
    StartGateLineup : { screen: StartGateLineup },
    HoleLineup      : { screen: HoleLineup      },
    RaceInfo        : { screen: RaceInfo        },
    ImageCapture    : { screen: ImageCapture    },
    // ImageBrowser : { screen: ImageBrowser }
    // DemoGallery  : { screen: DemoGallery  },
  }, {
    tabBarOptions: { 
      activeTintColor: '#7567B1',
      labelStyle  : {
        fontSize  : 16,
        fontWeight: '600'
      }
    }
  });

module.exports = App
