import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY
const tokenCache = {
  async getToken(key:string) {
    try{
      return SecureStore.getItemAsync(key)
    }
    catch(err){
      return null
    }
  },

  async saveToken(key:string, value:string) {
    try{
      return SecureStore.setItemAsync(key, value)      
    }
    catch(err){
      return null
    }
  }
}


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({

    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  

  if (!loaded) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
      <RootLayoutNav />
    </ClerkProvider>
  );
}


function RootLayoutNav() {
  // const colorScheme = useColorScheme();
  const router = useRouter()
  const{isLoaded, isSignedIn} = useAuth()
  useEffect(()=>{
    if (!isLoaded && !isSignedIn) {
      router.navigate('(modals)/login')
    }},[isLoaded, isSignedIn])
  
  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/login" options={{ presentation:'modal',
          title: 'Login or Sign Up',
          headerTitleStyle: { fontFamily: 'SpaceMono' },
          headerLeft: ()=> (
            <TouchableOpacity onPress={()=>{router.back()}}>
              <Ionicons name="close-outline" size={24} />
            </TouchableOpacity>
          )
         }} />
         <Stack.Screen name="listings/[id]" options={{ headerTitle: ' ' }} />
         <Stack.Screen name="(modals)/booking" options={{ presentation: 'transparentModal',
         title: 'Bookings',
         animation: 'fade',
          headerLeft: ()=> (
            <TouchableOpacity onPress={()=>{router.back()}}>
              <Ionicons name="close-outline" size={24} />
            </TouchableOpacity>)
         }} />
      </Stack>
  );
}
