import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    borderRadius: 5,
    padding: 10,
  },
  name: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  messageOwn: {
    backgroundColor: '#DCF8C5',
    marginLeft: 50,
    marginRight: 0,
  },
  messageOther: {
    backgroundColor: 'white',
    marginLeft: 0,
    marginRight: 50,
  },
  time: {
    alignSelf: 'flex-end',
    color: 'grey',
  },
});

export default styles;
