import React from 'react';
import { PropTypes } from 'prop-types';
import { ImageBackground, View } from 'react-native';

export class GridImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0
        };

        this.onLayout = this.onLayout.bind(this);
    }

    onLayout(e) {
        this.setState({ width: e.nativeEvent.layout.width });
    }

    render() {
        const { image } = this.props;
        const { width } = this.state;
        return (
            <View onLayout={this.onLayout}>
                <ImageBackground
                    source={image}
                    style={{
                        width,
                        height: width * (3 / 4),
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}
                />
            </View>
        );
    }
}

GridImage.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    image: PropTypes.object.isRequired
};
