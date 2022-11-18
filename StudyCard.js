import { Image, Text, View, StyleSheet, Pressable } from "react-native";
import { Divider } from "react-native-paper";

const StudyCard = ({ name, location, person }) => {
  return (
    <>
      <Divider style={styles.divider} />
      <Pressable
        onPress={() => {
          console.log("press");
        }}
      >
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../../assets/grey.png")}
          />
          <View style={[{ flex: 1 }, styles.rightContainer]}>
            <Text
              style={[styles.name, { color: "black" }]}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {name}
            </Text>
            <Text
              style={[styles.location, { color: "black" }]}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {location}
            </Text>
            <Text
              style={[styles.person, { color: "black" }]}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {person}
            </Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 30,
    paddingLeft: 30,
    flexDirection: "row",
  },
  divider: { marginTop: 20, marginBottom: 20 },
  rightContainer: {
    paddingLeft: 10,
  },
  person: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  location: {
    marginTop: 5,
    fontSize: 13,
  },
  name: {
    fontSize: 17,
  },
  image: {
    borderRadius: 5,
    width: 90,
    height: 90,
  },
});

export default StudyCard;
