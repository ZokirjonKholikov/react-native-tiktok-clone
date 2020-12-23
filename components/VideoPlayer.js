import React from "react";
import styled from "styled-components";
import { ImageBackground } from "react-native";
import { Video } from "expo-av";

const Poster = styled.ImageBackground`
  height: 100%;
`;
const Play = styled(Video)`
  height: 100%;
`;

const VideoPlayer = ({ poster, video, isPlay }) => {
  return isPlay ? (
    <Play
      rate={1.0}
      volume={1.0}
      isMuted={false}
      shouldPlay
      useNativeControls={false}
      posterSource={poster}
      source={video}
      resizeMode="cover"
    />
  ) : (
    <Poster source={poster} />
  );
};
export default VideoPlayer;

// const videos = [
//   {
//     id: 1,
//     url: require("../../Data/Videos/004.mp4"),
//     // url: "https://v19.tiktokcdn.com/ec97a92e6ba0f9fd7bc6b8b38b102973/5ec4acfd/video/tos/useast2a/tos-useast2a-pve-0068/35f8c0a1d6294d5cb914a69f103689e1/?a=1233&br=1798&bt=899&cr=0&cs=0&dr=0&ds=3&er=&l=2020051922065501018907221607A9BE96&lr=tiktok_m&qs=0&rc=M3dtZDc0a2RmdDMzNjczM0ApOzZnNzxnZGUzNzM1PGRkNmdtamwtLW5ebXNfLS1eMTZzc18zNDMyNS0xLmExNDNjMzY6Yw%3D%3D&vl=&vr=",
//     user: {
//       name: "Vídeo",
//       following: 12121,
//       followers: 4564,
//       likes: 3243,
//       image:
//         "https://i.pinimg.com/originals/7b/8f/49/7b8f492529fd236dc59baf184faf8488.jpg",
//       // image: "https://p16-va-default.akamaized.net/img/musically-maliva-obj/1606484041765893~c5_720x720.jpeg"
//     },
//     countLikes: 172,
//     countComments: 111,
//     countWhatsApp: 112,
//     description:
//       "No litoral da região de Marlborough, diversos fiordes, ou “sounds” como definidos na Nova Zelândia.",
//     music: "Relaxante & Musica Ambiental Clube",
//   },
// ];

// export default videos;
