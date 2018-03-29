import {
  Dimensions
} from 'react-native';

const COLORS = {
    themeGreen: '#60b003',
    themeGray: '#617984',
    pausedWhite: "#fff",
};

const DEVICE = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

const FONT_SIZE = {
    navSize: 25,
    pausedSize: 35,
    minPausedSize: 20,
}

export {COLORS, DEVICE, FONT_SIZE};