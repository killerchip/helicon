import React from 'react';
import { PropTypes } from 'prop-types';
import { View, TouchableWithoutFeedback } from 'react-native';

export class GridCell extends React.Component {
    constructor(props) {
        super(props);

        this.onPress = this.onPress.bind(this);
    }

    // eslint-disable-next-line class-methods-use-this
    onPress() {
        const { callbackData, onPress } = this.props;
        onPress(callbackData);
    }

    getGridStyle() {
        const { width, height, active } = this.props;
        return {
            width: width / 4,
            height: height / 3,
            borderWidth: 1,
            borderColor: active ? 'blue' : 'rgba(100,100,100,0.5)'
        };
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View style={[this.getGridStyle()]} />
            </TouchableWithoutFeedback>
        );
    }
}

GridCell.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    callbackData: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired,
    active: PropTypes.bool
};

GridCell.defaultProps = {
    active: false
};
