/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FadeInView from "../../components/Animations/FadeInView";


const HomeView: () => React$Node = (props) => {

    const [searchState, setSearchState] = React.useState({searchTerm: '', visible: false})

    const {navigation} = props;

    function renderHeader() {
        return (
            <View style={{width: '100%', marginBottom: 25}}>
                {
                    searchState.visible ?
                        <FadeInView style={{position: 'relative'}}>
                            <TextInput style={styles.searchBar}/>
                            <Ionicons
                                name="close-outline"
                                size={30}
                                color="#000"
                                onPress={() => setSearchState({...searchState, visible: false})}
                                style={{position: 'absolute', right: 5, top: 7.5}}
                            />
                        </FadeInView> :
                        <FadeInView style={styles.navigationBarContainer}>
                            <Ionicons
                                name="menu-outline"
                                size={30}
                                color="#000"
                                onPress={() => navigation.toggleDrawer()}
                            />
                            <Text style={styles.appNameText}>Bookify</Text>
                            <Ionicons
                                name="search-outline"
                                size={30}
                                color="#000"
                                onPress={() => setSearchState({...searchState, visible: true})}
                            />
                        </FadeInView>
                }
            </View>
        )
    }

    function renderBody() {
        return (
            <Text>BODY!</Text>
        )
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.mainContainer}>
                {renderHeader()}
                {renderBody()}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    appNameText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    navigationBarContainer: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchBar: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: 7.5,
        fontSize: 22,
    }
});

export default HomeView;