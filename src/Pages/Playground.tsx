import styled from "styled-components";
import park from "../assets/icons/park-icon.png";

const playgroundData = [
  {
    name: "어린이대공원",
    scale: "747",
    location: "서울시 광진구 능동로 216(구의문주차장 옆)",
    time: "24시간 상시개방",
    tel: "02-2124-2835",
  },
  {
    name: "월드컵공원",
    scale: "1638",
    location: "서울시 마포구 증산로 32(평화의공원주차장 옆)",
    time: "24시간 상시개방",
    tel: "02-2124-2835",
  },
  {
    name: "보라매공원",
    scale: "1300",
    location: "서울시 동작구 여의대방로20마길 11(보라매공원 향기원 옆)",
    time: "24시간 상시개방",
    tel: "02-2124-2835",
  },
  {
    name: "매헌시민의숲",
    scale: "843",
    location: "서울시 서초구 매헌로 99(양재천교 인근)",
    time: "24시간 상시개방",
    tel: "02-2124-2835",
  },
  {
    name: "초안산근린공원",
    scale: "800",
    location: "서울시 도봉구 해등로3길 48-11(초안산근린공원)",
    time: "화~일 10:00~19:00",
    tel: "02-2091-4474",
  },
  {
    name: "송파구 반려견 놀이터",
    scale: "1221",
    location: "서울시 송파구 가락동 508 탄천유수지",
    time: "상시개방",
    tel: "02-2147-2836",
  },
  {
    name: "영등포구 반려견 놀이터",
    scale: "116",
    location: "서울시 영등포구 문래동6가 52(안양천 오목교 부근)",
    time: "10:00~19:00",
    tel: "02-2670-3417",
  },
  {
    name: "구로구 반려견 놀이터",
    scale: "700",
    location: "서울시 신도림동 285-34일대(안양천 오금교 남단)",
    time: "상시개방",
    tel: "02-860-2614",
  },
  {
    name: "동대문구 반려견 놀이터",
    scale: "420",
    location: "서울시 동대문구 장안동 316-15(중랑천 장안교 하부)",
    time: "상시개방",
    tel: "02-2127-4273",
  },
  {
    name: "마포구 반려견 놀이터(댕댕이 놀이터)",
    scale: "372",
    location: "서울시 마포구 마포대로1길3(마포동)",
    time: "10:00~21:00",
    tel: "02-3153-8542",
  },
  {
    name: "북서울꿈의숲",
    scale: "815",
    location: "서울시 강북구 월계로 173(번동)",
    time: "10:00~19:00(하절기 20:00)",
    tel: "02-901-6463",
  },
  {
    name: "성동구 반려견 놀이터",
    scale: "770",
    location: "서울시 성동구 송정동 73-24(송정교 하부)",
    time: "상시개방",
    tel: "02-2286-6853",
  },
];

export default function Playground() {
  return (
    <Container>
      <Mailtitle>반려견놀이터</Mailtitle>
      <ComplianceArtice>
        <ArticleTitle>반려견 놀이터 이용시 준수사항</ArticleTitle>
        <ArticleNotice>
          아래 준수사항을 지키지 않을 경우 퇴장할 수 있습니다.
        </ArticleNotice>
        <ComplianceUl>
          <ComplianceLi>
            반려견은 관할 구청에 반드시 동물등록(소유주,주소,연락처 변경시
            변경등록)을 해야합니다.
          </ComplianceLi>
          <ComplianceLi>
            놀이터에서는 반드시 반려견과 견주(소유자 또는 관리자)가 함께
            입장해야 합니다.
          </ComplianceLi>
          <ComplianceLi>
            단, 13세 미만 어린이는 성인 보호자와 함께 반려견을 동반하여 입장해야
            합니다.
            <br />
            특히, 동반 입장한 어린이 및 영·유아는 안전사고의 위험 우려가 크므로
            보호자는 더욱 큰 관심을 갖고 보호·관리해주시기 바랍니다.
          </ComplianceLi>
          <ComplianceLi>
            놀이터 출입 시, 배변봉투와 목줄을 꼭 지참한 후 입장해야 합니다.{" "}
            <br /> 반려견이 배변시 즉시 처리하고, 놀이터 입·퇴장 시에도 반드시
            목줄을 착용해야 합니다.
          </ComplianceLi>
          <ComplianceLi>
            반려견주께서는 반려견간 싸움 또는 반려견에 의한 교상이 발생하지
            않도록 주의를 갖고 항상 주시해주세요. <br /> 사고 발생 시 책임은
            피해를 준 반려견 소유주에게 있습니다.
          </ComplianceLi>
          <ComplianceLi>
            맹견, 질병이 있는 견, 발정이 있는 견 등은 출입할 수 없습니다.
          </ComplianceLi>
          <ComplianceLi>
            놀이터 내에서는 흡연과 음식물 반입을 삼가해주십시오. <br /> 사람
            음식물, 반려견 사료 및 간식류 등 모든 음식물을 금지합니다.
          </ComplianceLi>
          <ComplianceLi>
            놀이터와 주변에서는 반려견과 다른 이용자들에게 위협을 주는 고성방가
            및 불쾌한 행동을 삼가해 주십시오.
          </ComplianceLi>
        </ComplianceUl>
        <img src={park} />
      </ComplianceArtice>
      <PlaygroundArticle>
        <ArticleTitle>반려견 놀이터 목록</ArticleTitle>
        <PlaygroundTable>
          <thead>
            <tr>
              <th>공원명</th>
              <th>규모(㎡)</th>
              <th>위치</th>
              <th>운영시간</th>
              <th>전화번호</th>
            </tr>
          </thead>
          <tbody>
            {playgroundData.map((item) => {
              return (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.scale}</td>
                  <td>{item.location}</td>
                  <td>{item.time}</td>
                  <td>{item.tel}</td>
                </tr>
              );
            })}
          </tbody>
        </PlaygroundTable>
      </PlaygroundArticle>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  letter-spacing: -0.3px;
`;

const Mailtitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 52px;
`;

const Article = styled.article`
  width: 1100px;
  padding: 16px;
  margin: 52px 0 80px;
`;

const ArticleTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 28px;
`;

const ComplianceArtice = styled(Article)`
  position: relative;
  letter-spacing: -0.7px;

  img {
    position: absolute;
    right: 16px;
    bottom: -8px;
    width: 240px;
    height: auto;
  }
`;

const ArticleNotice = styled.span`
  color: red;
`;

const ComplianceUl = styled.ul`
  line-height: 1.5;
`;

const ComplianceLi = styled.li`
  margin: 16px 0;
`;

const PlaygroundArticle = styled(Article)`
  letter-spacing: -0.7px;
`;

const PlaygroundTable = styled.table`
  text-align: center;
  background-color: var(--color-yellow-light);

  thead th {
    font-size: 18px;
    padding: 24px;
    border-bottom: 2px solid var(--color-white);
  }

  thead th:nth-child(2) {
    width: 120px;
  }

  thead th:last-child {
    width: 200px;
  }

  tbody {
    font-family: Gmarket_Light;
  }

  tbody td {
    vertical-align: middle;
    padding: 36px;
    border-bottom: 2px solid var(--color-white);
  }
`;
