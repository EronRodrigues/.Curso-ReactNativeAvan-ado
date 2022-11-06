import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { TimerProvider } from './src/contexts/TimerContext';
import { TimerScreen } from './src/screens/TimerScreen';
import { colors } from './src/styles/colors';

export default function App() {
  return (
    <TimerProvider>
      <StatusBar/>
      <SafeAreaView style={styles.container}>
        {/*<TimerDefinitionSreen/>*/}
        <TimerScreen/>
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
