import { TouchableOpacity } from "react-native";
import Lottie from "lottie-react-native";
import { useRef, useState, useEffect } from "react";
import { styles } from "./styles";

type Props = {
    onCheck: VoidFunction;
    value: boolean;
}

export function Checkbox({ onCheck, value }: Props) {
    const animation = useRef<any>(null);
    const firstRun = useRef(true);

    useEffect(() => {
        if (firstRun.current) {
            if (!value) {
                animation.current.play(0, 0);
            } else {
                animation.current.play(30, 30);
            }
        } else {
            if (!value) {
                animation.current.play(30, 0);
            } else {
                animation.current.play(0, 30);
            }
        }
    }, [value]);

    function handleCheck() {
        firstRun.current = false;
        onCheck();
    }

    return (
        <TouchableOpacity style={styles.checkbox} onPress={handleCheck}>
            <Lottie
                source={require("../../assets/checkbox.json")}
                loop={false}
                autoPlay={false}
                resizeMode="cover"
                ref={animation}
                style={{ height: 80, width: 80 }}
            />
        </TouchableOpacity>
    )
}