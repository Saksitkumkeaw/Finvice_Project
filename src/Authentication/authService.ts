import { API_URL } from "@env";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function register(name: string, email: string, password: string) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  await fetch(`${API_URL}/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email: user.email }),
  });

  return user;
}

export async function login(email: string, password: string) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}
