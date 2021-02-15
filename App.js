import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import compteReducer from './store/reducers/compte';
import CompteNavigator from './navigation/CompteNavigation';

const rootReducer = combineReducers({
  compte: compteReducer
});

const store = createStore(rootReducer);

export default function App() {  
  return (
    <Provider store={store}>
      <CompteNavigator />
    </Provider>
  );
}
