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
        color: 'white',
        fontSize: 16
    }
});

export const Title = props => {
    const { title } = props;
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired
};
