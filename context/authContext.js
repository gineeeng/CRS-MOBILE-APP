import { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

export const AuthContext = createContext({
  user: null,
  signUp: () => {},
  login: () => {},
  logout: () => {},
  authenticating: false,
  setAuthenticating: () => {},
});

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authenticating, setAuthenticating] = useState(true);

  async function signUp(email, password) {
    const snapshot = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { uid: snapshot.user.uid };
  }

  async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.code, error.message);
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      setAuthenticating(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    signUp,
    login,
    logout,
    authenticating,
    setAuthenticating,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
