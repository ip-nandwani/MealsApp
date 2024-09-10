import { Pressable, StyleSheet, Text, View } from "react-native";

const CategoryGrids = ({ title, color }) => {
  return (
    <View style={[styles.grid, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.gridItem}>
          <Text style={styles.gridText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGrids;

const styles = StyleSheet.create({
  grid: {
    //   backgroundColor: ,
    flex: 1,
    // borderWidth: 3,
    margin: 15,
    height: 150,
    elevation: 3,
    borderRadius: 8,
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  gridItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // padding: 26,
    // overflow: "hidden",
  },
  gridText: {
    fontSize: 18,
    fontWeight: "500",
  },
});
