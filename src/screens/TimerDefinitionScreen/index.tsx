import Keyboard from "../../components/Keyboard"
import Display from "../../components/Display";
import { View } from "react-native";

export function TimerDefinitionSreen() {
    return (
        <View>
            <Display/>
            <Keyboard/>
        </View>
    );
}