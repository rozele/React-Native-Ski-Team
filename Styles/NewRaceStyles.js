import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  formLeft: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 130,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    height: 35
  },
  textBox: {
    fontSize: 18,
    textAlign: 'center'
  },
  formRight: {
    justifyContent: "center",
    alignItems: "center",
    width: 230,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    height: 35
  },
  dropdown: {
    padding: 10,
    margin: 20,
    height: 280
  },
  modalText: {
    fontSize: 20,
    color: 'black'
  },
  columnRight: {
    alignItems: 'flex-end',
    paddingLeft: 40
  },
  title: {
    fontSize: 30
  },
  goButton: {
    justifyContent: 'center',
    width: 130,
    height:80,
    margin: 15,
    overflow:'hidden',
    borderRadius: 18,
    backgroundColor: 'green'
  },
  goText: {
    fontSize: 24,
    color: 'white'
  }
})

export default styles