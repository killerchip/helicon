import SimpleSchema from 'simpl-schema';
import { ElemTypesValues } from '../elem-types.js';

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
    description: String
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
    }
});

export const ScenarioSchema = new SimpleSchema({
    hero: HeroSchema,
    camera: CameraSchema,
    elements: [SimpleSchema.oneOf(RoomSchema, ObjectSchema)]
});
