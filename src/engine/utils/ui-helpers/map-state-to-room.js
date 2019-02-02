import { _ } from 'underscore';
import { focusOnRoom } from '../../redux/actions.js';
import { mapStateToActionsBar } from './map-state-to-actions-bar.js';

export const mapCellContentToActions = (focusedRoom = {}) => {
    const grid = focusedRoom && focusedRoom.grid;

    if (!grid) {
        return [];
    }

    // Replace 'undefined' cells with 'FOCUS_ON_ROOM' action
    const gridArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => ({
        action: focusOnRoom(focusedRoom._id),
        active: false
    }));

    grid.forEach(gridItem => {
        const indexes = Array.isArray(gridItem.index)
            ? gridItem.index
            : [gridItem.index];

        indexes.forEach(index => {
            gridArray[index] = {
                action: gridItem.content,
                active: true
            };
        });
    });

    return gridArray;
};

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
        image: focusedRoom.image,
        grid: mapCellContentToActions(focusedRoom),
        actionsBar: mapStateToActionsBar(state)
    };
};
