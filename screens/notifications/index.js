import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import HeaderApp from "../../components/Header";
import { Image, Button } from "react-native";
import NotificationBox from "../../components/Notification";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import { BASE_URL } from "../../app/api";
import NoDataComponent from "../../components/noData/no-data";

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
        <NoDataComponent 
        message="No notification found"
        description="We did not find any notification"
        iconPath={require("../../assets/notif-bell.png")}
        custom={true}
        />
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
