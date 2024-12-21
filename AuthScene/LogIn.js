import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import * as Font from "expo-font";
import CustomButton from "../Components/CustomButton";
import { useState } from "react";

const { width, height } = Dimensions.get("window");

const imageHeader = require("../assets/Images/Screenshot 2024-12-17 012023.png");

export default function LogIn({ navigation }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const logInValidation = () => {
    //backedn log in
  };

  const [fontsLoaded] = Font.useFonts({
    "Lexend-Bold": require("../assets/Fonts/Lexend/Lexend-Bold.ttf"),
    Lexend: require("../assets/Fonts/Lexend/Lexend-Regular.ttf"),
  });

  return (
    <View style={logInStyles.container}>
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <Image
          source={imageHeader}
          resizeMethod="contain"
          style={{ width: width, height: height * 0.4 }}
        />
        <View style={logInStyles.contentContainer}>
          <Text style={logInStyles.textStyle}>Log In</Text>

          <TextInput
            placeholder="Email"
            style={logInStyles.textInput}
            placeholderTextColor={"#94ABC7"}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Password"
            style={logInStyles.textInput}
            placeholderTextColor={"#94ABC7"}
            value={password}
            onChangeText={setPassword}
          />

          <CustomButton
            style={logInStyles.startedButton}
            colorBefore="#1E6DD5"
            colorAfter="lightgrey"
            text="log in"
            onClick={logInValidation}
            textStyle={logInStyles.startedButtonText}
          ></CustomButton>

          <View style={logInStyles.center}>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "#1E6DD5" : "transparent" },
              ]}
              onPress={() => navigation.navigate("signUp")}
            >
              <Text style={logInStyles.infoText}>
                Don't have an account? Sign in
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const logInStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121A21",
    justifyContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  contentContainer: {
    alignItems: "center",
    padding: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    textAlign: "center",
    fontFamily: "Lexend-Bold",
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
    marginBottom: 30,
  },
  infoText: {
    color: "#94ABC7",
    textAlign: "center",
    fontFamily: "Lexend",
    fontSize: width * 0.035,
    marginVertical: 10,
  },
  startedButton: {
    width: width * 0.85,
    height: height * 0.07,
    borderRadius: width * 0.3,
    backgroundColor: "#1A78E5",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  startedButtonText: {
    fontSize: width * 0.045,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Lexend",
  },
});
