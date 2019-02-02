import { ToolbarActions } from '../../toolbar-actions.js';
import { moveHero } from '../../redux/actions.js';

export const mapGridActionToReduxAction = gridContent => {
    /* eslint-disable indent */
    switch (gridContent.action) {
        case ToolbarActions.ROOM_EXIT: {
            return moveHero(gridContent.payload.targetRoomId);
        }

        default:
            return undefined;
    }
    /* eslint-enable indent */
};
