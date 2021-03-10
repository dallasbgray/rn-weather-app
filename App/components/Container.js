import React from "react";
import { View } from "react-native";

//variable to hold daytime boolean
var isDay;

//hours variable to hold local time
var hours = new Date().getHours(); //To get the Current Hours

//console log to show variable in console
console.log(hours);

//logic for what is daytime
if (hours < 16) {
  isDay = true;
} else {
  isDay = false;
}


//container with appropriate nighttime or daytime background color
export const Container = ({ children }) => (
  //turnary that switches the color of the bosy
  isDay ? (
    <View style={{ flex: 1, backgroundColor: "#FFB00F" }}>
      {children}
    </View>
  ) : (
      <View style={{ flex: 1, backgroundColor: "#120A8F" }}>
        {children}
      </View>

    )
)