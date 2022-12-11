import { useEffect, useRef, useState } from "react";
import { Text, View, Dimensions } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Button } from "../../components/Button";
import { useTimer } from "../../contexts/TimerContext";
import { colors } from "../../styles/colors";
import { styles } from "./styles";

const screenWidth = Dimensions.get("screen").width;

type Props = {
    toggleScreen: VoidFunction;
}

export function TimerScreen(props: Props) {
    // Passos:
    // 1º Obter o timer que foi definido na tela de definição
    const { timer } = useTimer();

    // 2º Converter ele para segundos
    const [remainingSeconds, setRemainingSeconds] = useState(0);
    const InitialValue = useRef(0);
    const timerRef = useRef<NodeJS.Timeout>(null!);
    
    useEffect(() => {
        const formattedTimer = timer.padStart(6, "0");

        const hours = +formattedTimer.slice(0, 2);
        const minutes = +formattedTimer.slice(2, 4);
        const seconds = +formattedTimer.slice(4, 6);

        const remainingSeconds = hours * 3600 + minutes * 60 + seconds;

        InitialValue.current = remainingSeconds
        setRemainingSeconds(remainingSeconds);
        
    }, []);
    // 3º Decrementar o valor a cada segundo

    useEffect(() => {
        // setInterval -> Repete uma ação a cada x 
        // setTimeout -> Agenda uma ação para acontecer em x segundos

        timerRef.current = setTimeout(() => {
            if (remainingSeconds) {
                setRemainingSeconds(remainingSeconds - 1);
            }
        }, 1000)
    }, [remainingSeconds]);

    function getRemainingHours(): string {
        const hours = Math.floor(remainingSeconds / 3600)

        return hours < 10 ? "0" + hours : String(hours);
    }

    function getRemainingMinutes(): string {
        const minutes = Math.floor((remainingSeconds / 60) % 60);

        return minutes < 10 ? "0" + minutes : String(minutes);
    }

    function getRemainingSeconds(): string {
        const seconds = Math.floor(remainingSeconds % 60);

        return seconds < 10 ? "0" + seconds : String(seconds);
    }
    
    // 4º Implementar a funcionalidade de pausa

    const [isPaused,setIsPaused] = useState(false);

    function pauseTimer() {
        clearTimeout(timerRef.current);
        setIsPaused(true)
    }

    function resumeTimer() {
        if (remainingSeconds) {
            setRemainingSeconds(remainingSeconds - 1);
            setIsPaused(false);
        }
    }

    return (
        <>
            <View style={styles.progressBarContainer}>
                <AnimatedCircularProgress
                    size={screenWidth * .8}
                    width={5}
                    fill={remainingSeconds * 100 / InitialValue.current}
                    tintColor={colors.buttonBlue}
                    backgroundColor={"#3D5875"}
                >
                    {
                        () => <Text style={styles.text}>{getRemainingHours()}:{getRemainingMinutes()}:{getRemainingSeconds()}</Text>
                    }
                </AnimatedCircularProgress>
            </View>
            <View style={styles.buttonsContainer}>
                <Button text="<" onPress={props.toggleScreen} size="small" color="purple"/>
                {
                    isPaused ?
                    <Button text="▶" onPress={resumeTimer}/> :
                    <Button text="||" onPress={pauseTimer}/>
                }
            </View>
        </>
    );
}