import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from './style'



export default class SignIn extends Component {
    constructor(proops) {
        super(proops);

    };
    render() {
        return <View style={styles.container}>
            <Image
                style={styles.stretch}
                source={require('../img/')}
            />
        </View>;
    }
}
