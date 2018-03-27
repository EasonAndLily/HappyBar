import React, {
  Component
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONT_SIZE} from '../../static/static_data.js';

export default class VideoPlayer extends Component {

  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    paused: true,
    poster: 'http://puui.qpic.cn/qqvideo_ori/0/w0026wt3aoj_496_280/0.jpg',
  };

  video: Video;

  onLoad = (data) => {
    this.setState({ duration: data.duration });
  };

  onProgress = (data) => {
    this.setState({ currentTime: data.currentTime });
  };

  onEnd = () => {
    this.setState({ paused: true })
    this.video.seek(0)
  };

  onAudioBecomingNoisy = () => {
    this.setState({ paused: true })
  };

  onAudioFocusChanged = (event: { hasAudioFocus: boolean }) => {
    this.setState({ paused: !event.hasAudioFocus })
  };

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    }
    return 0;
  };

  renderRateControl(rate) {
    const isSelected = (this.state.rate === rate);

    return (
      <TouchableOpacity onPress={() => { this.setState({ rate }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {rate}x
        </Text>
      </TouchableOpacity>
    );
  }

  renderResizeModeControl(resizeMode) {
    const isSelected = (this.state.resizeMode === resizeMode);

    return (
      <TouchableOpacity onPress={() => { this.setState({ resizeMode }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {resizeMode}
        </Text>
      </TouchableOpacity>
    )
  }

  renderVolumeControl(volume) {
    const isSelected = (this.state.volume === volume);

    return (
      <TouchableOpacity onPress={() => { this.setState({ volume }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    )
  }

  pausedOrPlay() {
    this.setState({ paused: !this.state.paused });
  }

  render() {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fullScreen}
          onPress={this.pausedOrPlay.bind(this)}
        >
          <Video
            ref={(ref: Video) => { this.video = ref }}
            /* For ExoPlayer */
            //source={{ uri: 'http://www.youtube.com/api/manifest/dash/id/bf5bb2419360daf1/source/youtube?as=fmp4_audio_clear,fmp4_sd_hd_clear&sparams=ip,ipbits,expire,source,id,as&ip=0.0.0.0&ipbits=0&expire=19000000000&signature=51AF5F39AB0CEC3E5497CD9C900EBFEAECCCB5C7.8506521BFC350652163895D4C26DEE124209AA9E&key=ik0', type: 'mpd' }}
           // source={require('./broadchurch.mp4')}
            source={{uri: "http://116.211.73.14/sports.tc.qq.com/AB4oMLlRVL9UDYG3Blw2az5JoxCOh9lbldp0B8782gjk/s0026zjmd65.p201.1.mp4?sdtfrom=v1001&type=mp4&vkey=37C92CA6905675DFD259EE73CF243AB7CDA1BB9DB758C5CAB0858B93D18C7749FFD428DB1948602CB30BB0C6108EBF243CC687B7B87CFE6A5A8A8C892C1B77A48D6641608276E74F9BCE5E90A8F5505AEED122C4969BBB4A3152994C2CD5F8E54A448D2C4301F209E27C204498E8B443137ED849CD0B63E2&level=0&platform=11&br=284&fmt=shd&sp=0&guid=044D977072DAA5BA1CFA5F26A09F0C6B5BB2299C&locid=94f07dc8-b4bb-4443-bcda-1838ba3be7c4&size=64091857&ocid=385032108", mainVer: 1, patchVer: 0}}
            //poster={this.state.poster}
            style={styles.fullScreen}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onEnd={this.onEnd}
            onAudioBecomingNoisy={this.onAudioBecomingNoisy}
            onAudioFocusChanged={this.onAudioFocusChanged}
            repeat={false}
          />
        </TouchableOpacity>

        {
            this.state.paused ?
            (<TouchableOpacity onPress={() => this.setState({ paused: !this.state.paused })}>
                <Icon name="play" size={FONT_SIZE.pausedSize} color={COLORS.pausedWhite}/>
            </TouchableOpacity>) : (null)
        }

        <View style={styles.controls}>
          <View style={styles.generalControls}>
            <View style={styles.rateControl}>
              {this.renderRateControl(0.25)}
              {this.renderRateControl(0.5)}
              {this.renderRateControl(1.0)}
              {this.renderRateControl(1.5)}
              {this.renderRateControl(2.0)}
            </View>

            <View style={styles.volumeControl}>
              {this.renderVolumeControl(0.5)}
              {this.renderVolumeControl(1)}
              {this.renderVolumeControl(1.5)}
            </View>

            <View style={styles.resizeModeControl}>
              {this.renderResizeModeControl('cover')}
              {this.renderResizeModeControl('contain')}
              {this.renderResizeModeControl('stretch')}
            </View>
          </View>

          <View style={styles.trackingControls}>
            <TouchableOpacity onPress={() => this.setState({ paused: !this.state.paused })} style={styles.pausedIcon}>
                {
                    this.state.paused ? 
                    <Icon name="play" size={FONT_SIZE.minPausedSize} color={COLORS.pausedWhite}/>
                    : <Icon name="pause" size={FONT_SIZE.minPausedSize} color={COLORS.pausedWhite}/>
                }
            </TouchableOpacity>
            <View style={styles.progress}>
              <View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
              <View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
            </View>
            <View style={styles.expandIcon}>
                <Icon name="expand" size={FONT_SIZE.minPausedSize} color={COLORS.pausedWhite}/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height: 200,
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
  },
  trackingControls: {
    display: 'flex',
    flexDirection: 'row',
    height: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 2,
    overflow: 'hidden',
  },
  pausedIcon: {
    width: 30,
  },
  expandIcon: {
    width: 30,
    paddingLeft: 10,
  },
  innerProgressCompleted: {
    height: 2,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 2,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    overflow: 'hidden',
    paddingBottom: 10,
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: 'white',
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
});