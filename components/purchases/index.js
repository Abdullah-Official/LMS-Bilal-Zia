import React from "react";
import { View, Text } from "react-native";
import styles from "../../screens/Purchases/styles";

const PurchaseBox = (props) => {
  return (
    <View style={styles.purchase_container}>
      <View style={{ ...styles.purchaseUp, backgroundColor: props.bgPurchase }}>
        <Text style={styles.classTxt}>IX</Text>
      </View>
      <View style={styles.purchaseDown}>
        <View style={{ paddingLeft: 16 }}>
          <View style={styles.purchase_details1}>
            <Text style={styles.darkTxt}>Date Purchased:</Text>
            <Text style={styles.lightTxt}>19/02/2021</Text>
          </View>
          <View style={styles.purchase_details2}>
            <Text style={styles.darkTxt}>Amount Paid:</Text>
            <Text style={styles.lightTxt}>Rs 599</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PurchaseBox;
