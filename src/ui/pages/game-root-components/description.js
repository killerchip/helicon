import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'black',
        padding: 4,
        marginBottom: 4,
        marginTop: 4
    },
    text: {
        color: 'white'
    }
});

export const Description = props => {
    const { description } = props;
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{description}</Text>
        </View>
    );
};

Description.propTypes = {
    description: PropTypes.string.isRequired
};
