import React from 'react';
import { registerRootComponent } from 'expo';
import RootNavigator from './navigation';

function App(){
  return <RootNavigator />
}

export default App;

registerRootComponent(App);
