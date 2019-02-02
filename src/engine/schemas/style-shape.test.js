import PropTypes from 'prop-types';
import { style } from '../../game/style/style.js';
import { StyleShape } from './style-shape.js';

describe('STYLE Shape Validation', () => {
    test('Style shape must be valid', () => {
        expect(
            PropTypes.checkPropTypes(StyleShape, style, 'props', 'component')
        ).toBeUndefined();
    });
});
