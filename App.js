import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React, { useEffect, useState } from "react";
import SignIn from "./screens/signin";
import SignUp from "./screens/signup";
import Home from "./screens/Home";
import Purchases from "./screens/Purchases";
import Profile from "./screens/Profile";
import { Text, View } from "react-native";
import { AuthContext } from "./context";
import Animated, { color } from "react-native-reanimated";
import { StyleSheet,  } from "react-native";
import { ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import OnboardingScreen from "./screens/Onboarding";
import Chapters from "./screens/Chapters";
import Topics from "./screens/Topics";
import TopicDetails from "./screens/TopicDetails";
import VideoLecture from "./screens/video-lecture";
import AllCourses from "./screens/all-courses";
import CourseDetails from "./screens/course-details";
import ProfileEdit from "./screens/profile-edit";
import Notifications from "./screens/notifications";
import InstructorScreen from "./screens/instructor";
import { AntDesign, Feather, Ionicons, Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import QuizAssignmentScreen from "./screens/assign-quiz-screen";
import QuizAssignmentResult from "./screens/quiz-assign-result";
import { QueryClient, QueryClientProvider } from 'react-query';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Provider, useSelector} from 'react-redux'
// import {  store } from "./app/store";
import { addToken, logout, userInfo , getTokenn, removeUserDataFromAsyncStorage} from "./reducers/userReducer";
import { useDispatch } from "react-redux";
import localStorage from 'react-native-sync-localstorage'
import { getAsyncStorageValues } from "./app/asyncstorage-values";
import Subjects from "./screens/subjects"

import {store} from './app/store'

const getData = async () => {
  try {
    let value = await AsyncStorage.getItem('@token').then(res => {
      return res;
    });
    return value;
  } catch (e) {
    console.log(e);
  }
};

const getUser = async () => {
  try {
    let value = await AsyncStorage.getItem('@user').then(res => {
      return res;
    });
    return value;
  } catch (e) {
    console.log(e);
  }
}

function App({navigation}) {

  const AuthStack = createStackNavigator();
  const Tabs = createBottomTabNavigator();
  const HomeStack = createStackNavigator();
  const SearchStack = createStackNavigator();
  const ProfileStack = createStackNavigator();
  const Stack = createStackNavigator();
  const [onboarding, setOnboarding] = useState('')
  const [token, setToken] = useState('')
  const dispatch = useDispatch()
  const {user: {token: resolvedToken, user}} = useSelector(state => state)
  console.log(resolvedToken, " NEW TOKENNN")
  console.log(user, " NEW userr")

  const removeToken = async (props) => {
    try {
      await AsyncStorage.removeItem('@user').then(() => {
        dispatch(removeUserDataFromAsyncStorage());
        console.log(user, " r user")
      });
    } catch (e) {
      console.log(e);
    }
  };
 
  React.useEffect(() => {
    (async () => {
      let value = await getData().then(res => {
        // console.log('this is res in APp');
        console.log(res, ' this');
        let v = JSON.parse(res);
        if (res) {
          dispatch(addToken(res));
        }
      });
    })().catch(err => {
      console.error(err);
    });
  },[user?._id])

  React.useEffect(() => {
    (async () => {
      let value = getUser().then(res => {
        console.log('this is res in APp');
        console.log(res);
        let v = JSON.parse(res);
        console.log(v, " V")
        if (v._id) {
          dispatch(userInfo(v));
        }
      });
    })().catch(err => {
      console.error(err);
    });
  },[token])
    
  const Logout = async () => {
    removeToken()
  }


const getOnboarding = async () => {
  try {
    const value = await AsyncStorage.getItem('@onboarding')
    if(value !== null) {
      // value previously stored
      setOnboarding(value)
    }
  } catch(e) {
    // error reading value
    throw e;
  }
}

const getToken = async () => {
  try{
    const value = await AsyncStorage.getItem('@token')
    if(value !== null) {
      console.log(token, " TOKEN FROM ASYNC")
      // value previously stored
      setToken(value)
      dispatch(getTokenn(token))
      // alert(value)
    }
  }catch(e) {
    // error reading value
    throw e;
  }
}

useEffect(() => {
  getOnboarding()
  // getToken()
},[])
 
   
 
  const HomeStackScreens = () => (
    <HomeStack.Navigator
      headerMode="none"
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
  const SearchStackScreens = () => (
    <SearchStack.Navigator
      headerMode="none"
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerShown: false,
      }}
    >
      <SearchStack.Screen name="Purchases" component={Purchases} />
      <SearchStack.Screen
        name="QuizAssignmentScreen"
        component={QuizAssignmentScreen}
      />
    </SearchStack.Navigator>
  );
  const ProfileStackScreens = () => (
    <ProfileStack.Navigator
      headerMode="none"
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Chapters" component={Chapters} />
      <ProfileStack.Screen name="Topics" component={Topics} />
      <ProfileStack.Screen name="TopicDetails" component={TopicDetails} />
      <ProfileStack.Screen name="VideoLecture" component={VideoLecture} />
      <ProfileStack.Screen
        name="QuizAssignmentScreen"
        component={QuizAssignmentScreen}
      />
      <ProfileStack.Screen name="AllCourses" component={AllCourses} />
      <ProfileStack.Screen name="CourseDetails" component={CourseDetails} />
      <ProfileStack.Screen
        name="InstrutorScreen"
        component={InstructorScreen}
      />
    </ProfileStack.Navigator>
  );

  const TabsScreen = () => (
    <Tabs.Navigator
      headerMode="none"
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: "#335A6D",
        showLabel: false,
        style: {
          // paddingTop: 15,
          paddingHorizontal: Platform.OS === "ios" ? 5 : null,
          height: Platform.OS === "ios" ? 73 : 68,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeStackScreens}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={25} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="AllCourses"
        component={AllCourses}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="list" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileStackScreens}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={25} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );

  const Drawer = createDrawerNavigator();

  const [isLoading, setIsLoading] = React.useState();
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.7],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  // const authContext = React.useMemo(() => {
  //   return {
  //     signIn: () => {
  //       setIsLoading(false), setUserToken("abd");
  //     },
  //     signUp: () => {
  //       setIsLoading(false), setUserToken("abd");
  //     },
  //     signOut: () => {
  //       setIsLoading(false), setUserToken(null);
  //     },
  //   };
  // }, []);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <Text>Loading..</Text>
  //     </View>
  //   );
  // }

  const Screens = ({ navigation, style }) => {
    return (
      <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
        <Stack.Navigator
          headerMode="none"
          screenOptions={{
            headerTransparent: true,
            headerTitle: null,
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={TabsScreen} />
          <Stack.Screen name="Chapters" component={Chapters} />
          <Stack.Screen name="Topics" component={Topics} />
          <Stack.Screen name="TopicDetails" component={TopicDetails} />
          <Stack.Screen name="VideoLecture" component={VideoLecture} />
          <Stack.Screen name="AllCourses" component={AllCourses} />
          <Stack.Screen name="CourseDetails" component={CourseDetails} />
          <Stack.Screen name="Profile" component={ProfileStackScreens} />
          <Stack.Screen name="InstrutorScreen" component={InstructorScreen} />
          <Stack.Screen name="Purchases" component={Purchases} />
          <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
          <Stack.Screen name="Subjects" component={Subjects} />
          <Stack.Screen
            name="QuizAssignmentScreen"
            component={QuizAssignmentScreen}
          />
          <Stack.Screen
            name="QuizAssignmentResult"
            component={QuizAssignmentResult}
          />
          {/* {userToken ? (<Stack.Screen name="SignIn" component={SignIn} />) : null} */}
        </Stack.Navigator>
      </Animated.View>
    );
  };

  function CustomDrawerContent(props) {
    const LogOut = async () => {
      removeToken()
    }
    return (
      <>
      
        <View style={{ position: "absolute", bottom: 200, right: 40 }}>
          <Image source={require("./assets/dot_design.png")} />
        </View>
        <View style={{ position: "absolute", bottom: 0, left: 0 }}>
          <Image source={require("./assets/ellipse.png")} />
        </View>
        <DrawerContentScrollView {...props}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Image
              source={require("./assets/nav-con.png")}
              style={{
                height: 40,
                width: 40,
                resizeMode: "contain",
                margin: 20,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              marginTop: 60,
              marginLeft: 10,
            }}
          >
            {/* <DrawerItem
              label="Purchases"
              onPress={() => props.navigation.navigate("Purchases")}
              labelStyle={styles.drawerLabel}
              style={styles.drawerItem}
              icon={() => (
                <AntDesign name="shoppingcart" size={24} color="white" />
              )}
            /> */}
            <DrawerItem
              label="Connect"
              onPress={() => props.navigation.navigate("InstrutorScreen")}
              labelStyle={styles.drawerLabel}
              style={styles.drawerItem}
              icon={() => (
                <Ionicons name="call-outline" size={24} color="white" />
              )}
            />
            <DrawerItem
              label="Log Out"
              // onPress={() => LogOut()}
              onPress={() => [props.navigation.closeDrawer(), LogOut()]}
              labelStyle={styles.drawerLabel}
              style={styles.drawerItem}
              icon={() => <Feather name="log-out" size={24} color="white" />}
            />
          </View>
        </DrawerContentScrollView>
      </>
    );
  }
  let [fontsLoaded] = useFonts({
    PoppinsSemiBold: require("./fonts/Poppins/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("./fonts/Poppins/Poppins-Medium.ttf"),
    PoppinsRegular: require("./fonts/Poppins/Poppins-Regular.ttf"),
    QuickSandLight: require("./fonts/QuickSand/Quicksand-Light.ttf"),
    QuickSandRegular: require("./fonts/QuickSand/Quicksand-Regular.ttf"),
    QuickSandMedium: require("./fonts/QuickSand/Quicksand-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    let a = true
    return (
        <> 
        <NavigationContainer>
        {
         user?._id && user?._id?.length?
          (
            <>
            <ImageBackground
              style={{
                flex: 1,
                height: "100%",
                width: "100%",
                resizeMode: "cover",
              }}
              source={require("./assets/gradient-bg.png")}
            >
              {/* <LinearGradient style={{ flex: 1,  }} colors={["#00273A", "#024D71"]}> */}
              <Drawer.Navigator
                // hideStatusBar
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={styles.drawerStyles}
                contentContainerStyle={{ flex: 1 }}
                drawerContentOptions={{
                  // activeBackgroundColor: "#00273A",
                  activeTintColor: "white",
                  inactiveTintColor: "white",
                }}
                lazy={true}
                sceneContainerStyle={{
                  backgroundColor:
                    "linear-gradient(to right top, #00273a, #003047, #003a55, #004363, #024d71)",
                }}
                drawerContent={(props) => {
                  setProgress(props.progress);
                  return <CustomDrawerContent {...props} />;
                }}
              >
                <Drawer.Screen name="Screens">
                  {(props) => <Screens {...props} style={animatedStyle} />}
                </Drawer.Screen>
              </Drawer.Navigator>
              {/* </LinearGradient> */}
            </ImageBackground>
            
        </>
          ) : (
<>
          <AuthStack.Navigator
              headerMode="none"
              screenOptions={{
                headerTransparent: true,
                headerTitle: null,
                headerShown: false,
              }}
              initialRouteName={onboarding == 'true' ? 'SignIn' : "Onboarding"}
            >
              {onboarding !== 'true' ? ( 
                <AuthStack.Screen
                name="Onboarding"
                component={OnboardingScreen}
              /> 
              ): null}
              <AuthStack.Screen name="SignIn" component={SignIn} />
              <AuthStack.Screen name="SignUp" component={SignUp} />
            </AuthStack.Navigator>
        </>
          )
        }
        </NavigationContainer>
        </>
    );
  }
}

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    borderRadius: 40,
    // overflow: 'scroll',
    // borderWidth: 1,
  },
  drawerStyles: {
    flex: 1,
    width: "60%",
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  drawerLabel: {
    color: "#fff",
    marginLeft: -16,
    fontFamily: "QuickSandRegular",
    fontSize: 17,
  },
});


export default  () => {
  const queryClient = new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      {/* <PersistGate persistor={persistedStore} loading={null} > */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </QueryClientProvider>
  )
}