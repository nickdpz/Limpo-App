import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
//import Constants from 'expo-constants';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

/*
.Protege-tu-salud-con-una-comida-sana:-manzana-1-hex { color: #A62D37; }
.Protege-tu-salud-con-una-comida-sana:-manzana-2-hex { color: #731A2B; }
.Protege-tu-salud-con-una-comida-sana:-manzana-3-hex { color: #F2695C; }
.Protege-tu-salud-con-una-comida-sana:-manzana-4-hex { color: #F2F2F2; }
.Protege-tu-salud-con-una-comida-sana:-manzana-5-hex { color: #404040; }
*/
export default StyleSheet.create({
  iconECG: {
    width: 150,
    height: 130,
    resizeMode: 'contain',
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
    height: windowHeight * 0.4,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 30,
    borderWidth: 5,
    borderColor: '#404040',
  },
  inputText: {
    color: '#000',
    width: 280,
    paddingLeft: 6,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#F2695C',
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
    backgroundColor: '#F2695C',
    color: '#F2F2F2',
    width: 150,
    paddingVertical: 8,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#A62D37',
    fontSize: 28,
    textAlign: 'center',
  },
});
