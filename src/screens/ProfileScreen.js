import React, { useState } from "react";
import { View, StyleSheet, AsyncStorage ,Image} from "react-native";
import { Text, Card, Button,  Avatar, Header } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
import {removeData} from "../functions/AsyncStorageFunctions";
import HeaderHome from "../components/HeaderHome";


const ProfileScreen = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          
          <HeaderHome
           DrawerFunction ={() =>{
             props.navigation.toggleDrawer();
           }}
           />

          <Card>
            <View>
            <Text style ={styles.textStyle}>Welcome to your profile! </Text>
            <Text style ={styles.textStyle}>  </Text>
            <Text style ={styles.textStyle}>  </Text>

            <Image source={require("./../../assets/ronaldo.jpg")} style={styles.imageStyle} />
              
          
            <Button
                title= "Delete Account"
                type ='clear'
                
                onPress={function () {
                  alert("Not implemented");
                }}

            />

              <Text style ={styles.textStyle}>Name : {auth.CurrentUser.name} </Text>
              <Text style ={styles.textStyle}>Email : {auth.CurrentUser.email} </Text>
              <Text style={styles.textStyle}>Date of Birth: {auth.CurrentUser.bod}</Text>      
              <Text style={styles.textStyle}>Address: {auth.CurrentUser.address}</Text>

              
            </View>
            
          </Card>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "blue",
    alignSelf :"center",
  },
  viewStyle: {
    flex: 1,
  },
  imageStyle: {
    height : 200,
    width :200,
    alignSelf :"center",
  },
});

export default ProfileScreen;
