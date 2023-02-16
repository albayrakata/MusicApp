import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import styles from './MusicCard.style'

const MusicCard = ({ music }) => {
    return (
        <View style={styles.card_container}>
            <View >
                <Image style={styles.img_container} source={{ uri: music.imageUrl }} />
            </View>
            <View style={styles.content_container}>
                <Text style={styles.main_text}>{music.title}</Text>
                    <View style={styles.info_container}>
                        <Text style={styles.artist}>{music.artist}</Text>
                        <Text style={styles.year}>{music.year}</Text>
                    </View>
                    
                    <View style={styles.soldOut_container}>
                    <Text  style={styles.soldOut_text}>{music.isSoldOut ? "" : "Tükendi!"}</Text>
                    </View>
                </View>

            </View>
       

    )
}

export default MusicCard;
