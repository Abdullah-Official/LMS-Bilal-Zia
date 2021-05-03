import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import SignIn from "./screens/signin";
import SignUp from "./screens/signup";
import Home from "./screens/Home";
import Purchases from "./screens/Purchases";
import Profile from "./screens/Profile";
import { Text, View } from "react-native";
import { AuthContext } from "./context";
import Animated, { color } from "react-native-reanimated";
import { StyleSheet } from "react-native";
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
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import QuizAssignmentScreen from "./screens/assign-quiz-screen";

export default function App() {
  const AuthStack = createStackNavigator();
  const Tabs = createBottomTabNavigator();
  const HomeStack = createStackNavigator();
  const SearchStack = createStackNavigator();
  const ProfileStack = createStackNavigator();
  const Stack = createStackNavigator();

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
      <SearchStack.Screen name="QuizAssignmentScreen" component={QuizAssignmentScreen} />
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
      <ProfileStack.Screen name="ProfileEdit" component={ProfileEdit} />
      <ProfileStack.Screen name="Chapters" component={Chapters} />
      <ProfileStack.Screen name="Topics" component={Topics} />
      <ProfileStack.Screen name="TopicDetails" component={TopicDetails} />
      <ProfileStack.Screen name="VideoLecture" component={VideoLecture} />
      <ProfileStack.Screen name="QuizAssignmentScreen" component={QuizAssignmentScreen} />
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
    >
      <Tabs.Screen name="Home" component={HomeStackScreens} />
      <Tabs.Screen name="Notifications" component={Notifications} />
      <Tabs.Screen name="AllCourses" component={AllCourses} />
      <Tabs.Screen name="Profile" component={ProfileStackScreens} />
    </Tabs.Navigator>
  );

  const Drawer = createDrawerNavigator();

  const [isLoading, setIsLoading] = React.useState();
  const [userToken, setUserToken] = React.useState('abd');
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

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false), setUserToken("abd");
      },
      signUp: () => {
        setIsLoading(false), setUserToken("abd");
      },
      signOut: () => {
        setIsLoading(false), setUserToken(null);
      },
    };
  }, []);

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
          <Stack.Screen name="QuizAssignmentScreen" component={QuizAssignmentScreen} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      </Animated.View>
    );
  };

  function CustomDrawerContent(props) {
    // const navigation = useNavigation()
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
            <DrawerItem
              label="Purchases"
              onPress={() => props.navigation.navigate("Purchases")}
              labelStyle={styles.drawerLabel}
              style={styles.drawerItem}
              icon={() => (
                <AntDesign name="shoppingcart" size={24} color="white" />
              )}
            />
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
              onPress={authContext.signOut}
              labelStyle={styles.drawerLabel}
              style={styles.drawerItem}
              icon={() => <Feather name="log-out" size={24} color="white" />}
            />
          </View>
        </DrawerContentScrollView>
      </>
    );
  }
  console.log(authContext);
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
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {userToken ? (
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
          ) : (
            <AuthStack.Navigator
              headerMode="none"
              screenOptions={{
                headerTransparent: true,
                headerTitle: null,
                headerShown: false,
              }}
              initialRouteName="Onboarding"
            >
              <AuthStack.Screen
                name="Onboarding"
                component={OnboardingScreen}
              />
              <AuthStack.Screen name="SignIn" component={SignIn} />
              <AuthStack.Screen name="SignUp" component={SignUp} />
            </AuthStack.Navigator>
          )}
        </NavigationContainer>
      </AuthContext.Provider>
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
  // drawerItem: { alignItems: "flex-start", marginVertical: 0 },
  drawerLabel: {
    color: "#fff",
    marginLeft: -16,
    fontFamily: "QuickSandRegular",
    fontSize: 17,
  },
});
