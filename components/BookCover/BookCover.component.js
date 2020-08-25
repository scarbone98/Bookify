/**
 * @format
 * @flow strict-local
 */

import React from "react";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import {Image, StyleSheet} from "react-native";

type Props = {|
    uri: string,
    fallbackImage: ?string
|}

type State = {|
    loading: boolean,
    error: boolean
|}

const BookCover: () => React$Node = ({uri, fallbackImage}: Props) => {

    const [bookImageState: State, setBookImageState] = React.useState({loading: true, error: false});

    return (
        <ShimmerPlaceHolder autoRun visible style={styles.imageMainContainer}>
            <Image
                loadingIndicatorSource={fallbackImage}
                style={{...styles.imageMainContainer, opacity: bookImageState.loading ? 0 : 1}}
                source={{uri}}
                onLoad={() => setBookImageState({loading: false, error: false})}
                onError={() => setBookImageState({loading: false, error: true})}
            />
        </ShimmerPlaceHolder>
    );
}

const styles = StyleSheet.create({
    imageMainContainer: {
        height: '100%',
        aspectRatio: 1 / 1.6
    }
});

export default BookCover;