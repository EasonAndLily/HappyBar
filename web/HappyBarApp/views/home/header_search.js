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
import HeaderSearchStyles from '../../styles/home/home_search_styles.js';
import {COLORS} from '../../static/static_data.js';

const styles = StyleSheet.create(HeaderSearchStyles);

export default class HeaderSearch extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.headerTools}>
        <TextInput placeholder="全网检索..." style={styles.input}
        placeholderTextColor="#67ba0a"
        underlineColorAndroid={COLORS.themeGreen}
        selectionColor={COLORS.themeGreen}  />
        <TouchableOpacity style={styles.search}>
          <Icon name="search" size={20} color={COLORS.themeGreen}/>
        </TouchableOpacity>
      </View>
    );
  }
}