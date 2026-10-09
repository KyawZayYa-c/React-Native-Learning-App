import React, { JSX } from 'react';

import { View, Text, StyleSheet, useColorScheme } from 'react-native';

export default function AppPro():JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={styles.container}>
            <Text style= {isDarkMode ? styles.whiteText : styles.darkText} >Hello World</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        fontSize: 40,
        justifyContent: 'center',
    },
    whiteText: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    },
    darkText: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
    }
})