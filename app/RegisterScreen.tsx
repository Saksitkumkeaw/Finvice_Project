import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { register } from "../src/Authentication/authService";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const user = await register(name, email, password);
      Alert.alert("✅ Success", `Account created: ${user.email}`);
      router.replace("/LoginScreen"); // กลับไปหน้า Login
    } catch (err: any) {
      Alert.alert("❌ Failed", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Go to Login" onPress={() => router.push("/LoginScreen")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
});
