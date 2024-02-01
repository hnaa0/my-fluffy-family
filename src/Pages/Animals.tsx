import styled from "styled-components";
// import { Link } from "react-router-dom";
import AnimalCard from "../components/AnimalCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AnimalsDataType } from "../App";
import { RootState } from "../store/store";

export default function Animals() {
  const [category, setCategory] = useState("");
  const [animals, setAnimals] = useState<AnimalsDataType[]>();

  const animalData = useSelector((state: RootState) => state.animalStore.all);

  useEffect(() => {
    setAnimals(animalData);
  }, [category, animalData]);

  const handleCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCategory(e.currentTarget.value);
  };

  return (
    <Container>
      <Mailtitle>입양동물소개</Mailtitle>
      <Article>
        <CategoryBtns>
          <Btn onClick={handleCategory} value="ALL">
            ALL({animalData.length})
          </Btn>
          <Btn onClick={handleCategory} value="CAT">
            CAT()
          </Btn>
          <Btn onClick={handleCategory} value="DOG">
            DOG()
          </Btn>
        </CategoryBtns>
        <AnimalGroup>
          {animalData &&
            animalData.map((animal) => {
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
`;

const Mailtitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 52px;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 52px 0 80px;
`;

const CategoryBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin-bottom: 36px;
`;

const Btn = styled.button`
  width: 160px;
  height: 40px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  border-radius: 20px;
  background-color: var(--color-yellow-normal);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: all 0.1s;

  &:hover {
    background-color: var(--color-yellow-light);
  }
`;

const AnimalGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;
