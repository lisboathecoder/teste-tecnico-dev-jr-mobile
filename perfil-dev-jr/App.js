import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProfileScreen from "./screens/ProfileScreen.js";
import ContactScreen from "./screens/ContactScreen.js";
import StacksScreen from "./screens/StacksScreen.js";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Stacks"
        component={StacksScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;
            if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Stacks") {
              iconName = focused ? "build" : "build-outline";
            } else if (route.name === "Contact") {
              iconName = focused ? "call" : "call-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "black",
          tabBarIconStyle: { marginTop: -3 }, 
        })}
      >
         <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen
          name="Stacks"
          component={StacksScreen}
          options={{ title: "Habilidades" }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{ title: "Contato" }}
        />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
}
