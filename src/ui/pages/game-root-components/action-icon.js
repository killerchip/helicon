import React from 'react';
import { PropTypes } from 'prop-types';
import { TouchableWithoutFeedback, Image } from 'react-native';

export class ActionIcon extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { onClick, callbackData, enabled } = this.props;
        if (enabled) {
            onClick(callbackData);
        }
    }

    render() {
        const { enabled, imageEnabled, imageDisabled } = this.props;
        return (
            <TouchableWithoutFeedback onPress={this.onClick}>
                <Image
                    source={enabled ? imageEnabled : imageDisabled}
                    style={{ width: 36, height: 36, margin: 4 }}
                />
            </TouchableWithoutFeedback>
        );
    }
}

ActionIcon.propTypes = {
    enabled: PropTypes.bool,
    imageEnabled: PropTypes.number.isRequired,
    imageDisabled: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    callbackData: PropTypes.object
};

ActionIcon.defaultProps = {
    enabled: false,
    callbackData: {}
};
