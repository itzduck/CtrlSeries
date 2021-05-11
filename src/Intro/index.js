import React, { Component } from "react";
import { View, Text, ImageBackground, Alert } from "react-native";
import { Button } from "react-native-elements";
import styles from "./style";

const image = { uri: "../img/logo-og.png" };

export default class Intro extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../img/allseries.png")}
          style={styles.image}
        >
          <View style={styles.body}>
            <View style={styles.boxShadow}>
              <View style={{ flex: 2}}></View>
              <View style={{ flex: 1}}>
                <Text style={styles.text}>Acompanhe suas series</Text>
                <Text style={styles.text}>Saiba mais sobre datas</Text>
                <Text style={styles.text}>de lançamento</Text>
              </View>
              <View style={{ flex: 2}}>
                <View style={styles.containerButton}>
                  <Button
                    buttonStyle={styles.button}
                    type="solid"
                    onPress={() => {
                      Alert.alert("Me clicou");
                    }}
                    title="Vamos lá"
                    accessibilityLabel="Learn more about this purple button"
                  />
                <Text style={styles.textLogar}>
                  Possue conta?<Text>Logar</Text>
                </Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
