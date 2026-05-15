import { StyleSheet, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/155676204?v=4",
        }}
        style={styles.avatar}
      />  
      <Text style={styles.name}>Gustavo Teixeira Lisboa</Text>
      <Text style={styles.info}>Desenvolvedor Mobile Júnior</Text>
       <View style={styles.line} />
      <Text style={styles.title}>Sobre mim</Text>
      <Text style={styles.info}>

        Sou um estudante de desenvolvimento mobile, que está entrando no mercado
        de trabalho.
        {" \n"}
      </Text>
      <Text style={styles.info}>
         {"\n"}
        Tenho experiência com React, React Native, JavaScript, DOM, HTML e CSS.
        Estou sempre buscando aprender novas tecnologias e aprimorar minhas
        habilidades.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: "gray",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
    line: {
    borderBottomColor: '#b4b1b1', 
    borderBottomWidth: 1,        
    marginVertical: 15,         
    width: '100%',
  },
});
