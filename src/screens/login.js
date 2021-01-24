import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  //TouchableOpacity,
  ActivityIndicator,
  Keyboard,
  Pressable,
  View,
  Image,
} from 'react-native';
import styles from '../assets/styles/form.style';
import { connect } from 'react-redux';
import { login } from '../redux/actions/user';
import { setError, clearError } from '../redux/actions/app';

class Login extends Component {
  state = {
    user_email: '',
    password: '',
    isValidUserEmail: null,
    isValidPass: null,
  };
  validator = (name, value) => {
    let out = false;
    switch (name) {
      case 'user_email':
        out = /^(\w\._\-]{3,25}@[\w\.\-]{3,30}\.\w{2,5})|([a-zñ]+[^A-Z\s%$@\^]{2,16})$/.test(
          value
        );
        this.setState({
          isValidUserEmail: out,
          user_email: value,
        });
        break;
      case 'password':
        out = /^[ñÑáéíóú\w\u00f1\u00d1]{8,30}$/.test(value);
        this.setState({
          isValidPass: out,
          password: value,
        });
        break;
      default:
        this.setState({ [name]: value });
        break;
    }
    return out;
  };

  validatorInfo = () => {
    const isValidUserEmail = this.validator(
      'user_email',
      this.state.user_email
    );
    const isValidPass = this.validator('user_email', this.state.password);
    setTimeout(() => {
      this.setState({
        isValidPass,
        isValidUserEmail,
      });
    }, 100);
    return isValidPass && isValidUserEmail;
  };

  handleChange = (event) => {
    this.validator(
      event._dispatchInstances.pendingProps.name,
      event.nativeEvent.text
    );
  };

  handleSubmit = async () => {
    Keyboard.dismiss();
    if (this.validatorInfo()) {
      this.props.clearError();
      try {
        await this.props.login(this.state.user_email, this.state.password);
        this.props.navigation.navigate('Main');
      } catch (error) {
        this.state.user_email = '';
        this.state.password = '';
      }
    } else {
      this.props.setError(
        'Invalid info',
        'Enter a valid username and password'
      );
    }
  };

  render() {
    console.log(this.props.user);
    return (
      <SafeAreaView style={styles.containerGlobal}>
        <Image
          source={require('../assets/images/limpo_logo.webp')}
          style={styles.iconLogin}
        />
        <View style={styles.containerForm}>
          <TextInput
            name="user_email"
            placeholder="User or email"
            style={styles.inputText}
            autoCapitalize="none"
            onChange={this.handleChange}
          />
          <TextInput
            name="password"
            inlineImageLeft="search_icon"
            secureTextEntry={true}
            placeholder="Password"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            style={styles.inputText}
            onChange={this.handleChange}
          />
          {this.props.app.error.state && (
            <>
              <Text style={styles.errorTitle}>
                {this.props.app.error.title}
              </Text>
              <Text style={styles.errorMessage}>
                {this.props.app.error.message}
              </Text>
            </>
          )}
          <Pressable disable={true} onPress={this.handleSubmit}>
            <Text style={styles.buttonForm}>Login</Text>
          </Pressable>
          {this.props.app.loading ? (
            <ActivityIndicator
              style={styles.loader}
              color="#253c99"
              size="large"
            />
          ) : null}
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    app: state.app,
    user: state.user,
  };
};

const mapDispatchToProps = { login, setError, clearError };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
