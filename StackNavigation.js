import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./BottomTabNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginScreen,
  SignupScreen,
  CreateStudyScreen,
  JoinStudyScreen,
  StudyListScreen,
  SearchScreen,
} from "../Screens";
import ModifyScreen from "../Screens/ModifyScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerTitleAlign: "center",
          cardStyle: { backgroundColor: "white" },
          headerTintColor: "black",
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            headerTransparent: true,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={BottomTabNavigation}
        />
        <Stack.Screen name="JoinStudy" component={JoinStudyScreen} />
        <Stack.Screen name="StudyList" component={StudyListScreen} />
        <Stack.Screen name="CreateStudy" component={CreateStudyScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ModifyStudy" component={ModifyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
