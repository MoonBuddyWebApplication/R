import axios from "axios";

const api = axios.create({
  baseURL: "url 주소" /*
  baseURL : url을 상대경로로 쓸대 url 맨 앞에 붙는 주소.
    예를들어, url이 /post 이고 baseURL이 https://some-domain.com/api/ 이면,
    https://some-domain.com/api/post로 요청 가게 된다.*/,
  withCredentials: true /*인증정보를 담아 보낼떄 이렇게 한대 쿠키를 보내겠다 라는 의미*/,
});

export const login = () => {
  api.post;
};

export const logout = () => {
  api.post;
};

export const signup = () => {
  api.post;
};
