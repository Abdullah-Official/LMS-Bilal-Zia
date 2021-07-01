import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import HeaderApp from "../../components/Header";
import { Image, Button } from "react-native";
import NotificationBox from "../../components/Notification";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import { BASE_URL } from "../../app/api";

const Notifications = () => {
  const [isNotif, setIsNotif] = useState([]);

  useEffect(() => {
    FetchNotifications()
  },[])

  const FetchNotifications = () => {
    axios.get(`${BASE_URL}/getnotifications`)
    .then(response => setIsNotif(response.data.message))
    .catch(e => console.log("error ", e))
  }
  // console.log(isNotif)

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 0 }}>
        <View style={{ justifyContent: "center", marginTop: 30 }}>
          <HeaderApp
            iconLeft={require("../../assets/nav-icon-dark.png")}
            nav="drawer"
          />
        </View>
        <View style={{ marginTop: 30, alignItems: "center" }}>
          <Text style={styles.notificationTxt}>Notifications</Text>
        </View>
      </View>

      {!isNotif.length ? (
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            marginTop: -30,
          }}
        >
          <Image source={require("../../assets/notif-bell.png")} />
          <View
            style={{
              marginTop: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.notifTxt1}>No notification found</Text>
            <Text style={styles.notifTxt2}>
              We did not find any notification
            </Text>
          </View>
        </View>
      ) : (
        <ScrollView>
          <View style={{ flex: 1, marginTop: 30, marginHorizontal: 25 }}>
           {
             isNotif.map((v,i) => {
              return (
                <NotificationBox 
              bgAvatar={i%2 == 0 ? ("#04597D") : ("#234F8F")} 
              key={i}
              name={v.name}
              classNumber={v.class}
              description={v.description}
              />
              )
             })
           }
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Notifications;
