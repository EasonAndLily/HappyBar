import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Dimensions
} from 'react-native';

const tempDate = [{
    title: "暴走大事件",
    imageUrl: 'http://pic8.qiyipic.com/image/20161216/f7/ae/v_111481696_m_601_180_101.jpg',
    name: '王尼玛发福了！'
},{
    title: "暴走大事件",
    imageUrl: 'http://pic8.qiyipic.com/image/20161216/f7/ae/v_111481696_m_601_180_101.jpg',
    name: '王尼玛发福了！'
},
{
    title: "陈翔六点半",
    imageUrl: 'http://pic6.qiyipic.com/image/20180227/c8/b8/v_115024909_m_601_180_101.jpg',
    name: '美女绑上富豪！'
},
{
    title: "陈翔六点半",
    imageUrl: 'http://pic6.qiyipic.com/image/20180227/c8/b8/v_115024909_m_601_180_101.jpg',
    name: '美女绑上富豪！'
},
{
    title: "全员加速中",
    imageUrl: 'http://pic6.qiyipic.com/image/20180227/c8/b8/v_115024909_m_601_180_101.jpg',
    name: '王尼玛发福了！'
},
{
    title: "全员加速中",
    imageUrl: 'http://pic6.qiyipic.com/image/20180227/c8/b8/v_115024909_m_601_180_101.jpg',
    name: '王尼玛发福了！'
}];

export default class ContentList extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => {
                oldRow !== newRow;
            },
        });
        this.state = {dataSource: ds.cloneWithRows(tempDate)};
    }

    renderRow(comedy) {
        return (
            <View style={styles.comedyItem}>
              <View>
                <Text style={styles.title}>
                  {comedy.title}
                </Text>
              </View>
              <View style={styles.separator}>
              </View>
              <View style={styles.imageContainer}>
                <View style={styles.imageAndText}>
                  <Image source={{uri: comedy.imageUrl}} style={styles.image}/>
                  <Text style={styles.name}>
                    {comedy.name}
                  </Text>
                </View>
                <View style={styles.imageAndText}>
                  <Image source={{uri: comedy.imageUrl}} style={styles.image}/>
                  <Text style={styles.name}>
                    {comedy.name}
                  </Text>
                </View>
              </View>
            </View>
        );
    }

    render() {
        return(
            <ListView dataSource={this.state.dataSource} renderRow={this.renderRow}
             style={styles.container} initialListSize={10}>
            </ListView>
        );
    }
}
export const deviceWidth = Dimensions.get('window').width; 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    separator: {
        height: 1,
        backgroundColor: "#617984",
        marginBottom: 3,
        width: deviceWidth - 25,
    },
    comedyItem: {
      flexDirection: "column",
      padding: 5,
      margin: 5,
    },
    title: {
        fontSize: 18,
        color: '#617984',
        fontWeight: '200',
        fontFamily: 'unset'
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: "center",
    },
    imageAndText: {
        flexDirection: 'column',
        flexGrow: 1,
    },
    image: {
        height: 100,
        width: deviceWidth / 2 - 14,
    },
    name: {
        fontSize: 12,
        color: '#617984',
        fontFamily: 'unset'
    }

});