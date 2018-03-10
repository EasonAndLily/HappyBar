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


export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="首页"
            renderIcon={()=><Icon name="home" size={25} color="#617984"/>}
            renderSelectedIcon={()=><Icon name="home" size={25} color="#4F8EF7"/>}
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <Text>
              home
            </Text>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'vip'}
            title="会员"
            renderIcon={()=><Icon name="vimeo" size={25} color="#617984"/>}
            renderSelectedIcon={()=><Icon name="vimeo" size={25} color="#4F8EF7"/>}
            onPress={() => this.setState({ selectedTab: 'vip' })}>
            <Text>
              vip
            </Text>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'comment'}
            title="评论"
            renderIcon={()=><Icon name="comment" size={25} color="#617984"/>}
            renderSelectedIcon={()=><Icon name="comment" size={25} color="#4F8EF7"/>}
            onPress={() => this.setState({ selectedTab: 'comment' })}>
            <Text>
              comment
            </Text>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'mine'}
            title="我的"
            renderIcon={()=><Icon name="user" size={25} color="#617984"/>}
            renderSelectedIcon={()=><Icon name="user" size={25} color="#4F8EF7"/>}
            onPress={() => this.setState({ selectedTab: 'mine' })}>
            <Text>
              mine
            </Text>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  bookTabPanel: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  movieTabPanel: {
    flex: 1,
    backgroundColor: 'blue'
  }
});
