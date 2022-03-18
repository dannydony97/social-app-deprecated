import React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import AppFeed from "./AppFeed";

const MyProfile = () => <Text>This is my profile</Text>;

const AppBottomNavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "feed", title: "Feed", icon: "home-variant", color: "#3F51B5" },
    {
      key: "myProfile",
      title: "My profile",
      icon: "account-circle",
      color: "#3F5AAA",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    feed: AppFeed,
    myProfile: MyProfile,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      color="black"
    />
  );
};

export default AppBottomNavigation;
