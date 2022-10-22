import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen =() => {
  const navigatin = useNavigation();
  useLayoutEffect(()=>{
    navigatin.setOptions({
      headerShown: false,
    });
  },[]) 
  return (
    <SafeAreaView>
      
    </SafeAreaView>
  )
};
export default HomeScreen
