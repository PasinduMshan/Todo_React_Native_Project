import React from "react";
import { Drawer } from "expo-router/drawer";
import { Text, StyleSheet } from "react-native";

export default function Dashboard() {
    return (
        <Drawer
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#4C6EF5", // Header background color
                },
                headerTintColor: "#fff", // Header text color
                drawerStyle: {
                    backgroundColor: "#fff", // Drawer background color
                    width: 240, // Width of the drawer
                },
            }}
        >
            <Drawer.Screen
                name="todo"
                options={{
                    title: "Todos",
                    drawerLabelStyle: styles.drawerLabel,
                    drawerIcon: () => <Text style={styles.icon}>📝</Text>, // Optional icon
                }}
            />
            <Drawer.Screen
                name="completed"
                options={{
                    title: "Completed Tasks",
                    drawerLabelStyle: styles.drawerLabel,
                    drawerIcon: () => <Text style={styles.icon}>✔️</Text>, // Optional icon
                }}
            />
        </Drawer>
    );
}

const styles = StyleSheet.create({
    drawerLabel: {
        fontSize: 18, // Font size for the drawer item
        fontWeight: "bold", // Bold font for drawer labels
        color: "#333", // Label color
    },
    icon: {
        fontSize: 20,
        marginRight: 10, // Space between icon and text
    },
});
