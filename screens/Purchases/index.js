import React from "react";
import { ScrollView } from "react-native";
import { Text, View } from "react-native";
import styles from "./styles";
import HeaderApp from "../../components/Header";
import PurchaseBox from "../../components/purchases";

const Purchases = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <View style={{ justifyContent: "center", marginTop: 30 }}>
            <HeaderApp
              iconLeft={require("../../assets/black-arrow.png")}
              nav="back"
            />
          </View>
          <View style={{ marginTop: 40, marginHorizontal: 30 }}>
            <Text style={styles.main_heading}>Purchases</Text>
          </View>
        </View>
        <View style={{ flex: 2, alignItems: "center" }}>
          <View style={{ marginTop: 30 }}>
            <PurchaseBox bgPurchase={"#04597D"} />
            <PurchaseBox bgPurchase={"#234F8F"} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Purchases;
