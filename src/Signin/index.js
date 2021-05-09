import React, { Component } from 'react';
import { View, Image, Button } from 'react-native';
import styles from './style';



export default class SignIn extends Component {
    constructor(props) {
        super(props);

    };
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}
                onClick={() =>
                    navigation.navigate('SignUp')
                }
            >

                <Button
                    style={styles.button}
                    title="SignUp"
                    onPress={() =>
                        navigation.navigate('SignUp')
                    }
                />
            </View>
        )
    }
}
