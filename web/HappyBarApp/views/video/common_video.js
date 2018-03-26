import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Video from 'react-native-video';

export default class CommonVideo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <Video 
                source={{uri: "http://vali.cp31.ott.cibntv.net/youku/69757de0e304971d07fb4533e/03000A01005AA8E27E53891518ABB5C68960D8-7ECD-6F50-AE98-E417C4E5FCA4.mp4?sid=052206983900010001862_00_Ada93d82d9e2c7632a9ff4d12d3ed70ab&sign=552ad78c2fda073a15a56e00a0536d41&ctype=50", mainVer: 1, patchVer: 0}} // Looks for .mp4 file (background.mp4) in the given expansion version.
                   //poster="https://vthumb.ykimg.com/054201015AB3C0848B3255A9B5BB9157.jpg" // uri to an image to display until the video plays
                   rate={1.0}                   // 0 is paused, 1 is normal.
                   volume={1.0}                 // 0 is muted, 1 is normal.
                   muted={false}                // Mutes the audio entirely.
                   paused={false}               // Pauses playback entirely.
                   resizeMode="cover"           // Fill the whole screen at aspect ratio.
                   repeat={false}                // Repeat forever.
                   //onLoadStart={this.loadStart} // Callback when video starts to load
                   //onLoad={this.setDuration}    // Callback when video loads
                   //onProgress={this.setTime}    // Callback every ~250ms with currentTime
                   //onEnd={this.onEnd}           // Callback when playback finishes
                   //onError={this.videoError}    // Callback when video cannot be loaded
                   style={styles.backgroundVideo}
                   playInBackground={true}  />
            </View>
        );
    }

}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    height: 200
  }
});