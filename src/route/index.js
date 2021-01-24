import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import Main from '../screens/main';
import Login from '../screens/login';
import Register from '../screens/register';

const Stack = createStackNavigator();

const Router = (props) => (
  <>
    {props.app.login ? (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={props.app.initialRoute}
          screenOptions={{
            headerStyle: {
              backgroundColor: '#37a726',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Main"
            component={Main}
            options={
              {
                //             tabBarIcon: ({ size, color }) => (
                //               <Image
                //                 style={{ tintColor: color, width: size, height: size }}
                //                 source={require('./src/assets/images/logo.png')}
                //               />
                //             ),
              }
            }
          />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    ) : (
      <Login />
    )}
  </>
);

const mapStateToProps = (state) => {
  return {
    app: state.app,
  };
};

export default connect(mapStateToProps)(Router);
