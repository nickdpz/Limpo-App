import * as React from 'react';

import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/user';
import Main from '../screens/main';
import Login from '../screens/login';
import Chat from '../screens/chat';
import styles from '../assets/styles/global.style';
const Stack = createStackNavigator();

const Router = (props) => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#37a726',
        },
        headerTintColor: '#F2F2F2',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      {!props.app.login ? (
        <>
          <Stack.Screen name="Login" component={Login} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              headerRight: () => (
                <Icon
                  name="sign-out"
                  type="font-awesome"
                  containerStyle={styles.ml2}
                  color="#f2f2f2"
                  onPress={() => {
                    props.logout();
                  }}
                />
              ),
            }}
          />
          <Stack.Screen name="Chat" component={Chat} />
        </>
      )}
    </Stack.Navigator>
  </NavigationContainer>
);

const mapStateToProps = (state) => ({
  app: state.app,
});
const mapDispatchToProps = { logout };
export default connect(mapStateToProps, mapDispatchToProps)(Router);
