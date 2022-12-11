import React, { createContext, useContext, useState } from "react";

type TimerContextType = {
    timer: string;
    setTimer: React.Dispatch<React.SetStateAction<string>>;
    getHours: () => string;
    getMinutes: () => string;
    getSeconds: () => string;
    onKeyPress: (key: string) => void;
    onBackspacePress: VoidFunction;
}

const TimerContext = createContext<TimerContextType>(null!);

export function TimerProvider({ children }: { children: React.ReactNode }) {
    const [timer, setTimer] = useState("60");

    function getHours(): string {
        let hours = "00";

        switch (timer.length) {
            case 5:
                hours = "0" + timer[0];
                break;
            case 6:
                hours = timer.slice(0, 2);
                break;
        }

        return hours;
    }

    function getMinutes(): string {    
        let minutes = "00";

        if (timer.length === 3) {
            minutes = "0" + timer[0];
        } else if (timer.length > 3) {
            minutes = timer.slice(timer.length - 4, timer.length - 2);
        }

        return minutes;
    }

    function getSeconds(): string {
        if (timer.length === 0) {
            return "00";
        }

        if (timer.length === 1) {
            return "0" + timer;
        }

        return timer.slice(timer.length - 2, timer.length);
    }

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

    return (
        <TimerContext.Provider value={{ 
            timer, 
            setTimer, 
            getHours, 
            getMinutes, 
            getSeconds, 
            onKeyPress,
            onBackspacePress
        }}>
            { children }
        </TimerContext.Provider>
    );
}

export const useTimer = () => useContext(TimerContext);