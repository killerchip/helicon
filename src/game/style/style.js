import { images } from '../images';
import { icons } from './icons';
import { ToolbarActions } from '../../engine/toolbar-actions.js';

export const style = {
    appTitle: 'Helicon',
    appDescription:
        'An PoC game for the point-and-click adventure games engine called Helicon.',
    backgroundImage: images.homeBackground,
    icons: {
        [ToolbarActions.TOGGLE_GRID]: {
            enabled: icons.gridEnabled,
            disabled: icons.gridDisabled
        },
        [ToolbarActions.NARRATION_NEXT]: {
            enabled: icons.nextEnabled,
            disabled: icons.nextDisabled
        },
        [ToolbarActions.NARRATION_PREV]: {
            enabled: icons.prevEnabled,
            disabled: icons.prevDisabled
        }
    }
};
