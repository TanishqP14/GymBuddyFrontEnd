import { View, Pressable, Text } from "react-native";

export default function CustomButton({
  style,
  colorBefore,
  colorAfter,
  text,
  onClick,
  textStyle,
}) {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          style,
          { backgroundColor: pressed ? colorAfter : colorBefore },
        ]}
        onPress={onClick}
      >
        <Text style={textStyle}>{text}</Text>
      </Pressable>
    </View>
  );
}
