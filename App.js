import WelcomeSceneFirst from "./WelcomeScene/WelcomeSceneFirst.js";
import WelcomeSceneSec from "./WelcomeScene/WelcomeSceneSec.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "./AuthScene/SignUp.js";
import LogIn from "./AuthScene/LogIn.js";
import UserProfile from "./Profile/UserProfile.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen 1"
        screenOptions={{headerShown: false, statusBarHidden: true}}>
        <Stack.Screen
          name="Screen 1"
          component={WelcomeSceneFirst} />
        <Stack.Screen
          name="Screen 2"
          component={WelcomeSceneSec} />
        <Stack.Screen name="signUp"
          component={SignUp}/>
        <Stack.Screen name="logIn"
        component={LogIn}/>
        <Stack.Screen name="userProfile"
          component={UserProfile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
