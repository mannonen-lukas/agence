import { ScrollView, Text, StyleSheet } from 'react-native';

const Chine = () => {
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
                            <Text>Voyage en chine{"\n\n"}</Text>
                            <Text>prix: 9999999999999€ ttc/pers{"\n\n"}</Text>
                            <Text style={styles.color}>Acheter{"\n\n"}</Text>                        </>
                    ))
                }
            </Text>

            <Text>
                Tourbillon de mégalopoles bluffantes, vestiges impériaux, temples immuables, gradations hypnotiques des rizières et paysages féériques...
                {'\n\n'}
                {'\t'}
                La Maison de la Chine, spécialiste du voyage en Chine depuis 1991,
                {'\n\n'}
                {'\t'}
                invite les voyageurs curieux dans l’univers mystérieux et légendaire de l’une des plus vieilles civilisations de l’Histoire.
                {'\n\n'}
                {'\t'}
                Partir en Chine est un dépaysement de tous les instants, une escapade envoûtante entre traditions et modernité.
                {'\n\n'}
                {'\t'}
                Au cœur des cités futuristes comme au fin fond des villages historiques et des campagnes ancestrales peuplées d'une mosaïque de minorités ethniques,
                {'\n\n'}
                {'\t'}
                à la découverte de l’infiniment petit comme de l’infiniment grand… tout est surprenant et saisissant lors d’un voyage en Chine.
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