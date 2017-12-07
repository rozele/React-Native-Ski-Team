import React, { Component } from 'react'
import { TabNavigator }     from 'react-navigation'
import FinishLineup         from '../Screens/FinishLineup'
import HoleLineup           from '../Screens/HoleLineup'
import ImageCapture         from '../Screens/ImageCapture'
import LineupForm           from '../Screens/LineupForm'
import NewRace              from '../Screens/NewRace'
import SplitLineup          from '../Screens/SplitLineup'
import StartGateLineup      from '../Screens/StartGateLineup'
import ImageNavigator       from '../Navigators/ImageNavigator'

const FormNavigator = TabNavigator({
  NewRace         : { screen: NewRace         },
  LineupForm      : { screen: LineupForm      },
  // StartGateLineup : { screen: StartGateLineup },
  // HoleLineup      : { screen: HoleLineup      },
  // SplitLineup     : { screen: SplitLineup     },
  // FinishLineup    : { screen: FinishLineup    },
  // ImageNavigator  : { screen: ImageNavigator  },
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
