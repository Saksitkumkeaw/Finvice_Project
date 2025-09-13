import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { login, register } from "../../src/Authentication/authService";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      const user = await login(email, password);
      Alert.alert("Login Success", `Welcome ${user.email}`);
    } catch (error: any) {
      Alert.alert("Login Failed", error.message);
    }
  };

  const handleRegister = async () => {
    try {
      const user = await register(email, password);
      Alert.alert("Register Success", `Account created: ${user.email}`);
    } catch (error: any) {
      Alert.alert("Register Failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Finvice Login</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter Password"
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <View style={{ marginVertical: 5 }} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  }
});
