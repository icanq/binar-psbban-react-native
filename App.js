import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import s from "./style";

export default function App() {
  return (
    <View style={styles.container}>
      {/* 1. inline style */}
      <Text style={{ color: "red" }}>Text Pertama Merah</Text>
      {/* 2. object style pake stylesheet.create */}
      <Text style={styles.textBiru}>Text Kedua Biru</Text>
      {/* 3. object style tapi global */}
      <Text style={s.textHijau}>Text Ketiga Hijau</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textBiru: {
    color: "blue",
    marginTop: "10%",
    marginBottom: "10%",
  },
});
