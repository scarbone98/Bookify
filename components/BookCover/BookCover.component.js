/**
 * @format
 * @flow strict-local
 */

import React from "react";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import {Image, StyleSheet} from "react-native";

const BookCover: () => React$Node = ({uri, fallbackImage}) => {

    const [bookImageState, setBookImageState] = React.useState({loading: true, error: false});

    return (
        <ShimmerPlaceHolder autoRun={true} visible={true} style={styles.imageMainContainer}>
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