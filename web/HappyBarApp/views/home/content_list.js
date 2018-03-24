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
import APIS from '../../service/common/apis.js';
import FetchUtils from '../../service/common/fetchUtils.js';

const styles = StyleSheet.create(ContentListStyle);
export default class ContentList extends Component {
    constructor(props) {
        super(props);
    }
    
    renderRow(categoryComedy) {
        return (
            <View style={styles.comedyItem}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>
                  {categoryComedy.name}
                </Text>
                <Icon name="angle-right" style={styles.titleIcon} size={22} color={COLORS.themeGray} />
              </View>
              <View style={styles.separator}>
              </View>
              <View style={styles.imageContainer}>
                <View style={styles.imageAndText}>
                  <Image source={{uri: categoryComedy.comedies[0].poster}} style={styles.imageLeft}/>
                    <Text style={styles.name}>
                      {categoryComedy.comedies[0].title}
                    </Text>
                </View>
                <View style={styles.imageAndText}>
                  <Image source={{uri:  categoryComedy.comedies[1].poster}} style={styles.imageRight}/>
                  <Text style={styles.name}>
                    {categoryComedy.comedies[1].title}
                  </Text>
                </View>
              </View>
            </View>
        );
    }

    render() {
        let ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => {
                oldRow !== newRow;
            },
        });
        return(
            <ListView dataSource={ds.cloneWithRows(this.props.categoryComedies)} renderRow={this.renderRow}
             style={styles.container} initialListSize={10}>
            </ListView>
        );
    }
}
