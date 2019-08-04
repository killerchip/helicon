import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { style } from '../../game/style/style.js';
import { startGame } from '../../engine/redux/actions.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'blue'
    },
    instructions: {
        textAlign: 'center',
        color: 'blue',
        marginBottom: 5
    }
});

class HomePageContent extends React.Component {
    constructor(props) {
        super(props);

        this.onNewGame = this.onNewGame.bind(this);
        this.onContinueGame = this.onContinueGame.bind(this);
    }

    onNewGame() {
        const { onNewGame, navigation } = this.props;
        onNewGame();
        navigation.navigate('GameRootPage');
    }

    onContinueGame() {
        const { navigation } = this.props;
        navigation.navigate('GameRootPage');
    }

    render() {
        const { app } = this.props;
        return (
            <ImageBackground
                source={style.backgroundImage}
                style={{ width: '100%', height: '100%' }}
            >
                <View style={styles.container}>
                    <Text style={styles.welcome}>{style.appTitle}</Text>
                    <Text style={styles.instructions}>
                        {style.appDescription}
                    </Text>
                    <Button
                        onPress={this.onNewGame}
                        title="New Game"
                        color="rgba(0,0,0,0)"
                    />
                    {app.gameStarted ? (
                        <Button
                            onPress={this.onContinueGame}
                            title="Continue"
                            color="rgba(0,0,255,0)"
                        />
                    ) : null}
                </View>
            </ImageBackground>
        );
    }
}

HomePageContent.propTypes = {
    onNewGame: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    app: PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    onNewGame: () => dispatch(startGame())
});

export const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageContent);
