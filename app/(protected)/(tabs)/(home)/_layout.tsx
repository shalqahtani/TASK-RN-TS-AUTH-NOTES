import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../../../data/styling/colors";
import { router, Stack } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { deleteToken, getToken, storeToken } from "@/api/storage";

const HomeLayout = () => {
  const logout = () => {
    deleteToken(); // <--- This to delete token
    router.push("/Login");
  };

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: colors.white,
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => logout()}>
            <MaterialIcons name="logout" size={30} color="red" />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="[noteId]" options={{ title: "Note Details" }} />
    </Stack>
  );
};

export default HomeLayout;
