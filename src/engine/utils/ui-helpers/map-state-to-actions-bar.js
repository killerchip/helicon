import { ToolbarActions } from '../../toolbar-actions.js';
import { actionTypes } from '../../redux/action-types.js';
import { style } from '../../../game/style/style.js';
import { actionCreators } from '../../redux/actions.js';
import { getFocusedRoom, getFocusedElement } from './get-focused.js';

const getGridIconData = state => {
    const focusedRoom = getFocusedRoom(state);
    const shouldEnableGridAction = !!(focusedRoom.image && focusedRoom.grid);

    return {
        imageEnabled: style.icons[ToolbarActions.TOGGLE_GRID].enabled,
        imageDisabled: style.icons[ToolbarActions.TOGGLE_GRID].disabled,
        enabled: shouldEnableGridAction,
        callbackData: { ...actionCreators[actionTypes.TOGGLE_GRID]() }
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
                ...actionCreators[actionTypes.FOCUS_ON_ROOM](
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
                ...actionCreators[actionTypes.FOCUS_ON_ROOM](
                    focusedElement.actions[ToolbarActions.NARRATION_NEXT]
                        .targetRoomId
                )
            }
            : undefined
    };
};

const getViewIconData = state => {
    const focusedElement = getFocusedElement(state).element;
    const shouldBeEnabled = !!(
        focusedElement.actions && focusedElement.actions[ToolbarActions.VIEW]
    );

    return {
        imageEnabled: style.icons[ToolbarActions.VIEW].enabled,
        imageDisabled: style.icons[ToolbarActions.VIEW].disabled,
        enabled: shouldBeEnabled,
        // prettier-ignore
        callbackData: shouldBeEnabled 
            ? {
                ...actionCreators[actionTypes.FOCUS_ON_ROOM](
                    focusedElement.actions[ToolbarActions.VIEW]
                        .targetRoomId
                )
            }
            : undefined
    };
};

const getExitIconData = state => {
    const focusedElement = getFocusedElement(state).element;
    const shouldBeEnabled = !!(
        focusedElement.actions &&
        focusedElement.actions[ToolbarActions.ROOM_EXIT]
    );

    return {
        imageEnabled: style.icons[ToolbarActions.ROOM_EXIT].enabled,
        imageDisabled: style.icons[ToolbarActions.ROOM_EXIT].disabled,
        enabled: shouldBeEnabled,
        // prettier-ignore
        callbackData: shouldBeEnabled
            ? {
                ...actionCreators[actionTypes.MOVE_HERO](
                    focusedElement.actions[ToolbarActions.ROOM_EXIT]
                        .targetRoomId
                )
            }
            : undefined
    };
};

export const mapStateToActionsBar = state => [
    getPrevIconData(state),
    getNextIconData(state),
    getViewIconData(state),
    getExitIconData(state),
    getGridIconData(state)
];
