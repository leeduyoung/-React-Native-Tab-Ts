import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class LinksScreen extends React.Component 
{

    static navigationOptions =
        {
            title: 'Links',
        };

    public render(): JSX.Element 
    {
        return (
            <View style={styles.container}>
                <Text>Links Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});