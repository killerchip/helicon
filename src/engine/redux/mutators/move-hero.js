import { focusOnRoom } from './focus-on-room.js';

export const moveHero = (state, roomId, withCamera = true) => {
    const nextState = state;
    nextState.scenario.hero.locationId = roomId;
    if (withCamera) {
        return focusOnRoom(nextState, roomId);
    }

    return nextState;
};
