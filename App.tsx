import React from 'react';

// Navigation
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import AppScreens from './src/appScreens';

const navTheme = DefaultTheme;
navTheme.colors.background = 'white';

function App() {
  return (

    <NavigationContainer theme={navTheme}>
      <AppScreens />
    </NavigationContainer>

  );
}


export default App;