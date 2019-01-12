import React from 'react';
import { PropTypes } from 'prop-types';
import { ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { style } from '../../game/style/style.js';
import { mapStateToRoom } from '../../engine/utils/ui-helpers/map-state-to-room.js';
import { GridImage } from './game-root-components/grid-image.js';
import { Title } from './game-root-components/title.js';
import { Description } from './game-root-components/description.js';

const pageStyle = StyleSheet.create({
    page: {
        color: 'white',
        flex: 0,
        alignItems: 'stretch'
    },
    pageContent: {
        margin: 24,
        marginTop: 12,
        marginBottom: 0,
        maxWidth: 640
    }
});

// eslint-disable-next-line react/prefer-stateless-function
export class GameRootPageContent extends React.Component {
    render() {
        const { ui } = this.props;

        return (
            <ImageBackground
                source={style.backgroundImage}
                style={[{ width: '100%', height: '100%' }, pageStyle.page]}
            >
                <ScrollView style={pageStyle.pageContent}>
                    {ui.image ? <GridImage image={ui.image} /> : null}

                    <Title title={ui.title} />
                    <Description description={ui.description} />
                </ScrollView>
            </ImageBackground>
        );
    }
}

GameRootPageContent.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    ui: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    state,
    ui: mapStateToRoom(state)
});

export const GameRootPage = connect(mapStateToProps)(GameRootPageContent);
