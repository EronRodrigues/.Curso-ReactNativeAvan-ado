import { View } from "react-native";
import { Display } from "../../components/Display";
import { Keyboard } from "../../components/Keyboard";

type Props = {
    toggleScreen: VoidFunction;
}

export function TimerDefinitionScreen(props: Props) {
    return (
        <View>
            <Display />
            <Keyboard toggleScreen={props.toggleScreen}/>
        </View>
    );
}