import React from 'react';
import { PropTypes } from 'prop-types';
import { ImageBackground, View } from 'react-native';
import { GridCell } from './grid-cell';

export class GridImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0
        };

        this.onLayout = this.onLayout.bind(this);
        this.renderGrid = this.renderGrid.bind(this);
    }

    onLayout(e) {
        this.setState({ width: e.nativeEvent.layout.width });
    }

    renderGrid() {
        const { width } = this.state;
        const { onGridClick, grid, displayGrid } = this.props;
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(index => (
            <GridCell
                key={index}
                index={index}
                width={width}
                height={width * (3 / 4)}
                callbackData={grid[index].action}
                onPress={onGridClick}
                active={grid[index].active}
                displayGrid={displayGrid}
            />
        ));
    }

    render() {
        const { image, grid } = this.props;
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
                >
                    {grid ? this.renderGrid() : null}
                </ImageBackground>
            </View>
        );
    }
}

GridImage.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    image: PropTypes.number.isRequired, // for some stupid reason RN image is seen as number from PropTypes module
    // eslint-disable-next-line react/forbid-prop-types
    grid: PropTypes.array,
    onGridClick: PropTypes.func,
    displayGrid: PropTypes.bool
};

GridImage.defaultProps = {
    grid: undefined,
    onGridClick: undefined,
    displayGrid: false
};
