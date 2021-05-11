import React, { Component } from "react";
import { View, Text, ImageBackground, Button, Alert } from "react-native";
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
              <View style={{ flex: 1 }}></View>
              <View style={{ flex: 1 }}>
                <Text style={styles.text}>Acompanhe suas series</Text>
                <Text style={styles.text}>Saiba mais sobre datas</Text>
                <Text style={styles.text}>de lançamento</Text>
              </View>
              <View style={{ flex: 1 }}>
                <View style={styles.containerButton}>
                  <Button
                    style={styles.button}
                    onPress={() => {
                      Alert.alert("Me clicou");
                    }}
                    title="Vamos lá"
                    color="#01579B"
                    accessibilityLabel="Learn more about this purple button"
                  />
                </View>
                <Text style={styles.text}>
                  Possue conta?<Text>Logar</Text>
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
