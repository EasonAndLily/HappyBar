import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeNavigator from './home/home_navigator.js';
import CommonVideo from './video/common_video.js';
import VideoPlayer from './video/video_player.js';
import BottomNavStyles from '../styles/buttom_nav_styles.js';
import {COLORS, FONT_SIZE} from '../static/static_data.js';

const styles = StyleSheet.create(BottomNavStyles);
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
            renderIcon={()=><Icon name="home" size={FONT_SIZE.navSize} color={COLORS.themeGray}/>}
            renderSelectedIcon={()=><Icon name="home" size={FONT_SIZE.navSize} color={COLORS.themeGreen}/>}
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <HomeNavigator />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'vip'}
            title="会员"
            titleStyle={styles.title}
            selectedTitleStyle={styles.selectTitle}
            renderIcon={()=><Icon name="vimeo" size={FONT_SIZE.navSize} color={COLORS.themeGray}/>}
            renderSelectedIcon={()=><Icon name="vimeo" size={FONT_SIZE.navSize} color={COLORS.themeGreen}/>}
            onPress={() => this.setState({ selectedTab: 'vip' })}>
            <VideoPlayer />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'comment'}
            title="评论"
            titleStyle={styles.title}
            selectedTitleStyle={styles.selectTitle}
            renderIcon={()=><Icon name="comment" size={FONT_SIZE.navSize} color={COLORS.themeGray}/>}
            renderSelectedIcon={()=><Icon name="comment" size={FONT_SIZE.navSize} color={COLORS.themeGreen}/>}
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
            renderIcon={()=><Icon name="user" size={FONT_SIZE.navSize} color={COLORS.themeGray}/>}
            renderSelectedIcon={()=><Icon name="user" size={FONT_SIZE.navSize} color={COLORS.themeGreen}/>}
            onPress={() => this.setState({ selectedTab: 'mine' })}>
            <Text>
              mine
            </Text>
          </TabNavigator.Item>
        </TabNavigator>
    );
  }
}
