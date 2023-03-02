import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

const RnOtpTimer = ({
  minute,
  second,
  fontsize,
  fontfamily,
  textcolor,
  labelfontsize,
  labelfontfamily,
  labelcolor,
  labeltext="",
}: {
  minute: number;
  second: number;
  fontsize?: number;
  fontfamily?: string;
  textcolor?: string;
  labelfontsize?: number;
  labelfontfamily?: string;
  labelcolor?: string;
  labeltext?: string;
}) => {
  const [resendOtpPressed, setResendOtpPressed] = useState(false);

  const [secH, setSecH] = useState<string | undefined>();

  let min = minute;
  let sec : number;
  if (second == 0) {
    sec = 59;
    min = min - 1;
  } else {
    sec = second;
  }

  let hsec = 0;
  const [minV, setMinV] = useState(min);
  const [secV, setSecV] = useState(sec);

  function startTimer() {
    var countdownTimer = setInterval(function () {
      sec = sec - 1;
      if (min != 0 && sec == -1) {
        sec = 59;
        min = min - 1;
        setMinV((prevMinV) => prevMinV - 1);
        setSecH(undefined);
      }
      if (sec < 10) {
        setSecH("0");
      }
      secV != 0 && setSecV((prevSecV) => prevSecV - 1);
      setSecV(sec);

      if (min == 0 && sec <= 0) {
        clearInterval(countdownTimer);
        setResendOtpPressed(false);
        setSecH(undefined);
        setSecV(second);
        setMinV(minute);
      }
    }, 1000);
  }

  const resendOtp = () => {
    setResendOtpPressed(true);
    startTimer();
  };

  return (
    <View>
      <TouchableOpacity
        hitSlop={{ top: 5, bottom: 5, left: 50, right: 50 }}
        onPress={resendOtp}
      >
        {resendOtpPressed ? (
          <Text
            style={{
              color: textcolor != null ? textcolor : "red",
              fontFamily: fontfamily != null ? fontfamily : "",
              fontSize: fontsize != null ? fontsize : 15,
            }}
          >
            {minV}:{secH}
            {secV}
          </Text>
        ) : (
          <Text
            style={{
              color: labelcolor != null ? labelcolor : "red",
              fontFamily: labelfontfamily != null ? labelfontfamily : "",
              fontSize: labelfontsize != null ? labelfontsize : 15,
            }}
          >
            {labeltext.length != 0 ? labeltext  : "Resend OTP"}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default RnOtpTimer;

const styles = StyleSheet.create({});
