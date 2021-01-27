import { StyleSheet, Dimensions } from 'react-native';
//import Constants from 'expo-constants';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  errorTitle: {
    color: '#c80808',
    fontSize: 20,
  },
  errorMessage: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  iconLogin: {
    width: 150,
    height: 130,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  containerGlobal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  containerForm: {
    width: windowWidth * 0.86,
    minHeight: windowHeight * 0.43,
    maxHeight: windowHeight * 0.46,
    paddingVertical: 12,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#e1e4e8',
  },
  inputText: {
    color: '#000',
    width: 280,
    paddingLeft: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#253c99',
    fontSize: 28,
    textAlign: 'center',
  },
  labelForm: {
    fontSize: 25,
    color: '#000',
    alignSelf: 'flex-start',
    marginLeft: 35,
  },
  buttonForm: {
    backgroundColor: '#007bff',
    color: '#F2F2F2',
    width: 150,
    paddingVertical: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#253c99',
    fontSize: 28,
    textAlign: 'center',
  },
  loader: {
    marginVertical: 10,
  },
});
