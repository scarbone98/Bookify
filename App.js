/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigator from './Navigator';
import configureStore from './store';
import {Provider} from 'react-redux';

const App: () => React$Node = () => {
    return (
        <Provider store={configureStore}>
            <Navigator/>
        </Provider>
    );
};

export default App;