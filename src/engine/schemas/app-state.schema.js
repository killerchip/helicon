import SimpleSchema from 'simpl-schema';

const AppConfigSchema = new SimpleSchema({
    displayGrid: Boolean
});

export const AppStateSchema = new SimpleSchema({
    gameStarted: Boolean,
    config: AppConfigSchema
});
