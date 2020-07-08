import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return(
        <View style={styles.backgroundStyle}> 
           <TextInput style={styles.inputStyle} 
                      placeholder="Search"
                      value={term}
                      onChangeText={onTermChange}
                      onEndEditing={onTermSubmit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop:10,
        backgroundColor: "#F0EEEE",
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom:10
    },
    inputStyle:{
        flex:1,
        fontSize:18
    },
    
})

export default SearchBar;