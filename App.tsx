import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from "styled-components/native";
import theme from './src/theme';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>loading...</Text>
  }

  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={theme}>
        <StatusBar style="dark" translucent backgroundColor="transparent"/>
        <Routes/>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
