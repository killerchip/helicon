import { scenario } from '../../../game/scenario/scenario.js';
import { deepClone } from '../../utils/deep-clone.js';

export const startGame = (state, initialScenario = scenario) => {
    // we want to preserve the initialScenario object for future use,
    // so we provide a copy to the state.
    const newScenario = deepClone(initialScenario);
    const nextState = state;

    nextState.scenario = newScenario;
    nextState.app.gameStarted = true;

    return nextState;
};
