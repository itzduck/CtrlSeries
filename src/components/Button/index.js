import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Buttons extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Button
          onPress={() => Alert.alert('Button with adjusted color pressed')}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
