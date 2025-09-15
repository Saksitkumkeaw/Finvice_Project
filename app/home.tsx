import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { auth } from "../src/Authentication/firebaseConfig";

export default function HomePage() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.replace("/"); // กลับไปหน้า login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Welcome to Home</Text>
      <Text>{auth.currentUser?.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 10 },
});
