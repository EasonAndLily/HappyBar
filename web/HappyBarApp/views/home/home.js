import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  RefreshControl
} from 'react-native';

import HomeNav from './home_nav.js';
import CarouselVideo from './carousel_video.js';
import ContentList from './content_list.js';
import HomeStyles from '../../styles/home/home_styles.js';
import APIS from '../../service/common/apis.js';
import FetchUtils from '../../service/common/fetchUtils.js';

const styles = StyleSheet.create(HomeStyles);
export default class HomePage extends Component<> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <HomeNav />
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={true}
          contentContainerStyle={styles.containerStyle}
              refreshControl = {
                <RefreshControl refreshing={false} tintColor="red" 
                title="freshing..." onRefresh={this.refresh}/>
              }>
          <CarouselVideo />
          <ContentList />
        </ScrollView>
      </View>
    );
  }
}

