import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrids from "../components/CategoryGrids";

const renderItemList = (itemdata) => {
  return (
    <CategoryGrids title={itemdata.item.title} color={itemdata.item.color} />
  );
};

const CategoryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>All Categories</Text>
      </View>
      <View style={styles.grids}>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={renderItemList}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  mainTextContainer: {
    flex: 1,
    backgroundColor: "#581717",
    width: "100%",
    padding: 4,
    // borderColor: "black",
    // borderWidth: 5,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  mainText: {
    fontSize: 24,
    // alignContent: "center",
    textAlign: "center",
    color: "#fff",
  },
  grids: {
    flex: 23,
  },
});
