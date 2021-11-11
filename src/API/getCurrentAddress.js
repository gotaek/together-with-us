import axios from "axios";
/* 좌표를 통해 위치 정보를 얻는 함수 */
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
