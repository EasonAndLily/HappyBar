import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import LogoTitleStyles from '../../styles/home/logo_title_styles.js';
import {COLORS} from '../../static/static_data.js';

const styles = StyleSheet.create(LogoTitleStyles);

export default class LogoTitle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.icon}>
        <Image source={require('../../images/happy_bar_icon.png')} style={styles.imgLogo}></Image>
        <Text style={styles.headerText}>
          笑吧
        </Text>
      </View>
    );
  }
}