import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Pressable } from 'react-native';
import stylesForm from '../assets/styles/form.style';
import { logout } from '../redux/actions/user';
class Main extends Component {
  handleLogout = async () => {
    this.props.logout();
  };
  render() {
    return (
      <View>
        <Text>Hola {this.props.user.name}</Text>
        <Pressable onPress={this.handleLogout}>
          <Text style={stylesForm.buttonForm}>Logout</Text>
        </Pressable>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = { logout };
export default connect(mapStateToProps, mapDispatchToProps)(Main);
