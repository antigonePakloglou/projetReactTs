import { Redirect } from "expo-router";
import { createContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { recepies } from "./constants/Datas";

//création d'un context
export const RecettesContext = createContext(null);

export default function Page() {
  
  return (
    <View style={styles.container}>
     
        <Redirect href="/home"/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
