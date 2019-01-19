import { _ } from 'underscore';
import { deviceAState } from '../device-a-state.js';
import { focusOnRoom } from '../../redux/mutators/focus-on-room.js';
import { focusOnObject } from '../../redux/mutators/focus-on-object.js';
import {
    mapStateToRoom,
    mapCellContentToActions
} from './map-state-to-room.js';
import { ElemTypes } from '../../elem-types.js';
import { focusOnRoom as focusOnRoomAction } from '../../redux/actions.js';

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

            test('optional grid is room grid', () => {
                if (focusedRoom.grid) {
                    expect(roomUI.grid).toEqual(focusedRoom.grid);
                } else {
                    expect(roomUI.grid).toEqual([]);
                }
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

            test('optional grid is room grid', () => {
                if (focusRoom.grid) {
                    expect(roomUI.grid).toEqual(focusRoom.grid);
                } else {
                    expect(roomUI.grid).toEqual([]);
                }
            });
        } else {
            test('image is optionally null', () => {
                expect(roomUI.image).toBeFalsy();
            });
        }
    });

    describe('mapCellContent to Actions', () => {
        test('returns an empty with empty elements if no grid is found', () => {
            expect(mapCellContentToActions()).toEqual([]);
        });
        test('returns a Focus-on-room action on grid cells that are undefined', () => {
            const focusedRoom = { _id: 'a-room', grid: [] };
            const resultGrid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                () => ({
                    action: focusOnRoomAction(focusedRoom._id),
                    active: false
                })
            );

            expect(mapCellContentToActions(focusedRoom)).toEqual(resultGrid);
        });
        test('returns a Focus-on-object action on grid cells that have object content', () => {});
        test('returns the grid cell action on grid cells that have action content', () => {});
    });
});
