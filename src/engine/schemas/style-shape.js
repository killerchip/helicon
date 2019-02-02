import PropTypes from 'prop-types';
import { ToolbarActions } from '../toolbar-actions.js';

const ImageShape = {
    testUri: PropTypes.string.isRequired
};

const IconDetailsShape = {
    enabled: PropTypes.shape(ImageShape).isRequired,
    disabled: PropTypes.shape(ImageShape).isRequired
};

const IconsShape = {
    [ToolbarActions.TOGGLE_GRID]: PropTypes.shape(IconDetailsShape).isRequired,
    [ToolbarActions.NARRATION_NEXT]: PropTypes.shape(IconDetailsShape)
        .isRequired,
    [ToolbarActions.NARRATION_PREV]: PropTypes.shape(IconDetailsShape)
        .isRequired,
    [ToolbarActions.ROOM_EXIT]: PropTypes.shape(IconDetailsShape).isRequired
};

export const StyleShape = {
    appTitle: PropTypes.string.isRequired,
    appDescription: PropTypes.string.isRequired,
    backgroundImage: PropTypes.shape(ImageShape),
    icons: PropTypes.shape(IconsShape)
};
