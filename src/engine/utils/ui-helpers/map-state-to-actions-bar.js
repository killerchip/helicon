import { _ } from 'underscore';
import { ToolbarActions } from '../../toolbar-actions.js';
import { style } from '../../../game/style/style.js';
import { toggleGrid } from '../../redux/actions.js';

const getGridIconData = state => {
    const focusedRoom = _.find(
        state.scenario.elements,
        element => element._id === state.scenario.camera.roomId
    );
    const shouldEnableGridAction = !!(focusedRoom.image && focusedRoom.grid);

    return {
        imageEnabled: style.icons[ToolbarActions.TOGGLE_GRID].enabled,
        imageDisabled: style.icons[ToolbarActions.TOGGLE_GRID].disabled,
        enabled: shouldEnableGridAction,
        callbackData: { ...toggleGrid() }
    };
};

export const mapStateToActionsBar = state => [getGridIconData(state)];
