// import React from 'react';

import { createStackNavigator } from 'react-navigation';
import { HomePage } from './pages/home.js';
import { GameRootPage } from './pages/game-root.js';

export const RootStack = createStackNavigator(
    {
        HomePage,
        GameRootPage
    },
    {
        initialRouteName: 'HomePage',
        navigationOptions: {
            header: null
        }
    }
);
