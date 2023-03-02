import React, { useState, useEffect } from 'react';
import { Text ,StyleSheet } from 'react-native';
interface Props {
    seconds: number;
    restart: boolean;
    setrestart: (restart: boolean) => void; 

  }
const OneMinuteTimer = ({ seconds ,restart,setrestart }: Props): JSX.Element => {
const [remainingSeconds, setRemainingSeconds] = useState<number>(seconds);

useEffect(() => {
     
    
      
const timer = setInterval(() => {
    if((remainingSeconds<0)&&(restart)){
      
        setRemainingSeconds(60);
        setrestart(false);
        
    }
    setRemainingSeconds((remainingSeconds) => remainingSeconds - 1);
}, 1000);
return () => clearInterval(timer);

}, [remainingSeconds,setrestart]);

return (
    (remainingSeconds>0)?<Text  style={styles.count} >{(Math.floor(remainingSeconds / 60)).toString().padStart(2, '0')}:{(remainingSeconds % 60).toString().padStart(2, '0')}</Text>:<Text></Text>
);
};

export default OneMinuteTimer;
const styles = StyleSheet.create({
    count: {
      color:'blue',
      
      fontWeight:'bold'

     
      
    },});