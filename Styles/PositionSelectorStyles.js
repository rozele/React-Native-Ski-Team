import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  box: {
    flex: .25,
    // padding: 10,
    // margin: 40,
    borderRadius: 5,
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    alignSelf: 'stretch'
    // flexDirection: 'row',
    // textAlignVertical: 'center',
    // textAlign: 'center',
    // justifyContent: 'center',
    // alignSelf: 'stretch'
  }
})

export default styles