// Importing necessary modules and hooks
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
import { useAuth, useOAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

// Enum for OAuth strategies
enum Strategy {
  Google = "Google",
  Facebook = "Facebook",
  Apple = "Apple",
}

// Login component
const login = () => {
    // Using router hook for navigation
  const router = useRouter()
    // Using OAuth hook for different strategies
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
  const { startOAuthFlow: facebookAuth } = useOAuth({
    strategy: "oauth_facebook",
  });
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: "oauth_apple" });

    // Function to handle authentication based on selected strategy
  const onSelectAuth = async (strategy: Strategy) => {

    // Object to store different strategies
    const selectedAuth = {
      [Strategy.Google]: googleAuth,
      [Strategy.Facebook]: facebookAuth,
      [Strategy.Apple]: appleAuth,
    }[strategy];

    try {

      // Starting OAuth flow and getting session ID and setActive function
      const { createdSessionId, setActive } = await selectedAuth();
      console.log( 'it works ',createdSessionId) 

      // If session ID is created, set the session as active and navigate back
      if(createdSessionId){
        setActive!({ session: createdSessionId });
        router.back()
      }
    } catch (error) {
     // Log any errors during the process
      console.log('OAutherror:',error);
    }
  };
// Render login form and buttons for different OAuth strategies
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
            flex: 1,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: "black",
          }}
        />
        <Text style={styles.seperator}>Or</Text>
        <View
          style={{
            flex: 1,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: "black",
          }}
        />
      </View>
      <View style={{ gap: 20 }}>
        <TouchableOpacity style={[styles.btnOutline]}>
          <Ionicons
            name="call-outline"
            style={defaultStyles.btnIcon}
            size={24}
          />
          <Text style={styles.btnOutlineText}> Continue with phone</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnOutline]}
          onPress={() => onSelectAuth(Strategy.Apple)}
        >
          <Ionicons name="logo-apple" style={defaultStyles.btnIcon} size={24} />
          <Text style={styles.btnOutlineText}> Continue with apple</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnOutline]}
          onPress={() => onSelectAuth(Strategy.Google)}
        >
          <Ionicons
            name="logo-google"
            style={defaultStyles.btnIcon}
            size={24}
          />
          <Text style={styles.btnOutlineText}> Continue with google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnOutline]}
          onPress={() => onSelectAuth(Strategy.Facebook)}
        >
          <Ionicons
            name="logo-facebook"
            style={defaultStyles.btnIcon}
            size={24}
          />
          <Text style={styles.btnOutlineText}> Continue with facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 26,
  },
  seperatorview: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 30,
  },
  seperator: {
    fontFamily: "SpaceMono",
    color: Colors.grey,
  },
  btnOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    // color: '#000',
    fontSize: 16,
    fontFamily: "SpaceMono",
  },
});
// Exporting the component
export default login;
