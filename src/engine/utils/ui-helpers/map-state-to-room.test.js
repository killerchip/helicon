import { _ } from 'underscore';
import { deviceAState } from '../device-a-state.js';
import { focusOnRoom } from '../../redux/mutators/focus-on-room.js';
import { focusOnObject } from '../../redux/mutators/focus-on-object.js';
import { mapStateToRoom } from './map-state-to-room.js';
import { ElemTypes } from '../../elem-types.js';

describe('MAP STATE TO ROOM UI', () => {
    describe('focused on room', () => {
        const initialState = deviceAState();
        const heroLocationId = initialState.scenario.hero.locationId;
        const roomFocusedState = focusOnRoom(initialState, heroLocationId);
        const focusedRoom = _.find(
            roomFocusedState.scenario.elements,
            element => element._id === heroLocationId
        );
        const roomUI = mapStateToRoom(roomFocusedState);

        test('title is room title', () => {
            expect(roomUI.title).toBe(focusedRoom.title);
        });

        test('description is room description', () => {
            expect(roomUI.description).toBe(focusedRoom.description);
        });

        if (focusedRoom.image) {
            test('image is room image', () => {
                expect(roomUI.image).toEqual(focusedRoom.image);
            });
        } else {
            test('image is optionally null', () => {
                expect(roomUI.image).toBeFalsy();
            });
        }
    });

    describe('focused on object', () => {
        const state = deviceAState();
        const objects = state.scenario.elements.filter(
            element => element.elemType === ElemTypes.OBJECT
        );
        const focusRoom = _.find(
            state.scenario.elements,
            element => element._id === state.scenario.camera.roomId
        );
        const randomObject = objects[_.random(objects.length - 1)];
        const newState = focusOnObject(state, randomObject._id);
        const roomUI = mapStateToRoom(newState);

        test('title is object title', () => {
            expect(roomUI.title).toBe(randomObject.title);
        });

        test('description is object description', () => {
            expect(roomUI.description).toBe(randomObject.description);
        });

        if (focusRoom.image) {
            test('image is room image', () => {
                expect(roomUI.image).toEqual(focusRoom.image);
            });
        } else {
            test('image is optionally null', () => {
                expect(roomUI.image).toBeFalsy();
            });
        }
    });
});
