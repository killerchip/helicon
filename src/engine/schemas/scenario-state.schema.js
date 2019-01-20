import SimpleSchema from 'simpl-schema';
import { ElemTypesValues } from '../elem-types.js';
import { CellContentTypesValues } from '../cell-content-types';
import { ScenarioActionsSchema } from './scenario-actions-schema.js';

const HeroSchema = new SimpleSchema({
    locationId: String
});

const CameraSchema = new SimpleSchema({
    roomId: String,
    objectId: {
        type: String,
        optional: true
    }
});

const ElemType = {
    type: String,
    allowedValues: ElemTypesValues
};

const ObjectSchema = new SimpleSchema({
    _id: String,
    elemType: ElemType,
    title: String,
    description: String,
    actions: {
        type: ScenarioActionsSchema,
        optional: true
    }
});

const GridCellSchema = new SimpleSchema({
    index: {
        type: Number,
        min: 0,
        max: 11
    },
    contentType: {
        type: String,
        allowedValues: CellContentTypesValues
    },
    content: {
        type: Object,
        blackbox: true
    }
});

export const RoomSchema = new SimpleSchema({
    _id: String,
    title: String,
    elemType: ElemType,
    description: String,
    image: {
        type: Object,
        blackbox: true,
        optional: true
    },
    grid: {
        type: Array,
        optional: true
    },
    'grid.$': {
        type: GridCellSchema,
        maxCount: 12,
        optional: true
    },
    actions: {
        type: ScenarioActionsSchema,
        optional: true
    }
});

export const ScenarioSchema = new SimpleSchema({
    hero: HeroSchema,
    camera: CameraSchema,
    elements: [SimpleSchema.oneOf(RoomSchema, ObjectSchema)]
});
