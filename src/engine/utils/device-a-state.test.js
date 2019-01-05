import { StateSchema } from '../schemas/state.schema.js';
import { deviceAState } from './device-a-state.js';

describe('HELPERS > deviceAState()', () => {
    test('should create a valid state', () => {
        expect(StateSchema.validate(deviceAState())).toBeUndefined();
    });
});
