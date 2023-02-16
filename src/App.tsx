
import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import music_data from './music-data.json';
import MusicCard from "./components/cards/MusicCard";
import SearchBar from "./components/cards/SearchBar";

function App() {
  const renderMusic = ({ item }) => <MusicCard music={item} />
  const onSearch = text => {

    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;

    })
    setList(filteredList)

  };

  const [list, setList] = useState(music_data)
  return (
    <SafeAreaView>
      <SearchBar onSearch={onSearch} />
      <FlatList
        data={list}
        renderItem={renderMusic}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10
  }
})
export default App;