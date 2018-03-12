import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Carousel from 'react-native-carousel';

export default class CarouselVideo extends Component {
    constructor(props) {
        super(props);
    }

    render () {
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
                <View style={styles.item}>
                  <Image source={require('../../images/001.jpg')} style={styles.images}></Image>
                </View>
                <View style={styles.item}>
                  <Image source={require('../../images/002.jpg')} style={styles.images}></Image>
                </View>
                <View style={styles.item}>
                  <Image source={require('../../images/003.jpg')} style={styles.images}></Image>
                </View>
              </Carousel>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
      },
    images: {
        height: 200,
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
    }
});