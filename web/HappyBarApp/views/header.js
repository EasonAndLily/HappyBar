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
            underlineColorAndroid="#60b003"
            selectionColor="#60b003"  />
            <TouchableOpacity style={styles.search}>
              <Icon name="search" size={20} color="#60b003"/>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 40,
    display: 'flex',
    backgroundColor: '#e8e8e8',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  icon: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
  },
  imgLogo: {
    height: 30,
    width: 30,
  },
  headerText: {
    fontSize: 22,
    color: '#60b003',
    fontFamily: 'unset',
    fontStyle: 'italic',
    width: 60
  },
  headerTools: {
    flex: 1,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  input: {
    flexGrow: 9,
  },
  search: {
    flexGrow: 1
  }
});
