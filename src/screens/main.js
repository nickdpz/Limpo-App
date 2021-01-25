import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import styles from '../assets/styles/main.style';
import { logout } from '../redux/actions/user';
import { Avatar, Card, Text, Icon } from 'react-native-elements';
class Main extends Component {
  handleNavigation = async () => {
    this.props.navigation.navigate('Chat');
  };
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <View style={styles.containerInfo}>
            <Avatar
              rounded
              source={{
                uri: 'https://randomuser.me/api/portraits/men/41.jpg',
              }}
              size="large"
            />
            <Text
              h3
              style={styles.mx2}
            >{`Hello ${this.props.user.name} ${this.props.user.lastName}`}</Text>
          </View>
        </Card>
        <View
          style={[styles.my, styles.containerInfo, styles.containerJustify]}
        >
          <Text h5>Talk with limpo bot </Text>
          <Icon
            raised
            onPress={this.handleNavigation}
            name="envelope-square"
            type="font-awesome"
          />
        </View>
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
