import React, { Component } from 'react';
import { View, Image,Text} from 'react-native';
import Buttons from '../components/Button'
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
                <Text>Logar</Text>
                {/* <Button
                    style={styles.button}
                    title="SignUp"
                    onPress={() =>
                        navigation.navigate('SignUp')
                    }
                /> */}
                <Buttons></Buttons>
            </View>
        )
    }
}
