import SimpleSchema from 'simpl-schema';
import { ToolbarActions } from '../toolbar-actions.js';

const RoomTargetingPayloadSchema = new SimpleSchema({
    targetRoomId: String
});

export const ScenarioActionsSchema = new SimpleSchema({
    [ToolbarActions.NARRATION_PREV]: {
        type: RoomTargetingPayloadSchema,
        optional: true
    },
    [ToolbarActions.NARRATION_NEXT]: {
        type: RoomTargetingPayloadSchema,
        optional: true
    },
    [ToolbarActions.ROOM_EXIT]: {
        type: RoomTargetingPayloadSchema,
        optional: true
    }
});
