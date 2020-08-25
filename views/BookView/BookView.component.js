/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, SafeAreaView, StyleSheet, Text, ScrollView} from 'react-native';
import BookCover from "../../components/BookCover/BookCover.component";
import type {BookInformation, Navigation} from "../../types";

type Props = {|
    navigation: Navigation
|};

const BookView: () => React$Node = ({navigation}: Props) => {

    const {bookInfo} = navigation.state.params;
    const {volumeInfo}: { volumeInfo: BookInformation } = bookInfo;

    function wrappedText(text, style) {
        return (
            <View style={{flexDirection: 'row', width: '100%'}}>
                <Text style={{...style, flex: 1, flexWrap: 'wrap'}}>
                    {text}
                </Text>
            </View>
        )
    }

    return (
        <View style={{flex: 1}}>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.contentContainer}>
                        <View style={styles.headerRowContainer}>
                            <View style={styles.bookImage}>
                                <BookCover uri={volumeInfo.imageLinks.thumbnail}/>
                            </View>
                            <View style={styles.bookInfoContainer}>
                                <ScrollView>
                                    <Text style={styles.bookTitle}>{volumeInfo.title}</Text>
                                    {volumeInfo.subtitle && wrappedText(volumeInfo.subtitle, styles.bookSubtitle)}
                                    {volumeInfo.authors && wrappedText('- ' + volumeInfo.authors.join('\n'), styles.bookAuthor)}
                                    {volumeInfo.description && wrappedText(volumeInfo.description)}
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        contentContainer: {
            padding: 20
        },
        headerRowContainer: {
            flexDirection: 'row'
        },
        bookImage: {
            height: 200,
            shadowColor: '#000000',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        },
        bookInfoContainer: {
            flex: 1,
            marginLeft: 20,
            maxHeight: 200
        },
        bookTitle: {
            fontSize: 25
        },
        bookSubtitle: {
            fontSize: 14
        },
        bookAuthor: {
            fontSize: 16,
            textAlign: 'right'
        }
    }
)

export default BookView;