import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

import Carousel from 'react-native-carousel';
//import Carousel from 'react-native-looped-carousel';
import CarouselVideoStyles from '../../styles/home/carousel_video_styles.js';
import APIS from '../../service/common/apis.js';
import FetchUtils from '../../service/common/fetchUtils.js';

const styles = StyleSheet.create(CarouselVideoStyles);
export default class CarouselVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
      carouselComedies.forEach((val, index, array)=> {
        carousels.push(<View key={val._id} style={styles.item}>
                  <Image resizeMode="contain" source={{uri: val.poster}} style={styles.images}></Image>
                </View>);
      });
      return carousels;
    }

    render () {
        let carouselsView = this.generateVideos(this.state.carouselComedies);
        return (
          <View style={styles.container}>
              <Carousel
                hideIndicators={false} // Set to true to hide the indicators
                indicatorColor="#60b003" // Active indicator color
                indicatorSize={30} // Indicator bullet size
                indicatorSpace={15} // space between each indicator
                inactiveIndicatorColor="#617984" // Inactive indicator color
                indicatorAtBottom={false} // Set to false to show the indicators at the top
                indicatorOffset={160} // Indicator relative position from top or bottom
                //onPageChange={callback} // Called when the active page changes
                // inactiveIndicatorText= '•' // Inactive indicator content ( You can customize to use any Unicode character )
                // indicatorText= '•' // Active indicator content ( You can customize to use any Unicode character )

                animate={true} // Enable carousel autoplay
                delay={2500} // Set Animation delay between slides
                loop={true} // Allow infinite looped animation. Depends on Prop {...animate} set to true.
                >
                  {
                    this.state.carouselComedies.map((val)=> {
                      console.log(val);
                      return (<View key={val._id} style={styles.item}>
                            <Image resizeMode="contain" source={{uri: val.poster}} style={styles.images}></Image>
                      </View>);
                    })
                  }
              </Carousel>
          </View>
        );
    }
}