import styled from "styled-components";
import infoImg from "../assets/images/infoimage.jpg";
import CenterInfoCard from "../components/CenterInfoCard";

const centerInfomation = [
  {
    title: "동물복지지원센터 마포",
    nickname: "마포센터",
    address:
      "서울시 마포구 매봉산로31 시너지움 지하 1층(상암동, 에스플렉스센터)",
    contact: "02-2124-2839",

    facilities: "진료실, 입양센터, 사회화교육실",
  },
  {
    title: "동물복지지원센터 구로",
    nickname: "구로센터",
    address: "서울시 구로구 경인로 472(구로동)",
    contact: "02-2636-7645",

    facilities: "진료실, 동물보호교육장, 고양이입양센터",
  },
  {
    title: "동물복지지원센터 동대문",
    nickname: "동대문센터",
    address: "서울시 동대문구 무학로 201, 1층",
    contact: "02-921-2415",

    facilities: "진료실, 입양센터, 동물보호교육실",
  },
];

export default function CenterInfo() {
  return (
    <>
      <Container>
        <MainItro>
          <img src={infoImg} alt="info image" />
          <h2>“시민과 동물이 행복하게 공존하는 서울을 만들겠습니다.”</h2>
          <p>
            서울에서 발생하는 유기동물은 한해 약 5,600마리에 이르지만,
            <br />
            그중 약 1/10은 새로운 보호자를 만나지 못해 안락사되고 있습니다.
            <br /> 서울시는 ‘유기동물 안락사 제로화, 입양 100%’실현을 위하여,
            <br />
            유기동물의 치료부터 입양, 교육까지 전담하는 동물보호 전문시설인
            <br />
            서울동물복지지원센터 마포센터와 구로센터를 각각 2017년 10월과 2020년
            4월부터 운영하여 <br />
            시민 여러분께 건강한 반려동물이 입양되도록 힘쓰고 있습니다.
            <br /> 앞으로 유기동물 입양이 우리 사회의 보편적인 반려동물 문화가
            될 수 있도록
            <br />
            시민 여러분의 많은 관심과 성원 부탁드립니다.
          </p>
        </MainItro>
        <CenterIntro>
          <h2>센터소개</h2>
          <CenterInfoCardGroup>
            {centerInfomation.map((info) => {
              return (
                <CenterInfoCard
                  key={info.title}
                  title={info.title}
                  nickname={info.nickname}
                  address={info.address}
                  contact={info.contact}
                  facilities={info.facilities}
                />
              );
            })}
          </CenterInfoCardGroup>
        </CenterIntro>
      </Container>
    </>
  );
}

const Article = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  margin-bottom: 160px;
`;

const Container = styled.section`
  padding: 52px;
`;

const MainItro = styled(Article)`
  margin-top: 20px;

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 300px;
    height: 2px;
    background: linear-gradient(
      90deg,
      var(--color-orange-light),
      var(--color-orange-dark)
    );
  }

  &::before {
    top: -20px;
  }

  &::after {
    bottom: -20px;
  }

  img {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  h2 {
    font-size: 24px;
    margin: 40px 0 24px 0;
    color: var(--color-orange-dark);
  }

  p {
    text-align: center;
    line-height: 1.5;
  }
`;

const CenterIntro = styled(Article)`
  h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 52px;
  }
`;

const CenterInfoCardGroup = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  justify-content: space-between;
`;
