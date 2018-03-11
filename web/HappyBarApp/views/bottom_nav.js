import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomePage from './home/home.js';

export default class BottomNav extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    }
  }
  render() {
    return (
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="首页"
            titleStyle={styles.title}
            selectedTitleStyle={styles.selectTitle}
            renderIcon={()=><Icon name="home" size={25} color="#617984"/>}
            renderSelectedIcon={()=><Icon name="home" size={25} color="#60b003"/>}
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <HomePage />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'vip'}
            title="会员"
            titleStyle={styles.title}
            selectedTitleStyle={styles.selectTitle}
            renderIcon={()=><Icon name="vimeo" size={25} color="#617984"/>}
            renderSelectedIcon={()=><Icon name="vimeo" size={25} color="#60b003"/>}
            onPress={() => this.setState({ selectedTab: 'vip' })}>
            <Text>
              vip
            </Text>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'comment'}
            title="评论"
            titleStyle={styles.title}
            selectedTitleStyle={styles.selectTitle}
            renderIcon={()=><Icon name="comment" size={25} color="#617984"/>}
            renderSelectedIcon={()=><Icon name="comment" size={25} color="#60b003"/>}
            onPress={() => this.setState({ selectedTab: 'comment' })}>
            <Text>
              comment
            </Text>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'mine'}
            title="我的"
            titleStyle={styles.title}
            selectedTitleStyle={styles.selectTitle}
            renderIcon={()=><Icon name="user" size={25} color="#617984"/>}
            renderSelectedIcon={()=><Icon name="user" size={25} color="#60b003"/>}
            onPress={() => this.setState({ selectedTab: 'mine' })}>
            <Text>
              mine
            </Text>
          </TabNavigator.Item>
        </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
    title: {
        color: '#617984'
    },
    selectTitle: {
        color: '#60b003'
    }
});
