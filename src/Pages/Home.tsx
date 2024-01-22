import styled from "styled-components";
import dogPng from "../assets/icons/dog-icon.png";
import catPng from "../assets/icons/cat-icon.png";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      <Container>
        <CarouselTitle>
          Be My
          <br />
          Family!
        </CarouselTitle>
        <Carousel />
        <PngImg src={dogPng} />
      </Container>
      <Container>
        <PngImg src={catPng} />
        <Carousel />
        <CarouselTitle>
          Be My
          <br />
          Family!
        </CarouselTitle>
      </Container>
      <Container></Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 60px;
  margin: 50px 0;
`;

const PngImg = styled.img`
  width: 100px;
  height: auto;
  margin-top: auto;
  filter: invert(76%) sepia(35%) saturate(678%) hue-rotate(343deg)
    brightness(97%) contrast(95%);
`;

const CarouselTitle = styled.h1`
  position: relative;
  font-size: 48px;
  color: #f3b664;
  font-weight: bold;
`;

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
