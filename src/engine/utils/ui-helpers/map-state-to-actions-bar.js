import { ToolbarActions } from '../../toolbar-actions.js';
import { style } from '../../../game/style/style.js';
import { toggleGrid, focusOnRoom } from '../../redux/actions.js';
import { getFocusedRoom, getFocusedElement } from './get-focused.js';

const getGridIconData = state => {
    const focusedRoom = getFocusedRoom(state);
    const shouldEnableGridAction = !!(focusedRoom.image && focusedRoom.grid);

    return {
        imageEnabled: style.icons[ToolbarActions.TOGGLE_GRID].enabled,
        imageDisabled: style.icons[ToolbarActions.TOGGLE_GRID].disabled,
        enabled: shouldEnableGridAction,
        callbackData: { ...toggleGrid() }
    };
};
const getPrevIconData = state => {
    const focusedElement = getFocusedElement(state).element;
    const shouldBeEnabled = !!(
        focusedElement.actions &&
        focusedElement.actions[ToolbarActions.NARRATION_PREV]
    );

    return {
        imageEnabled: style.icons[ToolbarActions.NARRATION_PREV].enabled,
        imageDisabled: style.icons[ToolbarActions.NARRATION_PREV].disabled,
        enabled: shouldBeEnabled,
        // prettier-ignore
        callbackData: shouldBeEnabled
            ? {
                ...focusOnRoom(
                    focusedElement.actions[ToolbarActions.NARRATION_PREV]
                        .targetRoomId
                )
            }
            : undefined
    };
};

const getNextIconData = state => {
    const focusedElement = getFocusedElement(state).element;
    const shouldBeEnabled = !!(
        focusedElement.actions &&
        focusedElement.actions[ToolbarActions.NARRATION_NEXT]
    );

    return {
        imageEnabled: style.icons[ToolbarActions.NARRATION_NEXT].enabled,
        imageDisabled: style.icons[ToolbarActions.NARRATION_NEXT].disabled,
        enabled: shouldBeEnabled,
        // prettier-ignore
        callbackData: shouldBeEnabled
            ? {
                ...focusOnRoom(
                    focusedElement.actions[ToolbarActions.NARRATION_NEXT]
                        .targetRoomId
                )
            }
            : undefined
    };
};

export const mapStateToActionsBar = state => [
    getPrevIconData(state),
    getNextIconData(state),
    getGridIconData(state)
];
