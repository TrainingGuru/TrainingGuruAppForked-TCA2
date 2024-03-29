import React, {useEffect, useState} from 'react';
import ImagePicker from 'react-native-image-picker';
import {View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Alert} from 'react-native';
import {useNavigation} from "@react-navigation/core";
import APIClient from "../services/client-api";
import {LoadingDialog} from "../components/LoadingDialog";
import  AsyncStorage from "@react-native-async-storage/async-storage";

export const LoginScreen = ({  }) => {
    const navigation = useNavigation();

    const [accountType, setAccountType] = useState('client');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [goals, setGoals] = useState([]);
    const [coachCode, setCoachCode] = useState('');
    const [image, setImage] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [clientId, setClientId] = useState(null);


    const handleLogin = async () => {
        // navigation.navigate("ClientHome")
        setLoading(true) // Add this line
        const r = await APIClient.loginClient(email, password);


        if (r.value) {
            console.log("twest")
            console.log(r)
            await AsyncStorage.setItem('clientId', r.clientId.toString());
            console.log("client Id" + await AsyncStorage.getItem('clientId'))
            Alert.alert("Success", "successfully logged in", [
                {text: "OK", onPress: () => navigation.navigate("ClientHome")}
            ], {cancelable: false});
        } else {
            Alert.alert("Not Success", "We Were unable to login those details", [
                {text: "ok", onPress: () => console.log("closed")}
            ], {cancelable: false});
        }
        setLoading(false) // Add this line




    };


    useEffect(() => {

        async function checkUserLoggedIn() {
            if (await AsyncStorage.getItem('clientId') !== null) {
                navigation.navigate("ClientHome")
            }
        }


        checkUserLoggedIn();

    }, [])

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        logo: {
            width: 200,
            height: 200,
            marginBottom: 20,
        },
        input: {
            width: '80%',
            height: 40,
            borderWidth: 1,
            borderColor: 'gray',
            marginVertical: 10,
            paddingHorizontal: 10,
        },
        button: {
            width: '80%',
            backgroundColor: '#4f83cc',
            paddingVertical: 10,
            alignItems: 'center',
            marginVertical: 10,
        },
        buttonText: {
            color: 'white',
            fontWeight: 'bold',
        },
        forgotPassword: {
            alignSelf: 'flex-start',
            marginLeft: '80%',
        },
        forgotPasswordText: {
            color: 'gray',
        },
        orText: {
            marginVertical: 10,
        },
        createAccount: {
            alignSelf: 'flex-end',
            marginRight: '80%',
        },
        createAccountText: {
            color: 'gray',
        },
        picker: {
            width: '80%',
            height: 40,
            borderWidth: 1,
            borderColor: 'gray',
            marginVertical: 10,
            paddingHorizontal: 10,
        },
        imagePicker: {
            width: '80%',
            backgroundColor: '#4f83cc',
            paddingVertical: 10,
            alignItems: 'center',
            marginVertical: 10,
        },
        previewImage: {
            width: '80%',
            height: 200,
            marginVertical: 10,
        },
        signupButton: {
            width: '80%',
            backgroundColor: '#4f83cc',
            paddingVertical: 10,
            alignItems: 'center',
            marginVertical: 10,
        },
        signupButtonText: {
            color: 'white',
            fontWeight: 'bold',
        },
    });

    return (
        <View style={styles.container}>
            {isLoading && <View><LoadingDialog loading={true}/></View>}
            <Image source={{uri: "https://assets.api.uizard.io/api/cdn/stream/9789bb7f-8141-48f9-87dd-f2ebdadcbec6.png"}} style={styles.logo} />
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>OR</Text>
            <TouchableOpacity style={styles.createAccount} onPress={() => navigation.navigate('CreateClientPage')}>
                <Text style={styles.createAccountText}>Create Client Account</Text>
            </TouchableOpacity>


            {image && <Image source={{ uri: image.uri }} style={styles.previewImage} />}
        </View>
    );
};