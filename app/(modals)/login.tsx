import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useWarmUpBrowser } from "../hooks/usewarmupbrowser";
import { defaultStyles } from "@/constants/styles";
import Colors from "@/constants/Colors";

const login = () => {
  useWarmUpBrowser;
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        style={[defaultStyles.inputField, { marginBottom: 30 }]}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        style={[defaultStyles.inputField, { marginBottom: 30 }]}
      />
      <TouchableOpacity style={[defaultStyles.btn]}>
        <Text style={defaultStyles.btnText}> Continue </Text>
      </TouchableOpacity> 
      <View style={styles.seperatorview}>
        <View 
        style={{ 
        flex:1,
        borderBottomWidth: StyleSheet.hairlineWidth, 
        borderBottomColor: "black" }} 
        />
        <Text style={styles.seperator}>Or</Text>
        <View 
        style={{ 
        flex:1,
        borderBottomWidth: StyleSheet.hairlineWidth, 
        borderBottomColor: "black" }} 
        />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 26,
  },
  seperatorview:{
    flexDirection: 'row',
  },
  seperator: {
    fontFamily: 'SpaceMono',
    color: Colors.grey,
  }
});
export default login;
