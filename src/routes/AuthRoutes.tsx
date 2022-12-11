import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Register } from "../screens/Register";
import { SignIn } from "../screens/SignIn";

export type AuthStackParamList = {
    SignIn: undefined,
    Register: undefined,   
}

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

export function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="SignIn" component={SignIn}/>
            <Screen name="Register" component={Register}/>
        </Navigator>
    );
}