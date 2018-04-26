import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
import HomeOne from './screens/HomeOne';
import HomeTwo from './screens/HomeTwo';

import RootNavigation from './navigation/RootNavigation';
import {Drawer} from './navigator';
import { Font, AppLoading } from "expo";
//import './reducers';

//after creating store-> this hooks redux 
import { Provider } from 'react-redux';
import store from './store/store';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
});

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
      'pacifico-regular' : require('./assets/fonts/Pacifico-Regular.ttf'),
      'open-sans-regular' : require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-semibold' : require('./assets/fonts/OpenSans-Semibold.ttf'),
    });
    this.setState({ loading: false });
  }

  render(){
    if (this.state.loading) {
    return(
      <AppLoading />
    );
  }
  return (
    <Provider store = { store } >
      <RootNavigation />
    </Provider>
      //<Drawer />
    
  );
}
}
//export default () => <RootNavigation />;