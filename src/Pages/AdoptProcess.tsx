import styled from "styled-components";
import checkmark from "../assets/icons/check-icon.png";
import learning from "../assets/icons/learn-icon.png";
import calendar from "../assets/icons/calendar-icon.png";
import home from "../assets/icons/home-icon.png";
import ball from "../assets/icons/ball-icon.png";
import megaphone from "../assets/icons/megaphone-icon.png";

export default function AdoptProcess() {
  return (
    <Container>
      <Mailtitle>입양 절차</Mailtitle>
      {/* 입양 전 체크리스트 */}
      <Article>
        <CheckListTitle>입양 전 체크리스트</CheckListTitle>
        <CheckList>
          <CheckListLi>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check2-square"
              viewBox="0 0 16 16"
            >
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
            개와 고양이의 수명은 약 15년 정도입니다. 살아가면서 아플 수도
            있어요.
            <br />
            생활패턴이나 환경이 바뀌더라도 오랜 기간 동안 책임지고 잘 돌보아 줄
            수 있나요?
          </CheckListLi>
          <CheckListLi>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check2-square"
              viewBox="0 0 16 16"
            >
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
            매일 산책을 시켜주거나 충분한 놀이시간을 제공해줄 수 있나요?
            <br />
            개는 물론이고 고양이도 혼자 있으면 외로워하는 사회적 동물입니다.
          </CheckListLi>
          <CheckListLi>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check2-square"
              viewBox="0 0 16 16"
            >
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
            입양대기 동물들은 동물등록과 중성화수술이 되어 있는 것을 아시나요?
            <br />
            My Fluffy Family의 동물들은 중성화 수술 및 동물등록을 마친 후
            입양됩니다.
          </CheckListLi>
          <CheckListLi>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check2-square"
              viewBox="0 0 16 16"
            >
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
            입양 이후 모니터링 관련 정보 제공에 협조해 주실 수 있나요?
            <br />
            My Fluffy Family에서는 입양 인식개선을 위해 보호자분의 적극적인
            입양후기 공유를 요청드리며, 입양동물 정보제공에도 적극적으로
            응해주시기 바랍니다.
          </CheckListLi>
        </CheckList>
      </Article>
      {/* 입양절차 안내 */}
      <Article>
        <ProcessTitle>입양절차 안내</ProcessTitle>
        <Process>
          <ProcessLi>
            <ProcessImg>
              <img src={checkmark} />
            </ProcessImg>
            <ProcessSubtitle>입양 전 확인</ProcessSubtitle>
            <ProcessTxt>
              My Fluffy Family 홈페이지에서 입양을 기다리는 동물을 확인합니다.
            </ProcessTxt>
          </ProcessLi>
          <ProcessLi>
            <ProcessImg>
              <img src={learning} />
            </ProcessImg>
            <ProcessSubtitle>입양 전 교육</ProcessSubtitle>
            <ProcessTxt>
              가족이 되고 싶은 아이가 있다면 교육을 이수해 주세요.
            </ProcessTxt>
          </ProcessLi>
          <ProcessLi>
            <ProcessImg>
              <img src={calendar} />
            </ProcessImg>
            <ProcessSubtitle>입양 상담 예약</ProcessSubtitle>
            <ProcessTxt>
              예약 후 센터로 방문해주세요. 예약없이 방문 시 진행이 불가합니다.
            </ProcessTxt>
          </ProcessLi>
          <ProcessLi>
            <ProcessImg>
              <img src={home} />
            </ProcessImg>
            <ProcessSubtitle>입양 진행</ProcessSubtitle>
            <ProcessTxt>
              My Fluffy Family에서는 1~2회 입양 상담 및 개체 만남을 통해 입양을
              진행합니다.
              <br />
              입양 후 파양은 불가하니 만남을 통해 신중하게 결정해 주세요.
            </ProcessTxt>
          </ProcessLi>
          <ProcessLi>
            <ProcessImg>
              <img src={ball} />
            </ProcessImg>
            <ProcessSubtitle>입양 후기 공유</ProcessSubtitle>
            <ProcessTxt>
              보호자님과 입양된 반려동물의 행복한 일상을 공유해주세요. <br />
              입양을 기다리는 동물들에게 많은 도움이 됩니다.
            </ProcessTxt>
          </ProcessLi>
        </Process>
      </Article>
      {/* 유의사항 */}
      <Article>
        <ArticleTitle>유의사항</ArticleTitle>
        <Notice>
          <NoticeLi>
            입양은 선착순으로 진행되지 않습니다.
            <br /> 한 마리에게 여러 명의 입양희망자가 생길 경우 회의를 거쳐
            입양자를 선정하게 됩니다.
          </NoticeLi>
          <NoticeLi>
            입양을 진행하면서 각 가정에서 필요한 필수 용품을 권해드립니다.
            <br />
            (안전문, 방묘창, 리드줄, 하네스, 사료, 식기, 패드 등)
            <br />
            필요한 물품들을 준비해 편안한 가정환경을 만들어 주시기 바랍니다.
          </NoticeLi>
          <NoticeLi>
            <span>입양 후 파양은 불가합니다.</span>
            <br />
            가족구성원 모두가 신중하게 생각하시고 입양을 결정해주세요.
          </NoticeLi>
          <img src={megaphone} />
        </Notice>
      </Article>
    </Container>
  );
}

const ArticleTitle = styled.h3`
  font-size: 28px;
  padding: 12px;
  background-color: var(--color-white);
  margin-bottom: 12px;
`;

const UnorderedList = styled.ul`
  width: 1000px;
  padding: 60px 40px;
  border-radius: 20px;
`;

const ListItem = styled.li`
  line-height: 1.5;
  padding: 20px 0;
`;

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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 52px 0 80px;
`;

const CheckListTitle = styled(ArticleTitle)`
  position: absolute;
  top: -24px;
  font-size: 28px;
  padding: 12px;
  background-color: var(--color-white);
  margin-bottom: 12px;
`;

const CheckList = styled(UnorderedList)`
  width: 1000px;
  font-size: 18px;
  font-family: Gmarket_Light;
  color: var(--color-black);
  padding: 60px 40px;
  border-radius: 20px;
  border: 2px solid var(--color-orange-light);
  background-color: var(--color-white);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  .bi-check2-square {
    flex-shrink: 0;
    width: 24px;
    height: auto;
    fill: var(--color-green);
    margin-right: 12px;
  }
`;

const CheckListLi = styled(ListItem)`
  display: flex;

  &:not(:nth-last-of-type(1)) {
    border-bottom: 1px solid var(--color-gray-light);
  }
`;

const Process = styled(UnorderedList)``;

const ProcessTitle = styled(ArticleTitle)`
  margin-bottom: -40px;
`;

const ProcessLi = styled(ListItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 28px;
  padding: 20px;
  border-radius: 20px;
  background-color: var(--color-yellow-light);
  text-align: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const ProcessSubtitle = styled.h4`
  font-size: 20px;
  font-weight: bold;
  color: var(--color-black);
  margin: 12px 0 4px;
`;

const ProcessTxt = styled.span``;

const ProcessImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--color-white);

  img {
    width: 50px;
    height: auto;
  }
`;

const Notice = styled(UnorderedList)`
  position: relative;
  color: var(--color-white);
  background-color: var(--color-orange-light);

  img {
    position: absolute;
    right: 40px;
    bottom: 0;
    width: 160px;
    height: auto;
    transform: scaleX(-1);
  }
`;

const NoticeLi = styled(ListItem)`
  span {
    font-size: 18px;
    font-weight: bold;
  }
`;
