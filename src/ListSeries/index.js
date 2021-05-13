import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { Image, SearchBar } from "react-native-elements";
import { Card, ListItem, Button, Icon, Avatar } from "react-native-elements";
import style from "./style";
import styles from "./style";
import SeriesDb from "./db.js";
import { Alert } from "react-native";


let numberGrid = 3
export default class ListSeries extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    search: "",
  };
  updateSearch = (search) => {
    this.setState({ search });
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <View>
      <Image onPress={()=>Alert.alert('Nome da Série ' +item.name)} source={{ uri: item.src }} style={styles.itemImage} />
    </View>
  );



  render() {
    const { navigation } = this.props;
    const { search } = this.state;
    return (
      <View style={styles.container}>
        <View >
          <Text style={styles.text}>
            Qual série você gostaria de acompanhar?
          </Text>
          <SearchBar
            style={style.searchBar}
            containerStyle={style.containerStyle}
            inputContainerStyle={style.inputContainerStyle}
            inputStyle={style.inputStyle}
            placeholderTextColor="#fff"
            searchIcon={{ color: "#fff" }}
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
          />
        </View>
     
        <View style={styles.containerImage}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={SeriesDb}
            numColumns={numberGrid}
            renderItem={this.renderItem}
          />
        </View>

        {/* 
        <View style={{ flex: 1 }}></View> */}
      </View>
    );
  }
}
