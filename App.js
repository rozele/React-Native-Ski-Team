import { StackNavigator, TabNavigator } from 'react-navigation';
import RaceInfo                         from './RaceInfo'      ;
import ScreenOne                        from './ScreenOne'     ;
import StartLineup                      from './StartLineup'   ;
import HoleEntry                        from './HoleEntry'     ;
import DemoGallery                      from './DemoGallery'   ;
import ImageCapture                     from './ImageCapture'  ;

const App = TabNavigator({
    StartLineup  : { screen: StartLineup  }, 
    HoleEntry    : { screen: HoleEntry    },
    RaceInfo     : { screen: RaceInfo     },
    ScreenOne    : { screen: ScreenOne    },
    ImageCapture : { screen: ImageCapture },
    DemoGallery  : { screen: DemoGallery  },
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
