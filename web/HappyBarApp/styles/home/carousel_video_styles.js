import {DEVICE} from '../../static/static_data.js';
const CarouselVideoStyles = {
    container: {
        height: 200,
        width: DEVICE.width - 10,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
      },
    images: {
        height: 200,
        width: DEVICE.width - 10,
    }
};

export default CarouselVideoStyles;