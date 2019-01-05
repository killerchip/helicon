import SimpleSchema from 'simpl-schema';
import { AppStateSchema } from './app-state.schema.js';
import { ScenarioSchema } from './scenario-state.schema.js';

export const StateSchema = new SimpleSchema({
    app: AppStateSchema,
    scenario: ScenarioSchema
});
