import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {useRouter} from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (username === "Pasindu" && password === "1234") {
      console.log("Login");
      console.log(router);
      router.replace("/(tabs)/todo");
    }
  }

  return (
      <LinearGradient colors={["#6a11cb", "#2575fc"]} style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.loginText}>Login</Text>
          <TextInput
              style={styles.textField}
              placeholder="Username"
              placeholderTextColor="#aaa"
              onChangeText={setUsername}
          />
          <TextInput
              style={styles.textField}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry
              onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  loginText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  textField: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#2575fc",
    width: "100%",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
