import { StyleSchema } from './style.schema.js';
import { style } from '../../game/style/style.js';

describe('STYLE-SCHEMA', () => {
    test('styles object must have valid schema', () => {
        expect(StyleSchema.validate(style)).toBeUndefined();
    });
});
