import { onAuthStateChanged, User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { auth } from "../src/Authentication/firebaseConfig";
import LoginScreen from "./LoginScreen";

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  if (!user) {
    return <LoginScreen />;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome, {user.email}</Text>
      <Button title="Logout" onPress={() => auth.signOut()} />
    </View>
  );
};

export default App;