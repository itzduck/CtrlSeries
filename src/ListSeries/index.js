import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { Image, SearchBar } from "react-native-elements";
import { Card, ListItem, Button, Icon, Avatar } from "react-native-elements";
import style from "./style";
import styles from "./style";
import SeriesDb from "./db.js";
import { Alert } from "react-native";
import useGet from "../useGet";
const url = "https://kitsu.io/api/edge/anime?filter[categories]=adventure";

let numberGrid = 3;
export default class ListSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      date: false,
    };
  }
  async componentDidMount(){
    // useGet.get("").then((date) => {
    //   this.setState({
    //     date,
    //   });
    //   console.log("chegou no setState");
    //   console.log(this.state.date.data.data);
    // });
    const d = await useGet;
    this.setState({
      date: d,
    });
  }
  updateSearch = (search) => {
    this.setState({ search });
  };
  date = {};
  keyExtractor = (item, index) => index.toString();

  listarAnimes = (name) => {
    // Alert.alert("Nome da Série " + name);
    // console.log("chegou aki.....");
    // useGet.get("").then((data) => {
    //   this.setState({
    //     date: data,
    //   });
    // });
    // this.date = useGet.get("");
    // console.log(this.state.date);
  };
  renderItem = ({ item }) => (
    <View>
      {/* <Text>{item.attributes.titles.en_jp}</Text> */}
      {/* <Text>{JSON.stringify(item)}</Text> */}
      {/* <Text>{item }</Text> */}
      <Image
        onPress={() => Alert.alert("Serie: "+ item.name)}
        source={{ uri: "https://image.tmdb.org/t/p/w300"+item.poster_path }}
        style={styles.itemImage}
        posterImage
      />
    </View>
  );

  render() {
    const { navigation } = this.props;
    const { search } = this.state;
    return (
      <View style={styles.container}>
        <View>
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
        {/* {this.state.date && <Text>{JSON.stringify("https://image.tmdb.org/t/p/w500"+this.state.date.results[0].backdrop_path)}</Text>} */}
        {this.state.date && (
          <View style={styles.containerImage}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.date.results}
              numColumns={numberGrid}
              renderItem={this.renderItem}
            />
          </View>
        )}
        {/* 
        <View style={{ flex: 1 }}></View> */}
      </View>
    );
  }
}
