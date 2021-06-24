import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Image } from "react-native";

import { styles } from "./styles";


export function GuildIcon() {
  const uri = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmforum.ist%2Fmedia%2Fdiscord-logo-png.9007%2Ffull&f=1&nofb=1';
  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  )
}