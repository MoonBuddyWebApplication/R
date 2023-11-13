import axios from "axios";

const api = axios.create({
  baseURL: "https://port-0-moonbuddy-spring-euegqv2lloic2m5c.sel5.cloudtype.app/" /*
  baseURL : url을 상대경로로 쓸대 url 맨 앞에 붙는 주소.
    예를들어, url이 /post 이고 baseURL이 https://some-domain.com/api/ 이면,
    https://some-domain.com/api/post로 요청 가게 된다.*/,
  withCredentials: true /*인증정보를 담아 보낼떄 이렇게 한대 쿠키를 보내겠다 라는 의미*/,
});

export const login = () => {
  return api.get('/board/viewAll');
};

// export const logout = () => {
//   api.post;
// };

// export const signup = () => {
//   api.post;
// };


// export async function GetData() {
//   try {
//     const response = await axios.get(
//       "https://port-0-moonbuddy-spring-euegqv2lloic2m5c.sel5.cloudtype.app/board/viewAll"
//     );
//     // 요청이 성공했을 때 실행되는 부분
//     console.log("응답 데이터:", response.data);
//   } catch (error) {
//     // 요청이 실패했을 때 실행되는 부분
//     console.error("에러 발생:", error);
//   }
// }