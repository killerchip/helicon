import { initialState } from './initial-state.js';
import { StateSchema } from '../schemas/state.schema.js';

describe('INITIAL STATE', () => {
    test('validate initial state schema', () => {
        expect(StateSchema.validate(initialState)).toBeUndefined();
    });
});
