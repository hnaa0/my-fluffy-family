import styled from "styled-components";
import { AnimalsDataType } from "../App";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";
import { useState } from "react";

export type PropsType = {
  data: {
    ANIMAL_NO: number; // 동물번호
    ENTRNC_DATE: string; // 입소날짜
    NM: string; // 이름
    SPCS: string; // 종
    BREEDS: string; // 품종
    SEXDSTN: string; // 성별
    AGE: string; // 나이
    BDWGH: number; // 체중
    ADP_STTUS: string; // 입양상태
    INTRCN_CN: string; // 소개내용
    INTRCN_MVP_URL: string; // 소개영상url
    TMPR_PRTC_STTUS: string; // 임시보호상태
    TMPR_PRTC_CN: string; // 임시보호내용
  }[];
};

export type PhotoType = {
  ANIMAL_NO: number; // 동물번호
  PHOTO_NO: number; // 사진번호
  PHOTO_URL: string; // 사진url
  PHOTO_KND: string; // 사진종류
}[];

export default function Carousel({ data }: PropsType) {
  const carouselImgs: PhotoType = useSelector(
    (state: RootState) => state.photoStore.photos
  );
  const photos: string[] = [];

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < carouselImgs.length; j++) {
      if (data[i].ANIMAL_NO === carouselImgs[j].ANIMAL_NO) {
        photos.push(carouselImgs[j].PHOTO_URL);
        break;
      }
    }
  }
  const [slideMove, setSlideMove] = useState<number>(0);
  const imgBoxLength = photos.length;
  const carouselBoxWidth = 258 * imgBoxLength;

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (e.currentTarget.value === "next") {
      slideMove > -carouselBoxWidth + 1032 &&
        setSlideMove((prev) => prev - 1032);
      console.log(slideMove, carouselBoxWidth);
      return;
    } else {
      slideMove < 0 && setSlideMove((prev) => prev + 1032);
      return;
    }
  };

  return (
    <CarouselContainer>
      {slideMove !== 0 && (
        <PrevBtn value="prev" onClick={handleButton}>
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
      )}
      {slideMove >= -carouselBoxWidth + 1032 && (
        <NextBtn value="next" onClick={handleButton}>
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
      )}
      <CarouselGroup>
        <CarouselBox>
          {data &&
            data.map((el: AnimalsDataType, idx) => {
              return (
                <Link key={el.ANIMAL_NO} to={`/animals/${el.ANIMAL_NO}`}>
                  <ImgBox
                    $bgimg={`https://${photos[idx]}`}
                    $slidemove={slideMove}
                  >
                    <TextBox>
                      <span>{el.NM}</span>
                      <span>
                        {el.BREEDS} / {el.SEXDSTN === "M" ? "남" : "여"} /{" "}
                        {el.AGE} / {el.BDWGH}kg
                      </span>
                    </TextBox>
                  </ImgBox>
                </Link>
              );
            })}
        </CarouselBox>
      </CarouselGroup>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  position: relative;
  height: 300px;
  width: 1032px;
  margin: 0 60px;
`;

const CarouselGroup = styled.div`
  width: 100%;
  height: inherit;
  overflow: hidden;
`;

const CarouselBox = styled.div`
  display: flex;
`;

const ImgBox = styled.div<{ $bgimg: string; $slidemove: number }>`
  flex-shrink: 0;
  display: flex;
  height: 300px;
  width: 250px;
  margin: 0 4px;
  cursor: pointer;

  background-image: url(${(props) => `${props.$bgimg}`});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  transition: filter 0.2s ease, transform 0.7s ease-in-out;
  transform: translateX(${(props) => `${props.$slidemove}px`});

  &:hover {
    filter: brightness(0.9);
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 60px;
  letter-spacing: -1px;
  font-size: 14px;
  margin-top: auto;
  padding: 0 4px;
  color: var(--color-white);
  background-color: rgba(0, 0, 0, 0.5);

  span:first-child {
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0;
    margin-bottom: 8px;
  }
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
  background-color: var(--color-yellow-normal);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  color: var(--color-white);

  &:hover {
    background-color: var(--color-yellow-light);
    color: var(--color-white);
  }
`;

const PrevBtn = styled(Btn)`
  left: -20px;
`;
const NextBtn = styled(Btn)`
  right: -20px;
`;
