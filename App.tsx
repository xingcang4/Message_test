import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SmsScreen from "./src/screens/SmsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SMS" component={SmsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
