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
import { Ionicons } from "@expo/vector-icons";

const login = () => {
  useWarmUpBrowser;
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        style={[defaultStyles.inputField, { marginBottom: 30 }]}
      />
      {/* <TextInput
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        style={[defaultStyles.inputField, { marginBottom: 30 }]}
      /> */}
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
      <view>
            <TouchableOpacity style={[styles.btnOutline]}>
            <Ionicons name="call-outline" style={defaultStyles.btnIcon} size={24} />
            <Text style={styles.btnOutlineText}> Continue with phone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnOutline]}>
            <Ionicons name="logo-apple" style={defaultStyles.btnIcon} size={24} />
            <Text style={styles.btnOutlineText}> Continue with apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnOutline]}>
            <Ionicons name="logo-google" style={defaultStyles.btnIcon} size={24} />
            <Text style={styles.btnOutlineText}> Continue with google</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={[styles.btnOutline]}>
            <Ionicons name="logo-facebook" style={defaultStyles.btnIcon} size={24} />
            <Text style={styles.btnOutlineText}> Continue with facebook</Text>
            </TouchableOpacity>
      </view>
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
    gap: 10,
    alignItems: 'center',
    marginVertical: 30,
  },
  seperator: {
    fontFamily: 'SpaceMono',
    color: Colors.grey,
  },
  btnOutline: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'mon-sb',
  },
});
export default login;
