import NavigatorMain from "../components/Main-js/Navigator_main";
import Navitgator1 from "../components/Main-js/Navitgator1";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function NewsDetail() {
  const Container = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Gugi&family=Noto+Serif+KR:wght@200&display=swap");
    font-family: "Aoboshi One", serif;
    font-family: "Gugi", cursive;
    font-family: "Noto Serif KR", serif;
    width: 1320px;
    margin: auto;
    .firstSector {
      display: flex;
      justify-content: space-between;
      margin-top: 100px;
      padding: 10px;
    }
    .sectorWord {
      padding: 10px;
      font-size: 20px;
    }
    .title {
      font-size: 48px;
    }
    .middleSector {
      display: flex;
    }
    .sectorImg {
      display: flex;
      flex-direction: column;
      padding: 15px;
      img {
        width: 420px;
        height: 454px;
        border-radius: 15px;
      }
    }
  `;

  const date = "2023.11.02";

  const { id } = useParams();
  console.log(id);

  // 예시 기사 데이터
  const newsData = [
    {
      id: 1,
      title: "세계 월경의 날: 월경에 대한 5가지 오해",
      content:
        "5월 28일은 세계 월경의 날로 여성의 월경이 평균 5일간 지속하고 28일을 주기로 돌아온다는 의미가 담긴 날이다. 2014년에 독일에서 처음 제정된 월경의 날은 그동안 월경에 대해 말조차 꺼내기 힘들었던 분위기를 깨고 존중하는 공감대를 형성해보자는 취지로 만들어졌다. 월경에 대한 인식이 많이 개선됐지만, 여전히 한국 사회에서 월경을 월경이라라고 부르기가 쉽지만은 않다.",
      content2:
        "'그날이야' '난 오늘 마법에 걸렸어' 모두 생리기간을 나타내는 말이다. 1990년대 중반 한국에서는 생리대 제작 업체들이 '한 달에 한 번 여자는 마술에 걸린다' '그날이 와도 안심하세요' 등의 광고 카피를 들고 나왔다.이 광고가 대중들에게 큰 인기를 끌면서 생리를 '마법' '그날'이라고 부르는 이들이 많아졌고, 오늘날까지도 '생리'라는 용어 대신 으레 '고상한' 표현으로 사용되고 있다.",
      content3:
        "'월경'은 두꺼워졌던 자궁점막이 떨어져 나가면서 출혈과 함께 질을 통해 배출되는 것으로 가임기의 여성이라면 자연스럽게 경험하는 생리적인 현상이다. 가임기 여성이 경험하는 것임에도 불구하고 '생리'는 부끄럽고 창피한 일인 것처럼 다뤘다.월경을 월경이라 부르지 못하는 모습은 비단 한국만의 문제가 아니다. 독일에서는 생리를 '딸기주간'이라고 부르고 미국에서는 '언트플로(Aunt Flow)'라는 말을 쓰기도 한다. 프랑스에서는 과거 영국과의 전쟁을 빗대서 `영국 군대가 상륙했다`는 표현을 쓴다.",
      content4:
        "성교육 전문가 손경이 관계교육연구소 대표는 '과거 남성중심적인 사회에서 여성의 신체에 대한 연구도 부족했고 부정적인 시선이 많았기 때문'이라면서 '무엇보다 적절한 성교육'이 중요하다고 설명했다. 또한 '여성 생리의 경우 시작하기 전에 교육을 받는 것이 아이들에게 효과적'이라면서 '최근 아이들의 성장속도가 빨라진 만큼 그에 맞춰 교육 시점을 앞당겨야 할 필요가 있다'고 강조했다.",
      images: ["imgs/News1.png"],
    },
    {
      id: 2,
      title: "‘욱씬욱씬 생리통’ 가만히 둬도 괜찮을까?",
      content: `오는 5월 28일은 '세계 월경의 날'로 2013년 독일의 비영리단체 '워시 유나이티드(WASH United)'가 월경에 대한 인식을 개선하기 위해 지정한 기념일이다. 
숫자 5와 28은 여성의 월경이 평균 '5일'간 지속되고 '28일' 간격으로 돌아온다는 의미가 담겨 있다. 월경은 마법, 매직, 마술로 표현되는 여성의 생리현상이지만, 욱씬한 고통에 남모를 고충을 앓고 있는 사람들이 많다.`,

      content2:
        "일명 생리통이라고 불리는 월경통은 월경 시 주기적으로 발생하는 하복부 통증으로 국내 보고에 따르면 월경 여성의 약 80%가 월경통을 경험한다. 아픔을 동반한 월경통 과연 어디까지 참아야 할까?`,세계 월경의 날을 앞두고 이대서울병원 산부인과 박소연 교수는 여성들이 겪는 월경통에 대해 설명했다. 박소연 교수에 따르면 월경통은 발생 원인에 따라 일차 월경통과 이차 월경통으로 구분할 수 있다. 일차 월경통은 부인과 이상이 동반되지 않은 주기적 통증으로 문제가 없는 월경통이며, 이차 월경통은 부인과 질환에 의해 발생하는 월경통이다. ",
      content3: `박 교수는 '20세 이후에 발생한 월경통 또는 최근에 심해지는 통증, 월경이 시작되기 전부터 통증이 시작돼 월경이 끝난 이후에도 통증이 지속되는 경우, 월경과다와 동반해 통증이 발생할때에는 부인과 질환을 동반하는 이차 월경통 가능성이 있어 산부인과 진료가 필요하다'고 조언했다. 이차 월경통만 문제가 아니다. 자궁과 난소에 문제가 없는 여성에서도 생리기간에 자궁내막에서 분비되는 프로스타글란딘이 과도하게 증가되어 자궁근육의 주기적 수축 및 허혈성 통증을 일으켜 일상생활이 어려울 정도의 월경통으로 고생하는 경우가 많다. 이런 경우 가장 효과적인 치료제는 비스테로이드항염증제(NSAIDs)로 생리기간동안(2-3일) 복용하는 것을 권장한다.`,
      content4:
        "월경량이 많아지거나 적어져도 문제가 있다. 하루에 사용하는 생리대 개수는 3-5개 정도를 정상으로 볼 수 있으며, 탐폰은 6-15ml 정도, 생리대는 1-994ml의 월경혈을 흡수한다. 박 교수는 '가임기 여성에서 갑자기 생리량이 많아진다면 자궁내막용종, 자궁샘근증, 자궁평활근종, 자궁내막증식증 등의 자궁질환을 의심해볼 수 있으며, 생리량이 갑자기 줄어든다면 나이에 따른 신체적인 변화 또는 진통제, 스테로이드 등 약물 복용에 따른 영향, 폐경 등의 가능성을 확인해보아야 한다'고 설명했다.",
      images: ["imgs/News2.png"],
    },
    {
      id: 3,
      title: "피임약 : 피임약의 이상한 진실",
      content: `최근 과학자들은 피임약을 먹은 여성의 뇌가 근본적으로 다르게 보인다는 것을 깨닫기 시작했다. 호르몬을 투약하지 않은 여성과 비교했을 때 뇌의 몇몇 구역이 보다 '남성적'으로 보였다.

      행동에도 변화가 있었다. 특정 피임약을 복용하는 여성들은 단어를 떠올리는 것을 잘 하지 못했다. 여성들은 통상적으로 이것에 강한 편이다. 한편 이들은 마음 속으로 물체를 회전시키는 것을 더 잘했는데 이는 보통 남성의 경우 그러하다. 마지막으로 다른 타입의 피임약을 복용한 여성들은 얼굴을 인식하는 것을 보다 잘했다. 이는 여성이 통상적으로 더 잘하는 편이다.
      
      `,
      content2: `피임약에는 에스트로겐과 프로게스테론이 함유돼 있다고들 한다. 그러나 피임약은 이 두 호르몬 중 어느 하나도 함유하지 않는다.

        왜냐면 구강을 통해 섭취할 경우 에스트로겐과 프로게스테론은 효과가 나기도 전에 분해되기 때문이다. 그래서 피임약은 이러한 호르몬을 흉내내도록 조작된 보다 안정적인 호르몬을 합성해서 만든 것을 함유한다.`,
      content3: `인터넷에는 피임약으로 인한 여드름이나 땀 그리고 원하지 않는 체모의 성장 등에 대한 일화들이 가득하다. 한 여성은 뺨 전체에 털이 나기 시작했다고 하고 또 어떤 여성은 새로운 피임약을 복용하기 시작했다가 얼굴이 피자처럼 됐다고 한다. 과학자들은 이런 '남성화' 효과에 대해 많은 연구를 했고 이는 사실이다. 

        그러나 놀라운 것은 그 이유다. 2012년의 연구에 따르면 피임약을 복용하는 미국 여성의 83%가 남성 호르몬으로 만든 프로게스틴을 함유한 약을 복용하고 있다 한다. Ortho Tri-Cyclen, Loestrin FE 1/20, Tri-Sprintec® 같은 유명 브랜드 피임약도 여기에 포함된다.`,
      content4: `
        
        피임약에는 어두운 일면이 있을 수 있다. 2014년 플레처가 쓴 바와 같이 운동선수가 스테로이드를 사용하면 우리는 그것을 '도핑'이라고 부르며 이는 약물 오남용으로 취급되고 사회로부터 지탄을 받는다. 그러나 우리는 빠르면 사춘기 직후부터 폐경기까지 매일 이 호르몬을 복용하는 수백만의 여성들을 응원한다.
        
        과학자들은 피임약이 뇌에 미치는 효과가 우리의 행동에 얼마나 영향을 미치는지 아직 모른다. 하지만 이제는 그걸 알아야 할 때가 아닐까.`,
      images: ["imgs/News3.png"],
    },
    // 다른 기사 데이터 추가
  ];

  // id에 해당하는 기사 찾기
  const selectedNews = newsData.find((news) => news.id === parseInt(id));

  if (!selectedNews) {
    // id가 유효하지 않을 경우 처리
    return <div>유효하지 않은 기사입니다.</div>;
  }

  return (
    <div>
      <Navitgator1 />
      <NavigatorMain />
      <Container>
        <div className="firstSector">
          <div className="title">{selectedNews.title}</div>
          <div className="date">{date}</div>
        </div>
        <hr />
        <div className="middleSector">
          <div className="sectorImg">
            {selectedNews.images.map((image, index) => (
              <img
                key={index}
                src={process.env.PUBLIC_URL + image}
                alt={`img-${index}`}
              />
            ))}
          </div>
          <div className="sectorWord">{selectedNews.content}</div>
          <div className="sectorWord">{selectedNews.content2}</div>
          <div className="sectorWord">{selectedNews.content3}</div>
          <div className="sectorWord">{selectedNews.content4}</div>
        </div>
      </Container>
    </div>
  );
}
