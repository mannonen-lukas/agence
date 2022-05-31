import { ScrollView, Text, StyleSheet } from 'react-native';

const Chine = ({ navigation }) => {
    return (
        <ScrollView>
            <ImageBackground
                source={require('./assets/accueil.jpg')} resizeMode="cover" style={styles.image}
            />

            <Image
                source={require('./assets/logo.png')}
                style={styles.logo}
            />
            <Image
                source={require('./assets/Chine2.jpg')}
                style={styles.image}
            />{"\n\n"}
            <Text>
                {
                    myArray.map(() => (
                        <>
                            <Text>Voyage en antartique{"\n\n"}</Text>
                            <Text>prix: 50000€ ttc/pers{"\n\n"}</Text>
                            <Text style={styles.color}>Acheter{"\n\n"}</Text>                        </>
                    ))
                }
            </Text>

            <Text>
                Si Ushuaïa est la ville la plus méridionale du monde, aller en Antarctique est l'étape suivante. Cette fois-ci,
                {'\n\n'}
                {'\t'}
                vous êtes vraiment au bout du bout du monde, comme sur une autre planète, dans un monde sans hommes.
                {'\n\n'}
                {'\t'}
                Pour tous ceux qui sont attirés par la mystique de la fin du monde, ce voyage est définitivement fait pour vous.
            </Text>
        </ScrollView>
    );
}

export default Chine;

const styles = StyleSheet.create({
    text: {
        padding: 20
    },
    color: {
        color: 'red',
        fontSize: '50',
    },
    logo: {
        width: 50,
        height: 50,
        margintop: '10px',
        marginleft: '20px',
    }
});