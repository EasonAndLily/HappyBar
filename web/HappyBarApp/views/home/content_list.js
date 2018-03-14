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
import Icon from 'react-native-vector-icons/FontAwesome';
import ContentListStyle from '../../styles/home/content_list_styles.js';
import {COLORS} from '../../static/static_data.js';

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
const styles = StyleSheet.create(ContentListStyle);
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
              <View style={styles.titleContainer}>
                <Text style={styles.title}>
                  {comedy.title}
                </Text>
                <Icon name="angle-right" style={styles.titleIcon} size={22} color={COLORS.themeGray} />
              </View>
              <View style={styles.separator}>
              </View>
              <View style={styles.imageContainer}>
                <View style={styles.imageAndText}>
                  <Image source={{uri: comedy.imageUrl}} style={styles.imageLeft}/>
                  <Text style={styles.name}>
                    {comedy.name}
                  </Text>
                </View>
                <View style={styles.imageAndText}>
                  <Image source={{uri: comedy.imageUrl}} style={styles.imageRight}/>
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
