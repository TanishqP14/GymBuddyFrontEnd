import {View, StyleSheet, Text, Image, TextInput, Dimensions, ScrollView, TouchableOpacity, Pressable, SafeAreaView} from "react-native";
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useEffect, useState } from "react";

const logo = require("../assets/Images/Logo.png");
const {width, height} = Dimensions.get("window");

export default function SignUp({navigation}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errors, setError] = useState({});

    let formValidation = () => {
        let error = {};
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
        <SafeAreaView style={signUpStyles.safeContainer}>
            <View style={signUpStyles.titleContainer}>
                    <Image source={logo} style={signUpStyles.logo} resizeMode="contain" />
                    <Text style={signUpStyles.title}>Gym Buddy</Text>
                </View>
                <Text style={signUpStyles.subHeader}>Join us for the best fitness experience.</Text>
            <ScrollView keyboardShouldPersistTaps="handled">
                <View style={signUpStyles.container}>
                    <Text style={signUpStyles.inputHeader}>Name</Text>
                    {errors.userError && <Text style={signUpStyles.error}>{errors.userError}</Text>}
                    <TextInput
                        style={signUpStyles.input}
                        placeholder="John Smith"
                        placeholderTextColor="#94ABC7"
                        value={name}
                        onChangeText={(val) => setName(val)}
                    />

                    <Text style={signUpStyles.inputHeader}>Email</Text>
                    {errors.emailError && <Text style={signUpStyles.error}>{errors.emailError}</Text>}
                    <View style={signUpStyles.textInputContainer}>
                        <TextInput
                            style={[signUpStyles.input, { color: 'white' }]}
                            placeholder="Burdel@gatech.edu"
                            placeholderTextColor="#94ABC7"
                            value={email}
                            onChangeText={(val) => setEmail(val)}
                        />
                        <Icon name="email" size={24} color="grey" style={signUpStyles.icon} />
                    </View>

                    <Text style={signUpStyles.inputHeader}>Password</Text>
                    {errors.passwordError && <Text style={signUpStyles.error}>{errors.passwordError}</Text>}
                    <View style={signUpStyles.textInputContainer}>
                        <TextInput
                            style={[signUpStyles.input, { color: 'white' }]}
                            placeholder="Password"
                            placeholderTextColor="#94ABC7"
                            secureTextEntry={!passwordVisible}
                            value={password}
                            onChangeText={(val) => setPassword(val)}
                        />
                        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={signUpStyles.icon}>
                            <Icon name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="grey" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={signUpStyles.center}>
                    <Pressable
                        style={({ pressed }) => [
                            signUpStyles.startedButton,
                            { backgroundColor: pressed ? 'lightgrey' : '#1E6DD5' },
                        ]}
                        onPress={formValidation}
                    >
                        <Text style={signUpStyles.startedButtonText}>Sign Up with Email</Text>
                    </Pressable>
                    <Text style={signUpStyles.infoText}>
                        By signing up, you agree to our Terms of Service and Privacy Policy.
                    </Text>
                </View>
                <View style={signUpStyles.center}>
                    <Pressable
                        style={({ pressed }) => [{ backgroundColor: pressed ? '#1E6DD5' : 'transparent' }]}
                        onPress={() => navigation.navigate('logIn')}
                    >
                        <Text style={signUpStyles.infoText}>Already have an account? Log in.</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const signUpStyles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#121A21',
    },
    container: {
        padding: 20,
        marginTop: 20,
        justifyContent: 'center',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 0.1
    },
    logo: {
        width: width * 0.2,
        height: width * 0.2,
    },
    title: {
        marginLeft: 10,
        color: '#1E6DD5',
        fontSize: width * 0.08,
        fontWeight: 'bold',
        fontFamily: 'Lexend',
    },
    subHeader: {
        color: 'lightgrey',
        fontFamily: 'Lexend',
        fontSize: width * 0.06,
        textAlign: 'center',
        marginTop: 10,
    },
    inputHeader: {
        color: 'lightgrey',
        fontSize: width * 0.04,
        fontFamily: 'Lexend',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        borderRadius: 15,
        backgroundColor: '#243347',
        padding: 15,
        marginBottom: 20,
        color: 'white',
    },
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        right: 10,
        bottom: 30,
    },
    startedButton: {
        width: '90%',
        height: height * 0.07,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },
    startedButtonText: {
        fontSize: width * 0.045,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Lexend',
    },
    error: {
        color: 'red',
        marginBottom: 5,
    },
    infoText: {
        color: '#94ABC7',
        textAlign: 'center',
        fontFamily: 'Lexend',
        fontSize: width * 0.035,
        marginVertical: 10,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});