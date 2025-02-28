import React, { useMemo } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function CompletedTasksScreen() {
    const todos = useSelector((state: RootState) => state.todo.todos);
    const completedTodos = useMemo(() => todos.filter(todo => todo.completed), [todos]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Completed Tasks</Text>
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
        backgroundColor: "#f2f2f2", // Light background for the entire screen
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
});
