import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#581717" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      <CategoryScreen />
    </>
  );
}

const styles = StyleSheet.create({});
