import axios from "axios";

export const getCurrentAddress = (obj) => {
  console.log(obj);
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
      const location = res.data.documents[0];
      console.log(location);
    });
  return response;
};
