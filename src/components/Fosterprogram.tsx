import styled from "styled-components";
import Accordion from "./Accordion";

const qna = [
  {
    question: "임시보호 프로그램은 무엇인가요?",
    answer: `My Fluffy Family에는 질병, 고령, 성격 등의 이유로 오랫동안 입양을 가지 못한 동물들이 있습니다.\n
이 동물들이 안정적으로 가정환경에 적응 할 수 있도록, 동물의 소유권은 서울시에 있으나 가정에서 보호 할 수 있는 프로그램입니다.
    `,
  },
  {
    question: "임시보호 프로그램 종류는 무엇이 있나요?",
    answer: `장기체류동물 임시보호, 심장사상충 치료 임시보호, 호스피스 임시보호가 있습니다.
    `,
  },
  {
    question: "장기체류동물 임시보호는 무엇인가요?",
    answer: `장기체류동물 임시보호는 센터 입소 후 6개월이 넘게 입양을 가지 못한 동물을 가정에서 임시로 돌보아 주는 프로그램입니다.\n
임시보호 기간 중에 사진이나 동영상이 포함된 일기를 월1회 이상 인터넷에 게시해 주셔야 합니다.\n
기간은 3개월이며, 1회(3개월)에 한하여 연장 가능합니다.
    `,
  },
  {
    question: "심장사상충 임시보호는 무엇인가요?",
    answer: `심장사상충 임시보호는 심장사상충 치료를 받고 있는 동물을 가정에서 임시로 돌보아 주는 프로그램입니다.\n
임시보호 기간은 최대 6개월(심장사상충 치료 기간)이며 임시보호자는 보호기간 중에 주기적으로 센터를 방문하여 치료에 협조하여 주셔야 합니다. \n
6개월 이내라도 심장사상충이 완치되면, 임시보호는 종료됩니다.
    `,
  },
  {
    question: "호스피스 임시보호는 무엇인가요?",
    answer: `만성질병, 노령(10세 이상)등의 신체적 문제로 기대 수명이 짧은 동물을 시민분들의 가정에서 돌보아 주시는 프로그램입니다.\n
질병과 노령으로 센터에서 생활하기 어려워 남은 기간 가정의 보살핌을 받을 수 있게 하기 위함입니다. \n
만성적인 질병이 있는 경우 치료를 위한 의료지원이 제공 됩니다. \n
다만, 아프거나 나이가 많기 때문에 동물이 치료에 반응하지 않거나 죽을 수도 있으며 입원이나 인도적 처치를 위하여 센터로 재 입소 할 수 있습니다.
    `,
  },
  {
    question: "임시보호 신청은 어떻게 하나요?",
    answer: `임시보호 신청은 홈페이지에서 임시보호 가능한 동물을 확인 후 유선으로 문의주시면 됩니다. \n
센터로 직접 방문하셔서 동물을 직접 만나보시고 상담을 하셔야 합니다. \n
임시보호를 원하시는 분은 교육을 필수로 이수하여야 하며, 임시보호 기준에 적합하셔야 합니다.\n\n

※ 참고사항 : 임시보호 기간 중 입양을 원할 시, 입양절차로 진행 가능합니다.\n
임시보호만 하시는 경우에는 입양희망자가 나타나면 만남 일정에 맞추어 방문 해주셔야 합니다.
    `,
  },
];

export default function FosterProgram() {
  return (
    <Container>
      <Mailtitle>임시보호 프로그램 안내</Mailtitle>
      <FosterDesc>
        보호 중인 동물의 복지와 입양 활성화를 위해 <br />
        임시보호 프로그램을 마련하였습니다.
        <br />
        임시보호를 희망하시는 분들은 <br />
        아래의 안내사항 확인 후 문의하여 주시기 바랍니다.
      </FosterDesc>
      {qna.map((list, idx) => (
        <Accordion key={idx} question={list.question} answer={list.answer} />
      ))}
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

const FosterDesc = styled.div`
  text-align: center;
  line-height: 1.5;
  padding: 0 20px;
  margin-bottom: 60px;
  border-left: 2px solid var(--color-orange-light);
  border-right: 2px solid var(--color-orange-light);
`;
