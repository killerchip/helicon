export const focusOnObject = (state, objectId) => {
    const nextState = state;
    nextState.scenario.camera.objectId = objectId;

    return nextState;
};
