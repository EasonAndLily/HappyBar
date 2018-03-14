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
import HeaderStyles from '../styles/header_styles.js';
import {COLORS} from '../static/static_data.js';

const styles = StyleSheet.create(HeaderStyles);

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View name='header' style={styles.header}>
          <View style={styles.icon}>
            <Image source={require('../images/happy_bar_icon.png')} style={styles.imgLogo}></Image>
            <Text style={styles.headerText}>
              笑吧
            </Text>
          </View>
          <View style={styles.headerTools}>
            <TextInput placeholder="全网检索..." style={styles.input}
            placeholderTextColor="#67ba0a"
            underlineColorAndroid={COLORS.themeGreen}
            selectionColor={COLORS.themeGreen}  />
            <TouchableOpacity style={styles.search}>
              <Icon name="search" size={20} color={COLORS.themeGreen}/>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}