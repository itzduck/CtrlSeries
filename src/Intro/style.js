import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
  body: {
    flex: 1,
    backgroundColor: "#ffcc00bd",
  },
  boxShadow: {
    flex: 1,
    backgroundColor: "#0000003d",
    margin: 20,
  },
  text:{
    // flex:1,
    fontSize : 25,
    color: '#fffff0',
    textAlign: "center",
  },
  containerButton:{
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:{
    fontSize:80,
    height:50,
    width:200,
    color:'#fff',
    borderRadius:5,
  },
  textLogar:{
    color:'#fff'
  },
});
