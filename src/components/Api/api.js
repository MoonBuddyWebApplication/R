import axios from "axios";

const api = axios.create({
  baseURL: "https://api.domarketdodo.shop" /*
  baseURL : url을 상대경로로 쓸대 url 맨 앞에 붙는 주소.
    예를들어, url이 /post 이고 baseURL이 https://some-domain.com/api/ 이면,
    https://some-domain.com/api/post로 요청 가게 된다.*/,
  withCredentials: true /*인증정보를 담아 보낼떄 이렇게 한대 쿠키를 보내겠다 라는 의미*/,
});

export const boardGet = () => {
  //화살표 함수 공부 필요, promise 는 이제 쓰지 않는다, async await 공부 필요
  return api.get("/board/viewAll"); // api.get 자체가 동기코드
};
export const Login = () => {
  //화살표 함수 공부 필요, promise 는 이제 쓰지 않는다, async await 공부 필요
  return api.post("/auth"); // api.get 자체가 동기코드
};
export const SignUpApi = () => {
  //화살표 함수 공부 필요, promise 는 이제 쓰지 않는다, async await 공부 필요
  return api.post("/user/create"); // api.get 자체가 동기코드
};
export const productGet = () => {
  //화살표 함수 공부 필요, promise 는 이제 쓰지 않는다, async await 공부 필요
  return api.get("/product/viewAll"); // api.get 자체가 동기코드
};
export const product_id = (id) => {
  //화살표 함수 공부 필요, promise 는 이제 쓰지 않는다, async await 공부 필요
  return api.get(`/product/view/${id}`); // api.get 자체가 동기코드
};
