import {COLORS, DEVICE} from '../../static/static_data.js';

const ContentListStyle = {
    container: {
        flex: 1,
        marginTop: 10,
        width: DEVICE.width - 10,
    },
    separator: {
        height: 1,
        backgroundColor: COLORS.themeGray,
        marginBottom: 3,
    },
    comedyItem: {
      flexDirection: "column",
      marginTop: 10,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 18,
        color: COLORS.themeGray,
        fontWeight: '200',
        fontFamily: 'unset',
        flexGrow: 9,
    },
    titleIcon: {
        alignSelf: 'flex-end',
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: "center",
    },
    imageAndText: {
        flexDirection: 'column',
        width: DEVICE.width / 2 -5,
    },
    imageLeft: {
        height: 100,
        width: DEVICE.width / 2 - 10,
        borderRadius: 5,
    },
    imageRight: {
        height: 100,
        width: DEVICE.width / 2 - 10,
        borderRadius: 5,
        alignSelf: 'flex-end',
    },
    name: {
        fontSize: 12,
        color: COLORS.themeGray,
        fontFamily: 'unset'
    }
};

export default ContentListStyle;