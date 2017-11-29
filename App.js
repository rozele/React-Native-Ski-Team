import { StackNavigator, TabNavigator } from 'react-navigation' ;
import NewRace                          from './NewRace'        ;
import StartGateLineup                  from './StartGateLineup';
import HoleLineup                       from './HoleLineup'     ;
import ImageCapture                     from './ImageCapture'   ;
import SplitLineup                      from './SplitLineup'    ;
import FinishLineup                     from './FinishLineup'   ;
// import ImageBrowser                     from './ImageBrowser'   ;
// import DemoGallery                      from './DemoGallery'    ;

const App = TabNavigator({
    NewRace         : { screen: NewRace         }, 
    StartGateLineup : { screen: StartGateLineup },
    HoleLineup      : { screen: HoleLineup      },
    ImageCapture    : { screen: ImageCapture    },
    SplitLineup     : { screen: SplitLineup     },
    FinishLineup    : { screen: FinishLineup    },
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
