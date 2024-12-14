import { StyleSheet, Text, View, Image, Dimensions, StatusBar, Pressable} from 'react-native';
import * as Font from 'expo-font';

const headerImage = require("C:/Users/tanis/OneDrive/Desktop/ReactNative/GymBuddyFrontEnd/assets/Images/wsFirst.png");
const {width, height} = Dimensions.get('window');


export default function WelcomeSceneFirst() {

  const [fontsLoaded] = Font.useFonts({
    'Lexend-Bold': require('C:/Users/tanis/OneDrive/Desktop/ReactNative/GymBuddyFrontEnd/assets/Fonts/Lexend/Lexend-Bold.ttf'),
    'Lexend': require('C:/Users/tanis/OneDrive/Desktop/ReactNative/GymBuddyFrontEnd/assets/Fonts/Lexend/Lexend-Regular.ttf')
  });

  return (
    <View style={welcomeStyles1.container}>
      <StatusBar hidden={true} />
      <Image source={headerImage} style={welcomeStyles1.image} />
      <View style={{margin: 20, marginTop: 50}}>
        <Text style={[welcomeStyles1.textStyle, {fontWeight: 'bold', fontSize: 30, fontFamily: 'Lexend-Bold'}]}>Find the perfect workout 
          partner or group</Text>
      </View>
      <View style={{margin: 10, marginTop: 10}}>
        <Text style={[welcomeStyles1.textStyle, {fontSize: 17, fontFamily: 'Lexend', color: 'lightgrey'}]}>Join a group workout session or find a 
          personal trainer to get in shape. Meet new friends who share your fitness goals.</Text>
      </View>
      <View style={{flexDirection: "row", justifyContent: "space-evenly", width: width*0.3, height: 50, padding: 20, marginTop: 25}}>
        <View style={[welcomeStyles1.dots, {backgroundColor: '#1A78E5'}]}></View>
        <View style={welcomeStyles1.dots}></View>
        <View style={welcomeStyles1.dots}></View>
      </View>
      <View>
        <Pressable style={({pressed}) => [welcomeStyles1.startedButton, {backgroundColor: pressed ? '#334A66' : '#1A78E5'}]}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold', fontFamily: 'Lexend'}}>
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const welcomeStyles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121A21',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: "flex-start",
  },
  image: {
    width: width,
    height: height*0.38,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: 'blue',
    backgroundColor: '#334A66',
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
});
