/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import type {Navigation} from "../../types";

type Props = {|
    navigation: Navigation
|}

const SplashScreen: () => React$Node = ({navigation}: Props) => {

    React.useEffect(() => {
        setTimeout(() => {
            const {navigate} = navigation;
            navigate('Drawer');
        }, 1000);
    }, []);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.centerContainer}>
                <Text style={styles.splashText}>Splash</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.dark
    },
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    splashText: {
        fontSize: 30
    }
});


export default SplashScreen;