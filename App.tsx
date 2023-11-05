import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';

import Stack from './src/stack';
import store, {persistor} from './src/store';

//
//

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
