import {COLORS} from '../static/static_data.js';

const HeaderStyles = {
  header: {
    height: 40,
    display: 'flex',
    backgroundColor: '#e8e8e8',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  icon: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
  },
  imgLogo: {
    height: 30,
    width: 30,
  },
  headerText: {
    fontSize: 22,
    color: COLORS.themeGreen,
    fontFamily: 'unset',
    fontStyle: 'italic',
    width: 60
  },
  headerTools: {
    flex: 1,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  input: {
    flexGrow: 9,
  },
  search: {
    flexGrow: 1
  }
};

export default HeaderStyles;