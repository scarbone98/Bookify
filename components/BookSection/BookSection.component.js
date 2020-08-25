/**
 * @format
 * @flow strict-local
 */

import React from "react";
import {FlatList, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import BookCover from "../BookCover/BookCover.component";
import LottieView from "../Animations/LottieView";

const BookSection: () => React$Node = ({title, url, navigation}) => {

    React.useEffect(() => {
        const controller = new AbortController();
        const {signal} = controller;
        fetchBookSectionData();
        return () => {
            if (signal && signal.abort) {
                signal.abort();
            }
        }
    }, []);

    async function fetchBookSectionData(signal) {
        try {
            const items = await fetch(url, {signal}).then((response) => response.json()).then((json) => json.items);
            setBookSectionState({data: items, error: false, loading: false});
        } catch (e) {
            setBookSectionState({data: [], error: true, loading: false});
        }
    }

    const [bookSectionState, setBookSectionState] = React.useState({loading: true, error: false, data: []})

    function renderItem({item}) {
        const {volumeInfo} = item;
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('Book', {bookInfo: item})}
                style={styles.bookImageContainer}
            >
                <BookCover uri={volumeInfo.imageLinks.thumbnail}/>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <View style={styles.sectionBody}>
                {
                    bookSectionState.loading ?
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', fontSize: 25}}>
                            <Text>Loading...</Text>
                        </View> :
                        <FlatList
                            keyExtractor={item => item.id}
                            style={{flex: 1}}
                            horizontal={true}
                            renderItem={renderItem}
                            data={bookSectionState.data}
                            showsHorizontalScrollIndicator={false}
                        />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        width: '100%',
        marginBottom: 16
    },
    sectionTitle: {
        fontSize: 20
    },
    sectionBody: {
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        height: 125,
        borderRadius: 10
    },
    bookImageContainer: {
        paddingHorizontal: 5,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 1.0
    }
});

export default BookSection;