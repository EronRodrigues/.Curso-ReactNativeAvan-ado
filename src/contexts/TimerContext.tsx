import React, { createContext, useContext, useState } from "react";

type TimerContextType = {
    timer: string;
    setTimer: React.Dispatch<React.SetStateAction<string>>;
    getHours: () => string;
    getMinutes: () => string;
    getSeconds: () => string;
    onKeyPress: (key: string) => void
    onBackspacePress: () => void
}

const TimerContext = createContext<TimerContextType>(null!);

export function TimerProvider({ children }: { children: React.ReactNode }) {
    const [timer, setTimer] = useState("");

    function onKeyPress(key: string) {
        if (timer.length >= 6) {
            return;
        }
        setTimer(prev => prev + key);
    }

    function onBackspacePress() {
        if (timer.length) {
            setTimer(prev => prev.slice(0, -1));
        }
    }

    function getHours(): string {
        if ( timer.length <= 4 ) {
            return "00";
        }
        if ( timer.length === 5 ) {
            return "0" + timer[0]
        }
        return timer.slice(timer.length -6, timer.length -4)
    }

    function getMinutes(): string {
        if ( timer.length <= 2) {
            return "00";
        }
        if ( timer.length === 3) {
            return "0" + timer[0];
        }

        return timer.slice(timer.length - 4, timer.length - 2)
    }

    function getSeconds(): string {
        if ( timer.length === 0) {
            return "00";
        }
        if ( timer.length === 1) {
            return "0" + timer;
        }
 
        return timer.slice(timer.length - 2, timer.length)
    }

    return (
        <TimerContext.Provider value={{ timer, setTimer, getHours, getMinutes, getSeconds, onKeyPress, onBackspacePress }}>
            { children }
        </TimerContext.Provider>
    );
}

export const useTimer = () => useContext(TimerContext);