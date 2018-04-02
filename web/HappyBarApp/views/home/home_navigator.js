import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import HomePage from './home.js';
import VideoPlayer from '../../views/video/video_player.js';

const HomeStack = StackNavigator(
    {
        Home: {
            screen: HomePage,
        },
        VideoPlayer: {
            screen: VideoPlayer,
        },
    },
    {
        initialRouteName: 'Home',
    }
);

export default class HomeNavigator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <HomeStack />;
    }
}