/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import APIS from './service/common/apis.js';
import FetchUtils from './service/common/fetchUtils.js';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    
    this.getData = this.getData.bind(this);

    let ds = new ListView.DataSource({
        rowHasChanged: (oldRow, newRow) => {
            oldRow !== newRow;
        },
    });
    this.state = {dataSource: ds};
  }

  componentWillMount() {
      this.getData();
  }

  getData() {
    let url = APIS.getAllComedies;
    var _this = this;
    FetchUtils.getRequest(url, function(comedies) {
      console.log(comedies);
      let ds = new ListView.DataSource({
          rowHasChanged: (oldRow, newRow) => {
              oldRow !== newRow;
          },
      });
      _this.setState({dataSource: ds.cloneWithRows(comedies)});
    }, function(err) {
      alert(err);
    });
  }

  renderRow(comedy) {
      return (
          <View style={styles.movieItem}>
              <View style={styles.movieDiscription}>
                <Text style={styles.title}>
                  {comedy.title}
                </Text>
                <Text style={styles.year}>
                  {comedy.playTime}
                </Text>
              </View>
          </View>
      );
  }

  renderHeader() {
      return (
          <View style={styles.header}>
              <Text style={styles.headerText}>
                  Comedies List
              </Text>
              <View style={styles.headerLine}></View>
          </View>
      );
  }

  renderSeparator(sectionID:number, rowID:number) {
      return (
          <View style={styles.separator} key={sectionID+rowID}>
          </View>
      );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView dataSource={this.state.dataSource} renderRow={this.renderRow}
             style={styles.ListContainer} renderHeader={this.renderHeader}
             renderSeparator={this.renderSeparator} initialListSize={10}>
        </ListView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  ListContainer: {
      flex: 1,
      marginTop: 25
  },
  movieItem: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    backgroundColor: '#F5F5F5'
  },
  poster: {
    width: 53,
    height: 81,
    backgroundColor: 'gray'
  },
  movieDiscription: {
    marginLeft: 10,
    flex: 1
  },
  title: {
    fontSize: 20,
    marginTop: 3,
    marginBottom: 3,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  year: {
    fontSize: 12,
    marginBottom: 3,
    textAlign: 'center'
  },
  header: {
      height: 50,
      backgroundColor: '#F5F5F5'
  },
  headerText: {
      flex: 1,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      lineHeight: 44,
  },
  headerLine: {
      height: 1,
      backgroundColor: "#ccc",
  },
  separator: {
      height: 1,
      backgroundColor: "#ccc",
  }
});
