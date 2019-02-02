import PropTypes from 'prop-types';
import { scenario } from '../../game/scenario/scenario.js';
import { ScenarioShape } from './scenario-shape.js';

describe('Scenario Shape Validation', () => {
    test('Scenario shape must be valid', () => {
        expect(
            PropTypes.checkPropTypes(
                ScenarioShape,
                scenario,
                'props',
                'component'
            )
        ).toBeUndefined();
    });
});
