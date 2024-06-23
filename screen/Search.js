import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export function Search() {
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const [date3, setDate3] = useState(new Date());

    const handleDateChange1 = (event, selectedDate) => {
        const currentDate = selectedDate || date1;
        setDate1(currentDate);
    };

    const handleDateChange2 = (event, selectedDate) => {
        const currentDate = selectedDate || date2;
        setDate2(currentDate);
    };

    const handleDateChange3 = (event, selectedDate) => {
        const currentDate = selectedDate || date3;
        setDate3(currentDate);
    };

    const formatDateTime = (dateTime) => {
        const year = dateTime.getFullYear();
        const month = ('0' + (dateTime.getMonth() + 1)).slice(-2);
        const day = ('0' + dateTime.getDate()).slice(-2);
        const hours = ('0' + dateTime.getHours()).slice(-2);
        const minutes = ('0' + dateTime.getMinutes()).slice(-2);

        return `${year}-${month}-${day} ${hours}:${minutes}`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titleContainer}>Search</Text>
            <DateTimePicker
                value={date1}
                mode="datetime"
                display="default"
                onChange={handleDateChange1}
            />
            <DateTimePicker
                value={date2}
                mode="datetime"
                display="default"
                onChange={handleDateChange2}
            />
            <DateTimePicker
                value={date3}
                mode="datetime"
                display="default"
                onChange={handleDateChange3}
            />
            <Button title="Log Date 1" onPress={() => console.log(formatDateTime(date1))} />
            <Button title="Log Date 2" onPress={() => console.log(formatDateTime(date2))} />
            <Button title="Log Date 3" onPress={() => console.log(formatDateTime(date3))} />
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
