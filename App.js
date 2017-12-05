import { StackNavigator, TabNavigator } from 'react-navigation' ;
import NewRace                          from './NewRace'        ;
import StartGateLineup                  from './StartGateLineup';
import HoleLineup                       from './HoleLineup'     ;
import ImageCapture                     from './ImageCapture'   ;
import SplitLineup                      from './SplitLineup'    ;
import FinishLineup                     from './FinishLineup'   ;
import ImageNavigator                   from './ImageNavigator' ;
// import ImageBrowser                     from './ImageBrowser'   ;
// import DemoGallery                      from './DemoGallery'    ;

const App = TabNavigator({
    NewRace         : { screen: NewRace         }, 
    StartGateLineup : { screen: StartGateLineup },
    HoleLineup      : { screen: HoleLineup      },
    SplitLineup     : { screen: SplitLineup     },
    FinishLineup    : { screen: FinishLineup    },
    ImageNavigator  : { screen: ImageNavigator  },
    // ImageCapture    : { screen: ImageCapture    },
    // ImageBrowser    : { screen: ImageBrowser    },
    // DemoGallery     : { screen: DemoGallery     },
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
