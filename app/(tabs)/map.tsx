import React from "react";
import { StyleSheet, View } from "react-native";
import RNMapbox from "@rnmapbox/maps";

RNMapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_PK as string);

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <RNMapbox.MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
