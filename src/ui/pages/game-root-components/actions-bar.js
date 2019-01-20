import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ActionIcon } from './action-icon.js';

const styles = {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    padding: 4
};

export const ActionsBar = props => {
    const { actions, onAction } = props;
    return (
        <View style={styles}>
            {actions.map(action => (
                <ActionIcon
                    key={action.imageEnabled}
                    imageEnabled={action.imageEnabled}
                    imageDisabled={action.imageDisabled}
                    callbackData={action.callbackData}
                    enabled={action.enabled}
                    onClick={onAction}
                />
            ))}
        </View>
    );
};

ActionsBar.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    actions: PropTypes.array.isRequired,
    onAction: PropTypes.func.isRequired
};
