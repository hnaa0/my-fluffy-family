import styled from "styled-components";
import sample from "../assets/images/infoimage.jpg";

export default function AnimalCard() {
  return (
    <CardContainer>
      <ImgBox>
        <img src={sample} />
      </ImgBox>
      <Name>이름 | 센터명</Name>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: all 0.2s;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(99, 99, 99, 0.35) 0px 2px 8px 0px;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  height: 250px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Name = styled.div`
  height: 50px;
  font-size: 18px;
  line-height: 50px;
  letter-spacing: -1px;
`;
