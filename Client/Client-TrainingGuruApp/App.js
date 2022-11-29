import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import {Container} from "native-base";
import Layout from "./components/structure/Layout";
import Login from "./pages/registration-login/Login";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Router, Route, Switch} from "./routing";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <View >
          <Router>
              <Switch>
                  <Route exact path="/" render={props => <Home {...props} />} />
                  <Route path="/profile" render={props => <Profile {...props} />} />
              </Switch>
          </Router>
      </View>
  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}
