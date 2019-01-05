import { deviceAScenario } from './device-a-scenario.js';

export const deviceAState = () => ({
    app: {
        gameStarted: false,
        config: {
            displayGrid: false
        }
    },
    scenario: deviceAScenario()
});
