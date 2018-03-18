import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import CarouselVideoStyles from '../../styles/home/carousel_video_styles.js';
import {DEVICE} from '../../static/static_data.js';
import APIS from '../../service/common/apis.js';
import FetchUtils from '../../service/common/fetchUtils.js';

const styles = StyleSheet.create(CarouselVideoStyles);
export default class CarouselVideo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: { 
        width: DEVICE.width, 
        "height" : 200 
      },
      carouselComedies: []
    };
    this.getHomeData = this.getHomeData.bind(this);
  }

  componentWillMount () {
      this.getHomeData();
  }

  getHomeData() {
    let homeURL = APIS.getHomeComedies
    FetchUtils.getRequest(homeURL, (data)=> {
      this.setState({
        carouselComedies: data.carouselComedies
      });
    }, (err) => {
      alert(err);
    });
  }

  generateVideos(carouselComedies) {
    let carousels = [];
    if (carouselComedies.length <= 0) {
      carousels.push(<View key="1"><Text>No Data</Text></View>);
    } else {
      carouselComedies.map((val)=> {
        carousels.push(<View key={val._id} style={styles.item}>
                  <Image resizeMode="contain" source={{uri: val.poster}} style={styles.images}></Image>
                </View>);
      });
    }
    
    return carousels;
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  render() {
    let carouselsView = this.generateVideos(this.state.carouselComedies);
    return (
      <View style={styles.container} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={2000}
          style={this.state.size}
          autoplay
          pageInfo
          onAnimateNextPage={(p) => console.log(p)}
        >
          {carouselsView}
        </Carousel>
      </View>
    );
  }
}