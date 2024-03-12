import styled from "styled-components";
// import { Link } from "react-router-dom";
import AnimalCard from "../components/AnimalCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AnimalsDataType } from "../App";
import { device } from "../styles/theme";

export default function Animals() {
  const [category, setCategory] = useState("all");
  const [animals, setAnimals] = useState<AnimalsDataType[]>();

  interface State {
    animalStore: {
      [key: string]: AnimalsDataType[];
    };
  }

  const allAnimalData = useSelector((state: State) => state.animalStore.all);
  const catData = useSelector((state: State) => state.animalStore.cat);
  const dogData = useSelector((state: State) => state.animalStore.dog);

  useEffect(() => {
    if (category === "all") {
      setAnimals(allAnimalData);
    } else if (category === "cat") {
      setAnimals(catData);
    } else if (category === "dog") {
      setAnimals(dogData);
    }
  }, [category, allAnimalData, catData, dogData]);

  const handleCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCategory(e.currentTarget.value);
  };

  return (
    <Container>
      <Mailtitle>입양동물소개</Mailtitle>
      <Article>
        <CategoryBtns>
          <Btn onClick={handleCategory} value="all">
            ALL({allAnimalData ? allAnimalData.length : 0})
          </Btn>
          <Btn onClick={handleCategory} value="cat">
            CAT({catData ? catData.length : 0})
          </Btn>
          <Btn onClick={handleCategory} value="dog">
            DOG({dogData ? dogData.length : 0})
          </Btn>
        </CategoryBtns>
        <AnimalGroup>
          {animals &&
            animals.map((animal) => {
              return <AnimalCard key={animal.ANIMAL_NO} data={animal} />;
            })}
        </AnimalGroup>
      </Article>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  letter-spacing: -0.3px;
  width: 100%;

  @media ${device.mobile} {
    padding: 130px 20px 50px;
  }
`;

const Mailtitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 52px;

  @media ${device.mobile} {
    font-size: 32px;
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 52px 0 80px;

  @media ${device.mobile} {
    margin: 0 0 80px;
  }
`;

const CategoryBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin-bottom: 36px;

  @media ${device.mobile} {
    width: 300px;
  }
`;

const Btn = styled.button`
  width: 160px;
  height: 40px;
  line-height: 2.3;
  text-align: center;
  font-size: 20px;
  border-radius: 20px;
  background-color: var(--color-yellow-normal);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: all 0.1s;

  &:hover {
    background-color: var(--color-yellow-light);
  }

  @media ${device.mobile} {
    width: 90px;
    font-size: 14px;
    line-height: 3.2;
  }
`;

const AnimalGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media ${device.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`;
