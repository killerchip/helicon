import { _ } from 'underscore';
import { ElemTypes } from '../../elem-types';

export const getFocusedRoom = state =>
    _.find(
        state.scenario.elements,
        element => element._id === state.scenario.camera.roomId
    );

export const getFocusedObject = state =>
    _.find(
        state.scenario.elements,
        element => element._id === state.scenario.camera.objectId
    );

// eslint-disable-next-line arrow-body-style
export const getFocusedElement = state => {
    // prettier-ignore
    return state.scenario.camera.objectId
        ? {
            element: getFocusedObject(state),
            type: ElemTypes.OBJECT
        }
        : {
            element: getFocusedRoom(state),
            type: ElemTypes.ROOM
        };
};
