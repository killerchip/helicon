import { actionTypes } from './action-types.js';

export const toggleGrid = () => ({
    type: actionTypes.TOGGLE_GRID
});

export const startGame = scenario => ({
    type: actionTypes.START_GAME,
    scenario
});

export const focusOnObject = objectId => ({
    type: actionTypes.FOCUS_ON_OBJECT,
    objectId
});

export const focusOnRoom = roomId => ({
    type: actionTypes.FOCUS_ON_ROOM,
    roomId
});

export const moveHero = (roomId, withCamera) => ({
    type: actionTypes.MOVE_HERO,
    roomId,
    withCamera
});
