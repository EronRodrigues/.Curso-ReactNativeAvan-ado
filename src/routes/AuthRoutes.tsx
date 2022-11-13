import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Register } from "../screens/Register";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="signIn" component={SignIn}/>
            <Screen name="register" component={Register}/>
        </Navigator>
    );
}