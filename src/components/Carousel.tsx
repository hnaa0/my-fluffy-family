import styled from "styled-components";

export default function Carousel() {
  return (
    <CarouselContainer>
      <PrevBtn>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </PrevBtn>
      <NextBtn>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </NextBtn>
      <CarouselGroup>
        <CarouselBox>
          <ImgBox>
            <img src="https://placehold.co/250x300" />
            <TextBox>
              <span>Momo (구로센터)</span>
              <span>Cat / Male / 10m / 3.8kg</span>
            </TextBox>
          </ImgBox>
          <ImgBox>
            <img src="https://placehold.co/250x300" />
            <TextBox>
              <span>Momo (구로센터)</span>
              <span>Cat / Male / 10m / 3.8kg</span>
            </TextBox>
          </ImgBox>
          <ImgBox>
            <img src="https://placehold.co/250x300" />
            <TextBox>
              <span>Momo (구로센터)</span>
              <span>Cat / Male / 10m / 3.8kg</span>
            </TextBox>
          </ImgBox>
          <ImgBox>
            <img src="https://placehold.co/250x300" />
            <TextBox>
              <span>Momo (구로센터)</span>
              <span>Cat / Male / 10m / 3.8kg</span>
            </TextBox>
          </ImgBox>
          <ImgBox>
            <img src="https://placehold.co/250x300" />
            <TextBox>
              <span>Momo (구로센터)</span>
              <span>Cat / Male / 10m / 3.8kg</span>
            </TextBox>
          </ImgBox>
        </CarouselBox>
      </CarouselGroup>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  position: relative;
  height: 300px;
  width: 1000px;
  margin: 0 60px;
`;

const CarouselGroup = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const CarouselBox = styled.div`
  display: flex;
`;

const ImgBox = styled.div`
  position: relative;
  height: 100%;
  width: 250px;
`;

const TextBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 10px;
  bottom: 10px;
`;

const Btn = styled.button`
  z-index: 10;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f1eb90;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  color: #ffffff;

  &:hover {
    background-color: #ebe363;
    color: #ffffff;
  }
`;

const PrevBtn = styled(Btn)`
  left: -20px;
`;
const NextBtn = styled(Btn)`
  right: -20px;
`;
