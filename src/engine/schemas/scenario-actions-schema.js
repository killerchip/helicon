import SimpleSchema from 'simpl-schema';
import { ToolbarActions } from '../toolbar-actions.js';

const NarrationPayloadSchema = new SimpleSchema({
    targetRoomId: String
});

export const ScenarioActionsSchema = new SimpleSchema({
    [ToolbarActions.NARRATION_PREV]: {
        type: NarrationPayloadSchema,
        optional: true
    },
    [ToolbarActions.NARRATION_NEXT]: {
        type: NarrationPayloadSchema,
        optional: true
    }
});
