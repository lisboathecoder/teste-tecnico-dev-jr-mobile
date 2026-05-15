import { StyleSheet, View, Text, Linking } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function ContactScreen() {
    return (
        <View style={styles.container}>
            <Ionicons name="call" size={100} color="black" />
            <Text style={{ fontSize: 24, marginTop: 20 }}>Contato</Text>
            <Text style={styles.contact}>
                <Text style={styles.logo}>
                    <Ionicons name="mail" size={18} color="black" />
                    <Text style={styles.text}>
                        gustavo.lisboa2009@gmail.com
                    </Text>
                </Text>
            </Text>
            <Text style={styles.contact}>
                <Text style={styles.logo}>
                    <Ionicons name="call" size={18} color="black" />
                    <Text style={styles.text}>
                        (19) 99991-8755
                    </Text>
                </Text>
            </Text>
            <Text style={styles.socials}>
                <Text style={styles.logo}>
                    <Ionicons name="logo-linkedin" size={18} color="black" />
                    <Text style={styles.link} onPress={() => Linking.openURL('https://linkedin.com/in/glisboa')}>
                        linkedin.com/in/glisboa
                    </Text>
                </Text>
            </Text>
         <Text style={styles.socials}>
                <Text style={styles.logo}>
                    <Ionicons name="logo-instagram" size={18} color="black" />
                    <Text style={styles.link} onPress={() => Linking.openURL('https://instagram.com/oglisboaaa')}>
                        instagram.com/oglisboaaa
                    </Text>
                </Text>
            </Text>
                   <Text style={styles.socials}>
                <Text style={styles.logo}>
                    <Ionicons name="logo-github" size={18} color="black" />
                    <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/lisboathecoder')}>
                        github.com/lisboathecoder
                    </Text>
                </Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    contact: {
        fontSize: 18,
        marginTop: 10,
    },
    socials: {
        fontSize: 18,
        marginTop: 10,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
    },
    text: {
        fontSize: 16,
        marginLeft: 5,
    },
    link: {
        fontSize: 16,
        marginLeft: 5,
        color: 'blue',
        textDecorationLine: 'underline',
    },
})