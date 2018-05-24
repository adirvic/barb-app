import React from 'react';

import { createStackNavigator  } from 'react-navigation'; // Version can be specified in package.json
import { HomeScreen } from './view/HomeScreen'

const RootStack = createStackNavigator (
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
