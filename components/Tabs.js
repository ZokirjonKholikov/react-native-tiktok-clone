import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
const Container = styled.View`
  height: 59px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
  border-top-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.2);
  flex-direction: row;
  background-color: transparent;
`;

const Menu = styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const MenuText = styled.Text`
  font-size: 10px;
  margin-top: -3px;
  color: ${(props) => (props.active ? "#fff" : "rgba(255,255,255,0.6)")};
`;

const Icon = styled.Image.attrs({ resizeMode: "contain" })`
  height: 32px;
`;
const Border = styled(LinearGradient)`
  width: 46px;
  height: 30px;
  border-radius: 8px;
  align-items: center;
`;
const Button = styled.TouchableOpacity`
  width: 38px;
  height: 30px;
  background: #fff;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
const Tabs = () => {
  return (
    <Container>
      <Menu>
        <Icon source={require("../assets/icons/home.png")} />
        <MenuText active="false">Home</MenuText>
      </Menu>
      <Menu>
        <Icon source={require("../assets/icons/discover.png")} />
        <MenuText active="false">Discover</MenuText>
      </Menu>

      <Menu>
        <Border
          start={{ x: 1, y: 0 }}
          location={[0, 0.5, 0.5, 1]}
          colors={["#f42365", "#f42365", "#37d7cf", "#37d7cf"]}
        >
          <Button>
            <Feather name="plus" size={20}/>
          </Button>
        </Border>
      </Menu>

      <Menu>
        <Icon source={require("../assets/icons/message.png")} />
        <MenuText active="false">Inbox</MenuText>
      </Menu>
      <Menu>
        <Icon source={require("../assets/icons/profile.png")} />
        <MenuText active="false">Me</MenuText>
      </Menu>
    </Container>
  );
};

export default Tabs;
