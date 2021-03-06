import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  RefreshControl,
  Image
} from 'react-native';

import HomeNav from './home_nav.js';
import CarouselVideo from './carousel_video.js';
import ContentList from './content_list.js';
import HomeStyles from '../../styles/home/home_styles.js';
import APIS from '../../service/common/apis.js';
import FetchUtils from '../../service/common/fetchUtils.js';
import LogoTitle from './logo_title.js';
import HeaderSearch from './header_search.js';

const styles = StyleSheet.create(HomeStyles);
export default class HomePage extends Component<> {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.state = {
      carouselComedies: [],
      categoryComedies: []
    };
  }

  static navigationOptions = ({ navigation }) => {
    //const params = navigation.state.params || {};

    return {
      headerLeft: <LogoTitle />,
      headerTitle: <HeaderSearch />,
      headerStyle: {
        height: 40
      }
    };
  };

  componentDidMount() {
      this.getData();
  }

  getData() {
    let homeURL = APIS.getHomeComedies
    FetchUtils.getRequest(homeURL, (data)=> {
      this.setState({
        carouselComedies: data.carouselComedies,
        categoryComedies: data.categoryComedies
      });
      
    }, (err) => {
      alert(err);
    });
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
          <CarouselVideo carouselComedies={this.state.carouselComedies} navigation={this.props.navigation}/>
          <ContentList categoryComedies={this.state.categoryComedies}/>
        </ScrollView>
      </View>
    );
  }
}

