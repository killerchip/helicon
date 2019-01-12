/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/engine/redux/store.js';
import { RootStack } from './src/ui/stack-navigator.js';

type Props = {};
// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <RootStack />
            </Provider>
        );
    }
}
