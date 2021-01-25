import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux';
import Router from './src/route';
import { PersistGate } from 'redux-persist/integration/react';
import { Text, ActivityIndicator, View, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  loader: {
    marginTop: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App = () => (
  <Provider store={store}>
    <PersistGate
      loading={
        <View style={style.loader}>
          <ActivityIndicator color="#253c99" size="large" />
          <Text>loading ..</Text>
        </View>
      }
      persistor={persistor}
    >
      <Router />
    </PersistGate>
  </Provider>
);
export default App;
