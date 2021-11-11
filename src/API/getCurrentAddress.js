import axios from "axios";

export const getCurrentAddress = (obj) => {
  const response = axios
    .get(
      `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${obj.longitude}&y=${obj.latitude}`,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_LOCAL_API_KEY}`,
        },
      }
    )
    .then((res) => {
      return res.data.documents[0];
    });
  return response;
};
