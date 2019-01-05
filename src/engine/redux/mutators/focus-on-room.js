export const focusOnRoom = (state, roomId) => {
    const nextState = state;
    nextState.scenario.camera.objectId = null;
    nextState.scenario.camera.roomId = roomId;

    return nextState;
};
