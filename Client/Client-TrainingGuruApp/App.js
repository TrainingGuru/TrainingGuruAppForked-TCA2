import {AppRegistry, StyleSheet, View} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import {Router, Route, Switch} from "./routing";
import ClientHome from "./pages/client/ClientHome";
import Workouts from "./pages/client/Workouts";
import {name as appName} from './app.json';

const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
});

const App = () => {
    return (
        <View style={styles.container}>
            <Router>
                <Switch>
                    <Route exact path="/" render={props => <Home {...props} />} />
                    <Route path="/profile" render={props => <Profile {...props} />} />
                    <Route exact path="/homeclient" render={props => <ClientHome {...props} />} />
                    <Route exact path="/workouts" render={props => <Workouts {...props} />} />
                </Switch>
            </Router>
        </View>
    );
}

AppRegistry.registerComponent(appName, () => App);

function makeIconRender(name) {
    return ({ color, size }) => (
        <MaterialCommunityIcons name={name} color={color} size={size} />
    );
}