import {View, StyleSheet, Text, TextInput, Image, Dimensions, ScrollView, Pressable} from "react-native";
import * as Font from 'expo-font';

const {width, height} = Dimensions.get("window");

const imageHeader = require('../assets/Images/Screenshot 2024-12-17 012023.png');

export default function LogIn() {

    const [fontsLoaded] = Font.useFonts({
                            'Lexend-Bold': require('../assets/Fonts/Lexend/Lexend-Bold.ttf'),
                            'Lexend': require('../assets/Fonts/Lexend/Lexend-Regular.ttf')
                        });

    return (

        <View style={logInStyles.container}>
           
            <Image source={imageHeader} resizeMethod="contain" style={{width: width, height: height * 0.4}} />
            <View style={logInStyles.contentContainer}>
            
            <Text style={logInStyles.textStyle}>
                Log In
            </Text>

            <ScrollView automaticallyAdjustKeyboardInsets={true}>
                <TextInput placeholder="Email" style={logInStyles.textInput} placeholderTextColor={"#94ABC7"}/>
                <TextInput placeholder="Password" style={logInStyles.textInput} placeholderTextColor={"#94ABC7"} /> 
                <Pressable style={({pressed}) => [logInStyles.startedButton, {backgroundColor: pressed ? '#334A66' : '##1A78E5', marginTop: 20}]}>
                    <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold', fontFamily: 'Lexend'}}>
                    Already have an account? Log IN
                    </Text>
                </Pressable>
            </ScrollView>
            </View>
        </View>
    )
}

const logInStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121A21',
        justifyContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    contentContainer: {
        alignItems: 'center',
        padding: 20
    },
    textStyle: {
        textAlign: 'center',
        fontFamily: 'Lexend-Bold',
        fontSize: 35,
        color: "white",
        marginBottom: 30,
    },
    textInput: {
        width: width * 0.9,
        borderRadius: 15,
        backgroundColor: "#243347",
        padding: 20,
        marginBottom: 25,
        color: "white",
        height: 60,
        marginBottom: 30
    },
    startedButton: {
        width: width * 0.85,
        height: height * 0.07,
        borderRadius: width * 0.3,
        backgroundColor: '#1A78E5',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      }
})