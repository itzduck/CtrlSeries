import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './style'

export default class SignUp extends Component {

    constructor(props) {
        super(props);

    };
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>SignUp</Text>
                <Button
                    style={styles.button}
                    title="SignIn"
                    onPress={() =>
                        navigation.navigate('SignIn')
                    }
                />
                <Button
                    style={styles.button}
                    title="Splash"
                    onPress={() =>
                        navigation.navigate('Splash')
                    }
                />

            </View>
        )

    }
}
