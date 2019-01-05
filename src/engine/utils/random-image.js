import { _ } from 'underscore';
import { images } from '../../game/images';

export const randomImage = () => {
    const keys = _.keys(images);
    const randomKey = keys[_.random(keys.length - 1)];

    return images[randomKey];
};
