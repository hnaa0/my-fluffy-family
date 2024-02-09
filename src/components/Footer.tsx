import styled from "styled-components";
import naverCafe from "../assets/icons/naver_cafe.png";

export default function Footer() {
  return (
    <>
      <Foot>
        <FooterUl>
          <li>
            마포센터: 서울특별시 마포구 매봉산로 31 에스플렉스 지하
            1층&nbsp;|&nbsp;
            <a href="tel">02-2124-2839</a>
          </li>
          <li>
            구로센터 : 서울특별시 구로구 경인로 472&nbsp;|&nbsp;
            <a href="tel">02-2636-7645</a>
          </li>
          <li>
            동대문센터 : 서울특별시 동대문구 무학로&nbsp;|&nbsp;
            <a href="tel">02-921-2415</a>
          </li>
        </FooterUl>
        <PolicyBox>
          <span>개인정보처리방침</span>
          <span>저작권보호정책</span>
        </PolicyBox>
        <IconBox>
          <a
            href={"https://cafe.naver.com/seoulanimalcare"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconImg src={naverCafe} />
          </a>
        </IconBox>
      </Foot>
    </>
  );
}

const Foot = styled.footer`
  font-family: Gmarket_Light;
  display: flex;
  width: 100%;
  height: 200px;
  color: var(--color-white);
  padding: 60px 60px;
  background-color: var(--color-green);
  font-size: 14px;
`;

const FooterUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-right: auto;
`;

const Box = styled.div`
  display: flex;
  align-items: end;
`;

const PolicyBox = styled(Box)`
  span:last-child {
    margin-left: 8px;
  }
`;

const IconBox = styled(Box)`
  margin-left: 20px;

  a {
    height: 40px;
  }
`;

const IconImg = styled.img`
  width: 40px;
  height: 40px;
`;
