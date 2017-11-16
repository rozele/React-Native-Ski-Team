import { StackNavigator, TabNavigator } from 'react-navigation';
import InputPage                        from './InputPage'     ;
import ScreenOne                        from './ScreenOne'     ;
import ScreenTwo                        from './ScreenTwo'     ;
import ScreenThree                      from './ScreenThree'   ;
import DemoGallery                      from './DemoGallery'   ;
import ImageCapture                     from './ImageCapture'  ;

const App = TabNavigator({
    DemoGallery  : {screen: DemoGallery  },
    Home         : { screen: InputPage   },
    ScreenOne    : { screen: ScreenOne   },
    ImageCapture : { screen: ImageCapture},
    ScreenThree  : { screen: ScreenThree }
  }, {
    tabBarOptions: { 
      activeTintColor: '#7567B1',
      labelStyle: {
        fontSize: 16,
        fontWeight: '600'
      }
    }
  });

module.exports = App
