import styled from "styled-components";
import dogPng from "../assets/icons/dog-icon.png";
import catPng from "../assets/icons/cat-icon.png";
import Carousel from "../components/Carousel";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { device } from "../styles/theme";

export default function Home() {
  const catData = useSelector((state: RootState) => state.animalStore.cat);
  const dogData = useSelector((state: RootState) => state.animalStore.dog);

  return (
    <>
      <Container>
        <CarouselTitle>
          Be My
          <br />
          Family!
        </CarouselTitle>
        <CarouselWrapper>
          <Carousel data={dogData} />
        </CarouselWrapper>
        <DogPng src={dogPng} />
      </Container>
      <Container>
        <CatPng src={catPng} />
        <CarouselWrapper>
          <Carousel data={catData} />
        </CarouselWrapper>
        <CarouselTitle>
          Be My
          <br />
          Family!
        </CarouselTitle>
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  padding: 40px 60px;
  margin: 50px 0;

  @media ${device.mobile} {
    position: relative;
    flex-direction: column;
    padding: 130px 0px 0px;
  }
`;

const PngImg = styled.img`
  width: 100px;
  height: auto;
  margin-top: auto;
  filter: invert(76%) sepia(35%) saturate(678%) hue-rotate(343deg)
    brightness(97%) contrast(95%);

  @media ${device.mobile} {
    display: none;
  }
`;

const DogPng = styled(PngImg)``;

const CatPng = styled(PngImg)``;

const CarouselTitle = styled.h1`
  position: relative;
  font-size: 48px;
  color: var(--color-orange-light);
  font-weight: bold;

  @media ${device.mobile} {
    font-size: 28px;
    position: absolute;
    top: 73px;
  }
`;

const CarouselWrapper = styled.div`
  width: 1032px;
  margin: 0 60px;

  @media ${device.mobile} {
    width: 328px;
  }
`;
