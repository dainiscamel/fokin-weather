import React from "react";
import { StyleSheet,View,Text} from "react-native";
import Proptypes from "prop-types"; 
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Weather({temp}) {
  return ( 
    <View style={styles.container}>
      <MaterialCommunityIcons></MaterialCommunityIcons>
      <Text>{temp}</Text>
    </View>
    );
}

Weather.propTypes = {
  temp: Proptypes.number.isRequired,
  condition: Proptypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds","Haze","Mist","Dust"]).isRequired
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})