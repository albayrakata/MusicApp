import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import styles from './SearchBar.style'

const SearchBar = props => {
   // const onSearch = text => console.log(text)

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Ara.." onChangeText={props.onSearch} />
        </View>
    )
}

export default SearchBar;