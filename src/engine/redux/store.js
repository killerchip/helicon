import { createStore } from 'redux';
import { deepClone } from '../utils/deep-clone.js';
import { initialState } from './initial-state.js';
import { actionTypes } from './action-types.js';
import { startGame } from './mutators/start-game.js';
import { focusOnObject } from './mutators/focus-on-object.js';
import { focusOnRoom } from './mutators/focus-on-room.js';
import { moveHero } from './mutators/move-hero.js';

export const oneReducer = (state, action) => {
    const newState = deepClone(state || initialState);

    if (!action) {
        return newState;
    }

    /* eslint-disable indent */
    switch (action.type) {
        case actionTypes.START_GAME: {
            return startGame(newState, action.scenario);
        }

        case actionTypes.FOCUS_ON_OBJECT: {
            return focusOnObject(newState, action.objectId);
        }

        case actionTypes.FOCUS_ON_ROOM: {
            return focusOnRoom(newState, action.roomId);
        }

        case actionTypes.MOVE_HERO: {
            return moveHero(newState, action.roomId, action.withCamera);
        }

        default: {
            return newState;
        }
    }
    /* eslint-enable ident */
};

export const store = createStore(oneReducer);
