import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function App() {
  const imagens = [
    "https://placedog.net/500/500?id=1",
    "https://placedog.net/500/500?id=2",
    "https://placedog.net/500/500?id=3",
    "https://placedog.net/500/500?id=4",
    "https://placedog.net/500/500?id=5",
  ];

  const [index, setIndex] = useState(0);
  const [borda, setBorda] = useState("transparent");

  const proximaImagem = () => {
    const novoIndex = (index + 1) % imagens.length;
    setIndex(novoIndex);
    setBorda("transparent");
  };

  const handleGostei = () => {
    setBorda("green");
    setTimeout(proximaImagem, 1000);
  };

  const handleNaoGostei = () => {
    setBorda("red");
    setTimeout(proximaImagem, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>AUAU TINDER</Text>

      <Image
        source={{ uri: imagens[index] }}
        style={[styles.imagem, { borderColor: borda }]}
      />

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botaoNao} onPress={handleNaoGostei}>
          <Text style={styles.textoBotao}>Não Gostei</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoSim} onPress={handleGostei}>
          <Text style={styles.textoBotao}>Gostei</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b6b6b6ff",
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imagem: {
    width: 300,
    height: 300,
    borderRadius: 15,
    borderWidth: 5,
    marginBottom: 30,
  },
  botoes: {
    flexDirection: "row",
    gap: 20,
  },
  botaoNao: {
    backgroundColor: "#ceb859ff",
    padding: 15,
    borderRadius: 20,
  },
  botaoSim: {
    backgroundColor: "#ffc505ff",
    padding: 15,
    borderRadius: 20,
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
