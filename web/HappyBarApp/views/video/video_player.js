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
import {CirclesLoader} from 'react-native-indicator'
import {COLORS, FONT_SIZE} from '../../static/static_data.js';

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        volume: 1,
        muted: false,
        resizeMode: 'contain',
        duration: 0.0,
        currentTime: 0.0,
        paused: true,
        poster: 'http://puui.qpic.cn/qqvideo_ori/0/w0026wt3aoj_496_280/0.jpg',
        isLoading: false,
        showPoster: true,
    };
    this.renderResizeModeControl = this.renderResizeModeControl.bind(this);
    this.onLoadStart = this.onLoadStart.bind(this);
    this.pausedOrPlay = this.pausedOrPlay.bind(this)
  }

  video: Video;

  onLoad = (data) => {
    this.setState({ duration: data.duration, isLoading: false });
  };

  onLoadStart() {
    this.setState({isLoading: true});
  }

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

  renderResizeModeControl() {
    if (this.state.resizeMode === 'cover') {
        this.setState({ resizeMode: 'contain' })
    } else {
        this.setState({ resizeMode: 'cover' })
    }
  }

  pausedOrPlay() {
    this.setState({ paused: !this.state.paused });
    if (this.state.showPoster) {
        this.setState({showPoster: false});
    }
  }

  onSeek() {

  }

  render() {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fullScreen}
          onPress={this.pausedOrPlay}
        >
          <Video
            ref={(ref: Video) => { this.video = ref }}
            /* For ExoPlayer */
            //source={{ uri: 'http://www.youtube.com/api/manifest/dash/id/bf5bb2419360daf1/source/youtube?as=fmp4_audio_clear,fmp4_sd_hd_clear&sparams=ip,ipbits,expire,source,id,as&ip=0.0.0.0&ipbits=0&expire=19000000000&signature=51AF5F39AB0CEC3E5497CD9C900EBFEAECCCB5C7.8506521BFC350652163895D4C26DEE124209AA9E&key=ik0', type: 'mpd' }}
            source={{uri: "http://116.211.184.23/vlive.qqvideo.tc.qq.com/Aw10K7GJweK_kLnlg-DVhRjZDt3kHKojKu4NiR2lC2ns/r0200f0s9e6.p202.1.mp4?vkey=4D4398B557E4E0ECBA893846F35116C553E6670C99F2D2C285D48E598F44BBDDF5D4B88E1058CB0F12ECFC76E5AF52F5D1A681A83D44F15393515DBCB674FA44DBF360E14AEDE9F607C0F4AF99C3DF122555F2311748107FFAD931F3F88AAF18563C00B3C2450AA383AF38DBD124E24A4A8C39BD7099382C&platform=4100201&sdtfrom=&fmt=hd&level=0&locid=a600a871-650d-4723-8fbf-59a164fb03bf&size=1127180&ocid=2506233260", mainVer: 1, patchVer: 0}}
            poster={this.state.poster}
            style={styles.fullScreen}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            resizeMode={this.state.resizeMode}
            onLoadStart={this.onLoadStart}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onEnd={this.onEnd}
            onAudioBecomingNoisy={this.onAudioBecomingNoisy}
            onAudioFocusChanged={this.onAudioFocusChanged}
            repeat={false}
            showPoster={this.state.showPoster}
          />
        </TouchableOpacity>

        {
            this.state.paused && !this.state.isLoading?
            (<TouchableOpacity onPress={this.pausedOrPlay}>
                <Icon name="play" size={FONT_SIZE.pausedSize} color={COLORS.themeGreen}/>
            </TouchableOpacity>) : (null)
        }

        {
            this.state.isLoading ? 
            (<CirclesLoader color={COLORS.themeGreen}/>)
            : (null)
        }

        <View style={styles.controls}>
          <View style={styles.trackingControls}>
            <TouchableOpacity onPress={this.pausedOrPlay} style={styles.pausedIcon}>
                {
                    this.state.paused ? 
                    <Icon name="play" size={FONT_SIZE.minPausedSize} color={COLORS.themeGreen}/>
                    : <Icon name="pause" size={FONT_SIZE.minPausedSize} color={COLORS.themeGreen}/>
                }
            </TouchableOpacity>
            <View style={styles.progress}>
              <View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
              <View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
            </View>
            <TouchableOpacity style={styles.expandIcon} onPress={this.renderResizeModeControl}>
                <Icon name="expand" size={FONT_SIZE.minPausedSize} color={COLORS.themeGreen}/>
            </TouchableOpacity>
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
    backgroundColor: COLORS.themeGreen,
  },
  innerProgressRemaining: {
    height: 2,
    backgroundColor: COLORS.themeGray,
  },
});