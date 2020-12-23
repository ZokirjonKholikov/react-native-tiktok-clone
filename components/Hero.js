import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import ViewPager from "@react-native-community/viewpager";
import styled from "styled-components/native";
import VideoPlayer from "./VideoPlayer";
import { LinearGradient } from "expo-linear-gradient";
import SideBar from "./SideBar";
import Info from "./Info";
const { height } = Dimensions.get("window");
const Container = styled(ViewPager)`
  height: ${height}px;
`;
const Gradient = styled(LinearGradient)`
  height: 100%;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
`;
const Center = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Hero = ({ videos }) => {
 const [selected, setSelected] = useState(0)
 
  return (
    <Container orientation="vertical" onPageSelected = {e=>setSelected(e.nativeEvent.position)} initialPage={0}>
      {videos.map((item, index) => {
        return (
          <View key={index}>
            <VideoPlayer 
              poster={item.poster}
              video= {item.video}
              isPlay ={selected ===index} 
            />
            <Gradient
              locations={[0, 0.26, 0.6, 1]}
              colors={[
                "rgba(26, 26, 26, 0.6 )",
                "rgba(26, 26, 26, 0 )",
                "rgba(26, 26, 26, 0 )",
                "rgba(26, 26, 26, 0.6 )",
              ]}
            >
              <Center>
                <Info user={item.user} />
                <SideBar data = {item} />
              </Center>
            </Gradient>
          </View>
        );
      })}
    </Container>
  );
};

export default Hero;
