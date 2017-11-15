import { StackNavigator }       from 'react-navigation' ;
import InputPage                from './InputPage'      ;

const App = StackNavigator({
    Home: { screen: InputPage }
})

module.exports = App
