import { _ } from 'underscore';
import { ElemTypes } from '../elem-types.js';
import { randomImage } from './random-image.js';

export const deviceARoom = () => {
    const randomId = _.random(100);
    const shouldIncludeImage = _.random(100) > 50;

    return {
        _id: `room-${randomId}`,
        title: `Room ${randomId}`,
        elemType: ElemTypes.ROOM,
        description: `This is room ${randomId}.`,
        image: shouldIncludeImage ? randomImage() : null
    };
};
