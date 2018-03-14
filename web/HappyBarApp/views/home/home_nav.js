import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import HomeNavStyles from '../../styles/home/home_nav_styles.js';
const styles = StyleSheet.create(HomeNavStyles);
export default class HomeNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.selectedText}>
                    推荐
                </Text>
                <Text style={styles.text}>
                    视频
                </Text>
                <Text style={styles.text}>
                    图片
                </Text>
                <Text style={styles.text}>
                    段子
                </Text>
                <Text style={styles.text}>
                    精选
                </Text>
                <Icon name="list-ul" size={22} color="#617984" style={styles.icon}/>
            </View>
        );
    }
}