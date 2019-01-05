import { _ } from 'underscore';
import { ElemTypes } from '../elem-types.js';

export const deviceAnObject = () => {
    const randomId = _.random(100);

    return {
        _id: `object-${randomId}`,
        title: `Object ${randomId}`,
        elemType: ElemTypes.OBJECT,
        description: `This is object ${randomId}.`
    };
};
