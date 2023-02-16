import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    card_container: {

        padding: 10,
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'grey'



    },
    img_container: {
        width: 100,
        height: 100,
        borderRadius: 50

    },
    img: {

    },
    content_container: {
        padding: 10,
        flex: 1,
        

    },
    main_text: {
        fontSize: 25,
        fontWeight: 'bold',



    },
    info_container: {
        flexDirection: "row"
    },

    artist: {
        fontWeight: 'bold',
        padding: 5,
        fontSize: 13,

    },
    year: {

        fontSize: 10,
        padding: 7


    },
    soldOut_container:{
     
      

    },
    soldOut_text:{
      color:"red"
    }
})