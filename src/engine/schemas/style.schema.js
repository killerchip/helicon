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
    [ToolbarActions.TOGGLE_GRID]: IconDetailsSchema
});

export const StyleSchema = new SimpleSchema({
    appTitle: String,
    appDescription: String,
    backgroundImage: ImageSchema,
    icons: IconsSchema
});
