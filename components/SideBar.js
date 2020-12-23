import React from "react";

import styled from "styled-components/native";

const Container = styled.View`
  width: 60px;
  height: 100%;
  padding-bottom: 60px;
  justify-content: flex-end;
`;
const Menu = styled.View`
  margin: 9px 0;
  align-items: center;
`;
const User = styled.View`
  width: 48px;
  height: 48px;
  margin-bottom: 13px;
`;
const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 48px;
  border-width: 2px;
  border-color: #fff;
`;
const Icon = styled.Image`
  height: 40px;
`;
const Count = styled.Text`
  color: #fff;
  font-size: 12px;
  letter-spacing: -0.1px;
`;
const SoundingBg = styled.View`
  background-color: #000;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const Sound = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 25px;
`;
const SideBar = ({ data }) => {
  const { like, share, comment } = data.count;
  const { avatar } = data.user;
  return (
    <Container>
      <Menu>
        <User>
          <Avatar resizeMode="cover" source={avatar} />
        </User>
      </Menu>
      <Menu>
        <Icon
          resizeMode="contain"
          source={require("../assets/icons/like.png")}
        />
        <Count>{like}</Count>
      </Menu>
      <Menu>
        <Icon
          resizeMode="contain"
          source={require("../assets/icons/comment.png")}
        />
        <Count>{comment}</Count>
      </Menu>
      <Menu>
        <Icon
          resizeMode="contain"
          source={require("../assets/icons/share.png")}
        />
        <Count>{share}</Count>
      </Menu>

      <Menu>
        <SoundingBg>
          <Sound resizeMode="cover" source={require("../assets/01.jpg")} />
        </SoundingBg>
      </Menu>
    </Container>
  );
};
export default SideBar;
