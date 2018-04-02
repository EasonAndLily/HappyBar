import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  StyleSheet,
} from 'react-native';

import BottomNav  from './views/bottom_nav.js';
import AppStyles from './styles/app_styles.js';

const styles = StyleSheet.create(AppStyles);


export default class App extends Component<{}> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <BottomNav />
      </View>
    );
  }
}
