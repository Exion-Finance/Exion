import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SecondaryFontText } from "@/components/SecondaryFontText";
import { PrimaryFontMedium } from '@/components/PrimaryFontMedium';
import { StatusBar } from 'expo-status-bar';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!', headerShown: true, headerTitleStyle: {
      fontFamily: 'DMSansMedium',
      fontSize: 19,
    } }} />
      <View style={styles.container}>
        <StatusBar style='dark'/>
        <Ionicons name="notifications" size={40} color="white" />
        <SecondaryFontText style={styles.title}>This screen doesn't exist.</SecondaryFontText>
        <PrimaryFontMedium style={styles.linkText}>Looks like you lost your way</PrimaryFontMedium>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8'
  },
  title: {
    fontSize: 25,
    color: 'black',
    marginTop: 26,
    textAlign: 'center'
  },
  linkText: {
    fontSize: 16,
    marginTop: 15,
    color: 'grey',
  },
});
