import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

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

const styles = StyleSheet.create({
    container: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        flexGrow: 1,
        fontSize: 18,
        color: '#617984'
    },
    selectedText: {
        flexGrow: 1,
        color: '#60b003',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 30
    },
    icon: {
        flexGrow: 1,
    }
});