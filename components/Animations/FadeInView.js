/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import { Animated } from 'react-native';

type Props = {|
    duration: ?number,
    style: ?any,
    children: Array<React$Node>
|}

const FadeInView: () => React$Node = ({duration, style, children}: Props) => {
    const fadeAnim = React.useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: duration || 500,
                useNativeDriver: true
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...style,
                opacity: fadeAnim,         // Bind opacity to animated value
            }}
        >
            {children}
        </Animated.View>
    );
}
export default FadeInView;