/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react'
import MainContainer from './navigation/mainContainer';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  return (
    <MainContainer />
  );
};

export default App;

// npx react-native run-android
// to display if phone is connected, run in cmd: adb devices (turn on USB debugging in phone)