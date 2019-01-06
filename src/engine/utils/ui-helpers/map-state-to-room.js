import { _ } from 'underscore';

export const mapStateToRoom = state => {
    const focusedRoom = _.find(
        state.scenario.elements,
        element => element._id === state.scenario.camera.roomId
    );
    const focusedObject = state.scenario.camera.objectId
        ? _.find(
            state.scenario.elements, // eslint-disable-line prettier/prettier
            element => element._id === state.scenario.camera.objectId // eslint-disable-line prettier/prettier
        ) // eslint-disable-line prettier/prettier
        : null;

    return {
        title: (focusedObject && focusedObject.title) || focusedRoom.title,
        description:
            (focusedObject && focusedObject.description) ||
            focusedRoom.description,
        image: focusedRoom.image
    };
};
