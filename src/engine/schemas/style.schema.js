import SimpleSchema from 'simpl-schema';
import { ToolbarActions } from '../toolbar-actions.js';

const ImageSchema = {
    type: Object,
    blackbox: true
};

const IconDetailsSchema = new SimpleSchema({
    enabled: ImageSchema,
    disabled: ImageSchema
});

const IconsSchema = new SimpleSchema({
    [ToolbarActions.TOGGLE_GRID]: IconDetailsSchema,
    [ToolbarActions.NARRATION_NEXT]: IconDetailsSchema,
    [ToolbarActions.NARRATION_PREV]: IconDetailsSchema,
    [ToolbarActions.ROOM_EXIT]: IconDetailsSchema
});

export const StyleSchema = new SimpleSchema({
    appTitle: String,
    appDescription: String,
    backgroundImage: ImageSchema,
    icons: IconsSchema
});
