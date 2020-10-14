import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider as StoreProvider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import showcaseReducer from './redux/showcase/showcase.reducer';

const appReducer = combineReducers({
  showcase: showcaseReducer,
});

const store = createStore(appReducer, compose(applyMiddleware(thunk)));

const Stack = createStackNavigator();

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
