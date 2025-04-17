import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../data/styling/colors";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: colors.primary,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "white",
          marginBottom: 20,
        }}
      >
        Unleash Your Creativity
      </Text>

      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 16,
          marginBottom: 20,
        }}
      >
        Welcome to our note-taking platform, where ideas flourish and knowledge
        grows. Capture your thoughts, jot down inspiration, and organize your
        life—all in one place.
      </Text>

      <Link
        href="/(auth)"
        style={{ backgroundColor: colors.white, padding: 10, borderRadius: 5 }}
      >
        <Text style={{ color: colors.primary, fontWeight: "bold" }}>
          Get Started
        </Text>
      </Link>

      <Link
        href="/(users)"
        style={{ backgroundColor: colors.white, padding: 10, borderRadius: 5 }}
      >
        <Text style={{ color: colors.primary, fontWeight: "bold" }}>
          Get users
        </Text>
      </Link>
      <Link
        href="/(notes)"
        style={{ backgroundColor: colors.white, padding: 10, borderRadius: 5 }}
      >
        <Text style={{ color: colors.primary, fontWeight: "bold" }}>
          Get notes
        </Text>
      </Link>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
