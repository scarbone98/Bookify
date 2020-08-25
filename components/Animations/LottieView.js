/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import LottieView from 'lottie-react-native';

type Props = {|
    source: string,
    style: ?any
|}

const LottieWrapper: () => React$Node = ({source, style}: Props) => {

    const animation = React.useRef(null);

    React.useEffect(() => {
        animation.current.play();
    }, [animation.current])

    return (
        <LottieView
            loop
            ref={animation}
            source={source}
            style={style}
        />
    )
}

export default LottieWrapper;