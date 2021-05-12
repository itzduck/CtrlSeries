import { StyleSheet,Dimensions } from "react-native";

let {width} = Dimensions.get('window')
let numberGrid = 3
let itemWidth = width / numberGrid

export default StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    backgroundColor: "#ffcc00",
  },
  text: {
    fontSize: 25,
    padding: 25,
    fontWeight: "bold",
    top: 20,
  },
  searchBar: {
    backgroundColor: "#00000000",
  },
  containerStyle: {
    backgroundColor: "#ffcc00",
    borderTopColor: "#ffcc00",
    borderBottomColor: "#ffcc00",
  },
  inputContainerStyle: {
    backgroundColor: "#DAA520df",
    color: "#fff",
  },
  inputStyle: {
    color: "#fff",
    backgroundColor: "#000",
  },
  containerImage: {
    flex: 1,
  },
  itemImage:{
    width: itemWidth,
    height: 200
  }
});
