import { _ } from 'underscore';
import { oneReducer } from './store.js';
import { deviceAState } from '../utils/device-a-state';
import { deviceAScenario } from '../utils/device-a-scenario.js';
import { initialState } from './initial-state.js';
import { scenario } from '../../game/scenario/scenario.js';
import { StateSchema } from '../schemas/state.schema.js';
import { ElemTypes } from '../elem-types.js';
import {
    startGame,
    focusOnObject,
    focusOnRoom,
    moveHero,
    toggleGrid
} from './actions.js';

describe('REDUCER', () => {
    test('it should return initial state in case of no state passed as parameter', () => {
        expect(oneReducer()).toEqual(initialState);
    });

    test('it should return the same state if no action passed as param', () => {
        const randomState = deviceAState();

        expect(oneReducer(randomState)).toEqual(randomState);
    });

    describe('START_GAME action', () => {
        const randomState = deviceAState();
        const randomScenario = deviceAScenario();

        test('should set the gameStarted flag', () => {
            const producedState = oneReducer(randomState, startGame());
            expect(producedState.app.gameStarted).toBe(true);
        });

        test('should replace scenario with the provided one', () => {
            const producedState = oneReducer(
                randomState,
                startGame(randomScenario)
            );

            expect(producedState.scenario).toEqual(randomScenario);
        });

        test('should replace scenario with default one if no scenario provided', () => {
            const producedState = oneReducer(randomState, startGame());

            expect(producedState.scenario).toEqual(scenario);
        });

        test('should not break State schema', () => {
            const producedState = oneReducer(
                randomState,
                startGame(randomScenario)
            );

            expect(StateSchema.validate(producedState)).toBeUndefined();
        });
    });

    describe('FOCUS_ON_OBJECT action', () => {
        const randomState = deviceAState();
        const objects = _.filter(
            randomState.scenario.elements,
            element => element.elemType === ElemTypes.OBJECT
        );
        const randomObjectId = objects[_.random(objects.length - 1)]._id;
        const producedState = oneReducer(
            randomState,
            focusOnObject(randomObjectId)
        );

        test('sets the camera focus objectId correctly', () => {
            expect(producedState.scenario.camera.objectId).toBe(randomObjectId);
        });

        test('should not break State schema', () => {
            expect(StateSchema.validate(producedState)).toBeUndefined();
        });
    });

    describe('FOCUS_ON_ROOM action', () => {
        const randomState = deviceAState();
        const rooms = _.filter(
            randomState.scenario.elements,
            element => element.elemType === ElemTypes.ROOM
        );
        const randomRoomId = rooms[_.random(rooms.length - 1)]._id;
        const producedState = oneReducer(
            randomState,
            focusOnRoom(randomRoomId)
        );

        test('sets the camera focus roomId correctly', () => {
            expect(producedState.scenario.camera.roomId).toBe(randomRoomId);
        });

        test('clears the camera focus objectId', () => {
            expect(producedState.scenario.camera.objectId).toBeNull();
        });

        test('should not break State schema', () => {
            expect(StateSchema.validate(producedState)).toBeUndefined();
        });
    });

    describe('MOVE_HERO action', () => {
        const randomState = deviceAState();
        const rooms = _.filter(
            randomState.scenario.elements,
            element => element.elemType === ElemTypes.ROOM
        );
        const randomRoomId = rooms[_.random(rooms.length - 1)]._id;
        const producedState = oneReducer(randomState, moveHero(randomRoomId));

        test('sets the hero location correctly', () => {
            expect(producedState.scenario.hero.locationId).toBe(randomRoomId);
        });

        test('sets the camera focus roomId correctly', () => {
            expect(producedState.scenario.camera.roomId).toBe(randomRoomId);
        });

        test('clears the camera focus objectId', () => {
            expect(producedState.scenario.camera.objectId).toBeNull();
        });

        test('should not break State schema', () => {
            expect(StateSchema.validate(producedState)).toBeUndefined();
        });

        describe('WITH NO CAMERA', () => {
            const newRandomRoomId = rooms[_.random(rooms.length - 1)]._id;
            const newState = oneReducer(
                producedState,
                moveHero(newRandomRoomId, false)
            );

            test('sets the hero location correctly', () => {
                expect(newState.scenario.hero.locationId).toBe(newRandomRoomId);
            });

            test('does not affect camera focus', () => {
                expect(newState.scenario.camera.roomId).toBe(randomRoomId);
            });

            test('clears the camera focus objectId', () => {
                expect(newState.scenario.camera.objectId).toBe(
                    producedState.scenario.camera.objectId
                );
            });

            test('should not break State schema', () => {
                expect(StateSchema.validate(newState)).toBeUndefined();
            });
        });
    });

    describe('TOGGLE_GRID action', () => {
        const aState = deviceAState();
        const nextState = oneReducer(aState, toggleGrid());
        const next2State = oneReducer(nextState, toggleGrid());

        test('toggles grid display', () => {
            expect(nextState.app.config.displayGrid).not.toBe(
                aState.app.config.displayGrid
            );
        });

        test('toggles grid display again', () => {
            expect(next2State.app.config.displayGrid).not.toBe(
                nextState.app.config.displayGrid
            );
        });
    });
});
