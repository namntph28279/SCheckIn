import React from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';



export const FormController = () => {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            username: '',
            email: ''
        }
    });

    const submit = (data) => {
        console.log(data);
        Alert.alert(JSON.stringify(data))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleContainer}>React Hook Form Example in React Native</Text>
            <Controller
                name="username"
                control={control}
                rules={{
                    required: true, minLength: 5
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Enter user name"
                        style={styles.input}
                        placeholderTextColor="black"
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                    />
                )}
            />
            {errors.username && <Text style={styles.textError}>Name is required.</Text>}

            <Controller
                name="email"
                control={control}
                rules={{ required: true, pattern: /^\S+@\S+$/i }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Enter email"
                        style={styles.input}
                        placeholderTextColor="black"
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                    />
                )}
            />
            {errors.email && <Text style={styles.textError}>Enter a valid email</Text>}
            <Button title="Submit" onPress={handleSubmit(submit)} />
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
    input: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: '90%',
        marginTop: 10,
        color: 'black',
        borderColor: 'gray',
    },
    textError: {
        color: 'red'
    }
});
