/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import BookSection from "../../components/BookSection/BookSection.component";

const ProfileView: () => React$Node = (props) => {

    function generateSections() {
        return [
            {
                title: 'Bookground',
                url: 'http://localhost:3000/books/search?q=crime'
            },
            {
                title: 'On the List',
                url: 'http://localhost:3000/books/search?q=animals'
            },
            {
                title: 'Interests',
                url: 'http://localhost:3000/books/search?q=love'
            },
        ].map(
            ({title, url}) => {
                return (
                    <BookSection navigation={props.navigation} key={title} url={url} title={title}/>
                )
            }
        );
    }

    const sections = React.useMemo(() => generateSections(), []);

    return (
        <View style={styles.mainContainer}>
            <SafeAreaView style={{flex: 1}}>
                <View style={{padding: 20}}>
                    <View style={styles.infoSectionContainer}>
                        <View style={styles.profileImageContainer}>
                            <Image style={{height: '100%', width: '100%'}} source={{uri: 'https://media.vanityfair.com/photos/57acf79821b609ea061cefd7/master/w_600,h_720,c_limit/ana-de-armas-ss04.jpg'}}/>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={styles.infoTextName}>John Doe</Text>
                            <Text style={styles.infoTextLocation}>Boston, MA</Text>
                            <Text style={styles.infoTextSummary}>Mechanical Engineer</Text>
                            <Text style={styles.infoTextSummary}>at yaddayadda</Text>
                            <Text style={styles.infoTextSummary}>1,000,000 pages</Text>
                            <Text style={styles.infoTextSummary}>35 books</Text>
                        </View>
                    </View>
                    {sections}
                </View>
            </SafeAreaView>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    profileImageContainer: {
        height: 125,
        width: 125,
        borderRadius: 62.5,
        overflow: 'hidden'
    },
    infoSectionContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 32
    },
    infoTextName: {
        fontSize: 22
    },
    infoTextLocation: {
        fontSize: 14
    },
    infoTextSummary: {
        fontSize: 17
    }
});

export default ProfileView;