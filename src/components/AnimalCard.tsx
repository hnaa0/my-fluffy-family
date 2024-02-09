import styled from "styled-components";
import { Link } from "react-router-dom";
import { RootState } from "../store/store";
import { PhotoType } from "./Carousel";
import { useSelector } from "react-redux";

type PropsType = {
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
  };
};

export default function AnimalCard({ data }: PropsType) {
  const carouselImgs: PhotoType = useSelector(
    (state: RootState) => state.photoStore.photos
  );

  let photos = "";
  for (let i = 0; i < carouselImgs.length; i++) {
    if (
      carouselImgs[i].ANIMAL_NO === data.ANIMAL_NO &&
      carouselImgs[i].PHOTO_KND === "THUMB"
    ) {
      photos = carouselImgs[i].PHOTO_URL;
      break;
    }
  }

  return (
    <CardContainer>
      <Link to={`/animals/${data.ANIMAL_NO}`}>
        <ImgBox>
          <img src={`https://${photos}`} />
        </ImgBox>
        <Name>{data.NM}</Name>
      </Link>
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
  text-align: center;
  line-height: 3;
`;
