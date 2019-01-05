import { _ } from 'underscore';
import { deviceARoom } from './device-a-room.js';
import { deviceAnObject } from './device-an-object.js';

const numberOfRooms = 5;
const numberOfObjects = 3;

export const deviceAScenario = () => {
    const rooms = [...new Array(numberOfRooms)].map(() => deviceARoom());
    const objects = [...new Array(numberOfObjects)].map(() => deviceAnObject());
    const shouldFocusOnObject = _.random(100) > 50;

    return {
        hero: {
            locationId: rooms[_.random(rooms.length - 1)]._id
        },
        camera: {
            roomId: rooms[_.random(rooms.length - 1)]._id,
            objectId: shouldFocusOnObject
                ? objects[_.random(objects.length - 1)]._id
                : null
        },
        elements: [...rooms, ...objects]
    };
};
