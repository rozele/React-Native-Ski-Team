import { StackNavigator, TabNavigator } from 'react-navigation'
import NewRace                          from '../Screens/NewRace'
import StartGateLineup                  from '../Screens/StartGateLineup'
import HoleLineup                       from '../Screens/HoleLineup'
import SplitLineup                      from '../Screens/SplitLineup'
import FinishLineup                     from '../Screens/FinishLineup'
import ImageNavigator                   from '../Navigators/ImageNavigator'

const FormNavigator = TabNavigator({
    NewRace         : { screen: NewRace         },
    StartGateLineup : { screen: StartGateLineup },
    HoleLineup      : { screen: HoleLineup      },
    SplitLineup     : { screen: SplitLineup     },
    FinishLineup    : { screen: FinishLineup    },
    ImageNavigator  : { screen: ImageNavigator  },
  }, {
    tabBarOptions: {
      activeTintColor: '#7567B1',
      labelStyle: {
        fontSize  : 16,
        fontWeight: '600'
      }
    }
  })

export default FormNavigator
