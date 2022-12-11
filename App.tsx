import { useState } from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import { TimerProvider } from './src/contexts/TimerContext';
import { TimerDefinitionScreen } from './src/screens/TimerDefinitionScreen';
import { TimerScreen } from './src/screens/TimerScreen';
import { colors } from './src/styles/colors';

export default function App() {
  const [timerStarted, setTimerStarted] = useState(false);
  return (
    <TimerProvider>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        {
          timerStarted ?
            <TimerScreen toggleScreen = {() => setTimerStarted(!timerStarted)}/> :
            <TimerDefinitionScreen toggleScreen = {() => setTimerStarted(!timerStarted)}/>
        }
      </SafeAreaView>
    </TimerProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
