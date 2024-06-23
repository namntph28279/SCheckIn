import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleContainer}>home</Text>
            <Button
                title='Show Alert'
                color='black'
                onPress={() => {
                    Alert.alert(
                        ' Title',
                        ' Message',
                        [
                            { text: 'Option 1', onPress: () => console.log('Option 1 Pressed') },
                            { text: 'Option 2', onPress: () => console.log('Option 2 Pressed') },
                            {
                                text: 'Cancel',
                                style: 'cancel',
                                onPress: () => console.log('Cancel Pressed')
                            }
                        ],
                        { cancelable: false }
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    titleContainer: {
        color: 'pink',
        marginBottom: 20,
    },
});
