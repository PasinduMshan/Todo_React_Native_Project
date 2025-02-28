import { Button, FlatList, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { addTodo, deleteTodo, toggleTodo } from "../Reducers/todoSlice";
import { RootState } from "../store/store";

export default function TodoScreen() {
    const [newTodo, setNewTodo] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todo.todos);
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo List</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter a task"
                value={newTodo}
                onChangeText={setNewTodo}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {
                        if (newTodo.trim()) {
                            dispatch(addTodo(newTodo));
                            setNewTodo("");
                        }
                    }}
                >
                    <Text style={styles.addButtonText}>Add Todo</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.viewCompletedButton}
                onPress={() => router.push("/(tabs)/completed")}
            >
                <Text style={styles.viewCompletedText}>View Completed Tasks</Text>
            </TouchableOpacity>

            <FlatList
                data={todos.filter(todo => !todo.completed)} // Show only pending tasks
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <TouchableOpacity onPress={() => dispatch(toggleTodo(item.id))}>
                            <Text style={[styles.todoText, item.completed && styles.completed]}>
                                {item.text}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => dispatch(deleteTodo(item.id))}>
                            <Text style={styles.deleteText}>❌</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f8ff", // Light blue background for the container
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 12,
        paddingLeft: 15,
        fontSize: 16,
        backgroundColor: "#fff", // White background for input
        marginBottom: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    buttonContainer: {
        marginBottom: 15,
    },
    addButton: {
        backgroundColor: "#4CAF50", // Green button for adding todos
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    addButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    viewCompletedButton: {
        marginTop: 15,
        marginBottom: 20,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: "#3498db", // Blue button for viewing completed tasks
        alignItems: "center",
    },
    viewCompletedText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    todoItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 10,
        backgroundColor: "#fff", // White background for todo items
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    todoText: {
        fontSize: 18,
        color: "#333",
    },
    completed: {
        textDecorationLine: "line-through",
        color: "gray",
    },
    deleteText: {
        fontSize: 24,
        color: "#e74c3c", // Red color for the delete button
        fontWeight: "bold",
    },
});
