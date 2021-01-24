import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import styles from '../assets/styles/register.style';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { login } from '../redux/actions/user';

class Login extends Component {
  state = {
    name: null,
    age: null,
    isValidName: false,
    isValidAge: false,
  };
  handleName = (event) => {
    this.setState({ name: event.nativeEvent.text });
    if (
      /^([A-Z\u00d1]{1,1}[a-záéíóú\u00f1]{2,12})[\s]?([A-Z\u00d1]?[a-z\u00d1]{2,12})?$/.test(
        event.nativeEvent.text
      )
    ) {
      this.setState({ isValidName: true });
    } else {
      this.setState({ isValidName: false });
    }
  };

  handleAge = (event) => {
    this.setState({ age: Number(event.nativeEvent.text) });
    if (/^([0-9]{1,2})$/.test(event.nativeEvent.text)) {
      this.setState({ isValidAge: true });
    } else {
      this.setState({ isValidAge: false });
    }
  };
  handleSubmit = () => {
    const name = this.state.name;
    const age = this.state.age;
    if (this.state.isValidAge && this.state.isValidName) {
      this.props.login(name, age);
      this.props.navigation.dispatch(
        CommonActions.navigate({
          name: 'Main',
          params: {
            origin: 'register',
          },
        })
      );
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.containerGlobal}>
        <Image
          source={require('../assets/images/limpo.png')}
          style={styles.iconECG}
        />
        <View style={styles.containerForm}>
          <TextInput
            name="name"
            placeholder="Nombre"
            style={styles.inputText}
            onChange={this.handleName}
          />
          <TextInput
            placeholder="Edad"
            name="age"
            underlineColorAndroid="transparent"
            style={styles.inputText}
            keyboardType={'numeric'}
            maxLength={2}
            onChange={this.handleAge}
          />
          {(!this.state.isValidAge || !this.state.isValidName) &&
            this.state.age !== null && <Text> Datos Invalidos</Text>}
          <TouchableOpacity onPress={this.handleSubmit}>
            <Text style={styles.buttonForm}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(Login);
