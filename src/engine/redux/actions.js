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

export const moveHero = (roomId, withCamera = true) => ({
    type: actionTypes.MOVE_HERO,
    roomId,
    withCamera
});

export const actionCreators = {
    [actionTypes.TOGGLE_GRID]: () => toggleGrid(),
    [actionTypes.START_GAME]: scenario => startGame(scenario),
    [actionTypes.FOCUS_ON_OBJECT]: objectId => focusOnObject(objectId),
    [actionTypes.FOCUS_ON_ROOM]: roomId => focusOnRoom(roomId),
    [actionTypes.MOVE_HERO]: (roomId, withCamera) =>
        moveHero(roomId, withCamera)
};
