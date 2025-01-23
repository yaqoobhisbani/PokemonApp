import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';
import {Provider} from 'react-redux';
import store from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
