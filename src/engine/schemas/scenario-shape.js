import PropTypes from 'prop-types';
import { ElemTypes } from '../elem-types.js';
import { ToolbarActions } from '../toolbar-actions.js';
import { actionTypes } from '../redux/action-types.js';

const ImageShape = {
    testUri: PropTypes.string.isRequired
};

const HeroShape = {
    locationId: PropTypes.string.isRequired
};

const CameraShape = {
    roomId: PropTypes.string.isRequired,
    objectId: PropTypes.string
};

const RoomTargetingPayloadSchema = {
    targetRoomId: PropTypes.string.isRequired
};

const ToolbarActionsShape = {
    [ToolbarActions.NARRATION_PREV]: PropTypes.shape(
        RoomTargetingPayloadSchema
    ),
    [ToolbarActions.NARRATION_NEXT]: PropTypes.shape(
        RoomTargetingPayloadSchema
    ),
    [ToolbarActions.ROOM_EXIT]: PropTypes.shape(RoomTargetingPayloadSchema)
};

const ToogleGridActionShape = PropTypes.shape({
    type: PropTypes.oneOf([actionTypes.TOGGLE_GRID]).isRequired
});

const StartGameActionShape = PropTypes.shape({
    type: PropTypes.oneOf([actionTypes.START_GAME]).isRequired,
    scenario: PropTypes.object
});

const FocusOnObjectActionShape = PropTypes.shape({
    type: PropTypes.oneOf([actionTypes.FOCUS_ON_OBJECT]).isRequired,
    objectId: PropTypes.string.isRequired
});

const FocusOnRoomActionShape = PropTypes.shape({
    type: PropTypes.oneOf([actionTypes.FOCUS_ON_ROOM]).isRequired,
    roomId: PropTypes.string.isRequired
});

const MoveHeroActionShape = PropTypes.shape({
    type: PropTypes.oneOf([actionTypes.MOVE_HERO]).isRequired,
    roomId: PropTypes.string.isRequired,
    withCamera: PropTypes.bool
});

const ActionsShapes = [
    ToogleGridActionShape,
    StartGameActionShape,
    FocusOnObjectActionShape,
    FocusOnRoomActionShape,
    MoveHeroActionShape
];

const ActionGridCellShape = PropTypes.shape({
    index: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number)
    ]).isRequired,
    content: PropTypes.oneOfType([
        ...ActionsShapes,
        PropTypes.arrayOf(PropTypes.oneOfType([...ActionsShapes]))
    ]).isRequired
});

const RoomElementShape = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    elemType: PropTypes.oneOf([ElemTypes.ROOM]).isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.shape(ImageShape),
    actions: PropTypes.shape(ToolbarActionsShape),
    grid: PropTypes.arrayOf(PropTypes.oneOfType([ActionGridCellShape]))
});

const ObjectElementShape = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    elemType: PropTypes.oneOf([ElemTypes.OBJECT]).isRequired,
    description: PropTypes.string.isRequired,
    actions: PropTypes.shape(ToolbarActionsShape)
});

export const ScenarioShape = {
    hero: PropTypes.shape(HeroShape).isRequired,
    camera: PropTypes.shape(CameraShape).isRequired,
    elements: PropTypes.arrayOf(
        PropTypes.oneOfType([RoomElementShape, ObjectElementShape])
    ).isRequired
};
