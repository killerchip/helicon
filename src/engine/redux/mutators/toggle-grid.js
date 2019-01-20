export const toggleGrid = state => {
    const nextState = state;
    nextState.app.config.displayGrid = !nextState.app.config.displayGrid;

    return nextState;
};
