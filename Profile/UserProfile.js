import { SafeAreaView, View, Text, StyleSheet, Dimensions } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import { majors } from "../data/majors";
import activity from "../data/activity";
import CustomButton from "../Components/CustomButton";
import * as Font from "expo-font";

const { width, height } = Dimensions.get("window");

export default function UserProfile() {
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [genderItems, setGenderItems] = useState([
    { label: "male", value: "male" },
    { label: "female", value: "female" },
    { label: "other", value: "other" },
  ]);

  const [majorOpen, setMajorOpen] = useState(false);
  const [majorValue, setMajorValue] = useState(null);
  const [majorItems, setMajorItems] = useState(majors);

  const [yearOpen, setYearOpen] = useState(false);
  const [yearValue, setYearValue] = useState(null);
  const [yearItems, setYearItems] = useState([
    { label: "freshmen: 1", value: 1 },
    { label: "sophmore: 2", value: 2 },
    { label: "junior: 3", value: 3 },
    { label: "senior: 4", value: 4 },
    { label: "other: >4", value: 5 },
  ]);

  const [levelOpen, setLevelOpen] = useState(false);
  const [levelValue, setLevelValue] = useState(null);
  const [levelItems, setLevelItems] = useState([
    { label: "beginner: 1-2 days per week", value: "beginner" },
    { label: "intermediate: 3-4 days per week", value: "intermediate" },
    { label: "advanced: 5-6 days per week", value: "advanced" },
  ]);

  const [activityOpen, setActivityOpen] = useState(false);
  const [activityValue, setActivityValue] = useState(null);
  const [activityItems, setActivityItems] = useState(activity);

  const nextButton = () => {};

  const [fontsLoaded] = Font.useFonts({
    "Lexend-Bold": require("../assets/Fonts/Lexend/Lexend-Bold.ttf"),
    "Lexend": require("../assets/Fonts/Lexend/Lexend-Regular.ttf"),
  });

  return (
    <SafeAreaView style={userProfileStyles.container}>
        <View style={{justifyContent: 'space-between', padding: 15}}>
            <Text style={[userProfileStyles.title, {fontFamily: 'Lexend-Bold', fontSize: 16}]}>
                Answer a few questions and we'll find the perfect workout buddy for you.
            </Text>
            
        </View>
        <View style={{width: width, padding: 16}}>
            <Text style={[userProfileStyles.title, {color: 'lightgrey'}]}>
                This information will only be used to match you with a partner
            </Text>
        </View>

      <View style={{padding: 5}}>
        <View style={userProfileStyles.dropDownContainer}>
            <Text style={userProfileStyles.subHeading}>Gender</Text>
            <DropDownPicker
            open={genderOpen}
            value={genderValue}
            items={genderItems}
            setOpen={setGenderOpen}
            setValue={setGenderValue}
            setItems={setGenderItems}
            searchable={false}
            placeholder="Select your gender"
            placeholderStyle={{fontFamily: 'Lexend', fontSize: 14, color: "white"}}
            style={[userProfileStyles.dropdown, { zIndex: 0 }]}
            textStyle={{color: 'white', fontFamily: 'Lexend'}}
            dropDownContainerStyle={userProfileStyles.dropdownContainer}
            />
        </View>
        
        <View style={userProfileStyles.dropDownContainer}>
            <Text style={userProfileStyles.subHeading}>Major</Text>
                {genderOpen == true ? (
                <DropDownPicker
                    open={majorOpen}
                    value={majorValue}
                    items={majorItems}
                    setOpen={setMajorOpen}
                    setValue={setMajorValue}
                    setItems={setMajorItems}
                    searchable={true}
                    placeholder="Select a major"
                    placeholderStyle={{fontFamily: 'Lexend', fontSize: 14, color: "white"}}
                    searchPlaceholder="Search..."
                    style={[userProfileStyles.dropdown, { zIndex: 0 }]}
                    textStyle={{color: 'white', fontFamily: 'Lexend'}}
                    dropDownContainerStyle={userProfileStyles.dropdownContainer}
                />
                ) : (
                <DropDownPicker
                    open={majorOpen}
                    value={majorValue}
                    items={majorItems}
                    setOpen={setMajorOpen}
                    setValue={setMajorValue}
                    setItems={setMajorItems}
                    searchable={true}
                    placeholder="Select a major"
                    placeholderStyle={{fontFamily: 'Lexend', fontSize: 14, color: "white"}}
                    searchPlaceholder="Search..."
                    style={[userProfileStyles.dropdown, { zIndex: 1 }]}
                    textStyle={{color: 'white', fontFamily: 'Lexend'}}
                    dropDownContainerStyle={userProfileStyles.dropdownContainer}
                />
                )}
        </View>
        
        <View style={userProfileStyles.dropDownContainer}>
            <Text style={userProfileStyles.subHeading}>College year</Text>
            <DropDownPicker
            open={yearOpen}
            value={yearValue}
            items={yearItems}
            setOpen={setYearOpen}
            setValue={setYearValue}
            setItems={setYearItems}
            searchable={false}
            placeholder="Select your college year"
            placeholderStyle={{fontFamily: 'Lexend', fontSize: 14, color: "white"}}
            style={[userProfileStyles.dropdown, { zIndex: 0 }]}
            textStyle={{color: 'white', fontFamily: 'Lexend'}}
            dropDownContainerStyle={userProfileStyles.dropdownContainer}
            />
        </View>

        <View style={userProfileStyles.dropDownContainer}>
            <Text style={userProfileStyles.subHeading}>Fitness Level</Text>
            <DropDownPicker
            open={levelOpen}
            value={levelValue}
            items={levelItems}
            setOpen={setLevelOpen}
            setValue={setLevelValue}
            setItems={setLevelItems}
            searchable={false}
            placeholder="Select your fitness level"
            placeholderStyle={{fontFamily: 'Lexend', fontSize: 14, color: "white"}}
            style={[userProfileStyles.dropdown, { zIndex: 0 }]}
            textStyle={{color: 'white', fontFamily: 'Lexend'}}
            dropDownContainerStyle={userProfileStyles.dropdownContainer}
            />
        </View>
        
        <View style={userProfileStyles.dropDownContainer}>
            <Text style={userProfileStyles.subHeading}>
            I'm looking for someone to do
            </Text>
            <DropDownPicker
            multiple={true}
            min={0}
            open={activityOpen}
            value={activityValue}
            items={activityItems}
            setOpen={setActivityOpen}
            setValue={setActivityValue}
            setItems={setActivityItems}
            searchable={true}
            placeholder="Select an activity"
            placeholderStyle={{fontFamily: 'Lexend', fontSize: 14, color: "white"}}
            searchPlaceholder="Search..."
            style={[userProfileStyles.dropdown, { zIndex: 0 }]}
            textStyle={{color: 'white', fontFamily: 'Lexend'}}
            dropDownContainerStyle={userProfileStyles.dropdownContainer}
            />
        </View>
        
      </View>

      <CustomButton
        style={userProfileStyles.nextButton}
        colorBefore="#1E6DD5"
        colorAfter="lightgrey"
        text="Next"
        onClick={nextButton}
        textStyle={userProfileStyles.nextButtonText}
      ></CustomButton>
    </SafeAreaView>
  );
}

const userProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#121A21",
  },
  dropdown: {
    width: "95%",
    borderRadius: 15,
    backgroundColor: "#292938",
  },
  dropdownContainer: {
    width: "90%",
    borderColor: "#ccc",
    backgroundColor: "#292938",
  },
  nextButton: {
    width: width * 0.85,
    height: height * 0.07,
    borderRadius: width * 0.3,
    backgroundColor: "#1A78E5",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  nextButtonText: {
    fontSize: width * 0.045,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Lexend",
  },
  title: {
    color: "white",
    fontFamily: 'Lexend',
    fontSize: 14,
  },
  subHeading: {
    color: "lightgrey",
    fontSize: 14,
    fontFamily: 'Lexend',
    marginBottom: 5,
  },
  dropDownContainer: {
    marginBottom: 20,
  }
});
