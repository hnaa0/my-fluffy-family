import styled from "styled-components";
import dogPng from "../assets/icons/dog-icon.png";
import catPng from "../assets/icons/cat-icon.png";
import Carousel from "../components/Carousel";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

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
        <Carousel data={dogData} />
        <PngImg src={dogPng} />
      </Container>
      <Container>
        <PngImg src={catPng} />
        <Carousel data={catData} />
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
  border-radius: 20px;
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
  color: var(--color-orange-light);
  font-weight: bold;
`;
