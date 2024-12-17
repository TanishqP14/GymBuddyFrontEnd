import {View, StyleSheet, Text, Image, TextInput, Dimensions, ScrollView, TouchableOpacity, Pressable} from "react-native";
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useEffect, useState } from "react";

const logo = require("../assets/Images/Logo.png");
const {width, height} = Dimensions.get("window");

export default function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errors, setError] = useState({});

    let formValidation = () => {
        error = {};
        if (name.match(/^[A-Za-z]+$/) == null) {
            error.userError = "Type a valid name.";
        }
        if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) == null) {
            error.emailError = "Type a valid email.";
        }
        if (password.match(/^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/) == null) {
            error.passwordError = "Should atleast contain: 8 characters, 1 Uppercase, 1 Lowercase, and 1 Special character."
        }
        setError(error);
        
        // backend save user.
    }

    const [fontsLoaded] = Font.useFonts({
        'Lexend-Bold': require('../assets/Fonts/Lexend/Lexend-Bold.ttf'),
        'Lexend': require('../assets/Fonts/Lexend/Lexend-Regular.ttf')
    });

    return (
        <View style={signUpStyles.container}> 
            <View style={signUpStyles.titleContainer}>
                <Image source={logo} />
                <Text style={signUpStyles.title}>Gym Buddy</Text>
            </View>
            <Text style={signUpStyles.subHeader}>Join us for the best fitness experience.</Text>
            <ScrollView automaticallyAdjustKeyboardInsets={true}>
                <Text style={signUpStyles.inputHeader}>Name</Text>
                {errors.userError ? <Text style={signUpStyles.error}>{errors.userError}</Text> : null}
                <TextInput style={signUpStyles.input} placeholder="John Smith" placeholderTextColor={"#94ABC7"} value={name} onChangeText={(val) => setName(val)}/>
                
                <Text style={signUpStyles.inputHeader}>Email</Text>
                {errors.emailError ? <Text style={signUpStyles.error}>{errors.emailError}</Text> : null}
                <View style={signUpStyles.textInputContainer}>
                    <TextInput style={[signUpStyles.input, {color: "white"}]} placeholder="Burdel@gatech.edu" placeholderTextColor={"#94ABC7"} 
                        value={email} onChangeText={(val) => setEmail(val)}/>
                    <Icon name={'email'} size={24} color="grey" style={signUpStyles.icon} />
                    
                </View>
                
                <Text style={signUpStyles.inputHeader}>Password</Text>
                {errors.passwordError ? <Text style={signUpStyles.error}>{errors.passwordError}</Text> : null}
                <View style={signUpStyles.textInputContainer}>
                    <TextInput style={[signUpStyles.input, {color: "white"}]} placeholder="Password" placeholderTextColor={"#94ABC7"} secureTextEntry={!passwordVisible} value={password} onChangeText={(val) => setPassword(val)} />                    
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={signUpStyles.icon} >
                        <Icon name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="grey"  />
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Pressable style={({pressed}) => [signUpStyles.startedButton, {backgroundColor: pressed ? 'lightgrey' : '#1E6DD5'}]} onPress={formValidation}>
                    <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold', fontFamily: 'Lexend'}}>
                        Sign Up with Email
                    </Text>
                </Pressable>
            </View>
            </ScrollView>
        </View>
    )
}

const signUpStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#121A21',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        padding: 10,
        color: "#1E6DD5",
        fontSize: 34,
        fontWeight: 10,
        fontFamily: 'Lexend',
    },
    subHeader: {
        color: "lightgrey",
        fontFamily: "Lexend",
        fontSize: 20,
        textAlign: 'center',
        padding: 20
    },
    inputHeader: {
        color: "lightgrey",
        fontSize: 16,
        fontFamily: 'Lexend',
        fontWeight: 5,
        padding: 20,
    },
    input: {
        width: width * 0.9,
        borderRadius: 15,
        backgroundColor: "#243347",
        padding: 20,
        marginBottom: 25,
        color: "white",
        height: 60,
    },
    textInputContainer: {
        flex: 'row',
        flexDirection: 'center'
    },
    icon: {
        position: 'absolute',
        right: 10,
        top: 20
    },
    startedButton: {
        width: width * 0.9,
        height: height * 0.05,
        borderRadius: width * 0.3,
        backgroundColor: '#1A78E5',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    }
})