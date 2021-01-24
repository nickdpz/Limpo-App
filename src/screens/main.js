import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { Text, SafeAreaView, ScrollView } from 'react-native';
class Main extends Component {
  constructor(props) {
    super(props);
    if (props.route.params.origin === 'register') {
      props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {
              name: 'Main',
              params: { origin: 'main', key: props.route.params.key },
            },
          ],
        })
      );
    }
  }

  render() {
    return (
      <>
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text>Hola {this.props.user.userName}</Text>
            <Text>{this.props.user.userAge} EDAD</Text>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Main);
