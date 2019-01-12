import SimpleSchema from 'simpl-schema';

export const StyleSchema = new SimpleSchema({
    appTitle: String,
    appDescription: String,
    backgroundImage: {
        type: Object,
        blackbox: true
    }
});
