import React, { useMemo } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useRouter } from "expo-router";

export default function CompletedTasksScreen() {
    const todos = useSelector((state: RootState) => state.todo.todos);
    const completedTodos = useMemo(() => todos.filter(todo => todo.completed), [todos]);
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Completed Tasks</Text>

            {/* Back to Todo List Button */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.push("/(tabs)/todo")}
            >
                <Text style={styles.backButtonText}>Back to Todo List</Text>
            </TouchableOpacity>

            <FlatList
                data={completedTodos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <Text style={styles.completed}>{item.text}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f8ff", // Light blue background for the entire screen
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        marginBottom: 20,
    },
    todoItem: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    completed: {
        fontSize: 18,
        color: "#999",
        textDecorationLine: "line-through",
    },
    backButton: {
        marginBottom: 15,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: "#3498db", // Blue button for going back to the todo list
        alignItems: "center",
    },
    backButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
