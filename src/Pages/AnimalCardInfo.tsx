import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { PhotoType } from "../components/Carousel";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { device } from "../styles/theme";

export default function AnimalCardInfo() {
  const params = useParams();
  const id = Number(params.animalNO);
  const [thumbnail, setThumbnail] = useState("");
  const animalData = useSelector((state: RootState) => state.animalStore.all);
  const photoData: PhotoType = useSelector(
    (state: RootState) => state.photoStore.photos
  );
  const [heart, setHeart] = useState(
    localStorage.getItem(`${id}`) ? true : false
  );

  const youtubeUrl = (url: string) => {
    return url.replace("https://youtu.be/", "");
  };

  const hadleThumbnail = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    if (thumbnail === e.currentTarget.src) return;
    else {
      setThumbnail(e.currentTarget.src);
      return;
    }
  };

  const getPhoto = () => {
    const arr = [];
    for (let i = 0; i < photoData.length; i++) {
      if (photoData[i].ANIMAL_NO === id) {
        arr.push(photoData[i]);
      }
    }
    return arr;
  };

  const getData = () => {
    const arr = [];
    for (let i = 0; i < animalData.length; i++) {
      if (animalData[i].ANIMAL_NO === id) {
        arr.push(animalData[i]);
      }
    }
    return arr;
  };

  const data = getData();
  const photos = getPhoto();

  const addHeart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!heart) {
      setHeart(true);
      localStorage.setItem(`${data[0].ANIMAL_NO}`, `${data[0].ANIMAL_NO}`);
    } else {
      setHeart(false);
      localStorage.removeItem(`${data[0].ANIMAL_NO}`);
    }
  };

  return (
    <Container>
      {data[0] && (
        <>
          <Mailtitle>{data[0].NM}</Mailtitle>
          <InfoGroup>
            <ImgBox>
              <MainImg
                src={
                  thumbnail === ""
                    ? `https://${photos[0].PHOTO_URL}`
                    : thumbnail
                }
              />
              <NextImgGroup>
                {photos.map((photo) => {
                  return (
                    <img
                      key={`${photo.ANIMAL_NO}_${photo.PHOTO_KND}_${photo.PHOTO_NO}`}
                      onClick={hadleThumbnail}
                      src={`https://${photo.PHOTO_URL}`}
                    />
                  );
                })}
              </NextImgGroup>
            </ImgBox>
            <TextGroup>
              <InfoBox>
                <InfoTitle>기본정보</InfoTitle>
                <InfoTable>
                  <tbody>
                    <tr>
                      <td>입소 날짜</td>
                      <td>{data[0].ENTRNC_DATE}</td>
                    </tr>
                    <tr>
                      <td>종</td>
                      <td>{data[0].SPCS}</td>
                    </tr>
                    <tr>
                      <td>품종</td>
                      <td>{data[0].BREEDS}</td>
                    </tr>
                    <tr>
                      <td>성별</td>
                      <td>{data[0].SEXDSTN === "M" ? "남" : "여"}</td>
                    </tr>
                    <tr>
                      <td>나이</td>
                      <td>{data[0].AGE}</td>
                    </tr>
                    <tr>
                      <td>체중</td>
                      <td>{data[0].BDWGH}kg</td>
                    </tr>
                  </tbody>
                </InfoTable>
              </InfoBox>
              <BtnBox>
                <Heart onClick={addHeart}>
                  {heart ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="red"
                      className="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      className="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                  )}
                </Heart>
                <Link to="/info/centerinfo">
                  <Reservation>방문예약</Reservation>
                </Link>
                <Link to="/findfamily/adoptprocess">
                  <Process>입양절차안내</Process>
                </Link>
              </BtnBox>
            </TextGroup>
          </InfoGroup>
          <DescGroup>
            <DescTitle>상세설명</DescTitle>
            <DescBox>
              {youtubeUrl(data[0].INTRCN_MVP_URL) && (
                <>
                  <VideoNotice>
                    📢 설정 &gt; 화질 &gt; 1080p ~ 2160p로 설정 후 시청바랍니다.
                  </VideoNotice>
                  <YoutubeBox>
                    <YouTube
                      videoId={youtubeUrl(data[0].INTRCN_MVP_URL)}
                      onEnd={(e) => {
                        e.target.stopVideo(0);
                      }}
                    />
                  </YoutubeBox>
                </>
              )}
              <DescTxt
                dangerouslySetInnerHTML={{ __html: data[0].INTRCN_CN }}
              ></DescTxt>
            </DescBox>
          </DescGroup>
        </>
      )}
    </Container>
  );
}

const SubTitle = styled.h3`
  display: block;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  letter-spacing: -0.3px;

  @media ${device.mobile} {
    padding: 130px 20px 50px;
  }
`;

const Mailtitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 52px;

  @media ${device.mobile} {
    font-size: 28px;
  }
`;

const InfoGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin-bottom: 100px;

  @media ${device.mobile} {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const ImgBox = styled.div`
  width: 600px;

  @media ${device.mobile} {
    width: 100vw;
  }
`;

const MainImg = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;

  @media ${device.mobile} {
    height: auto;
  }
`;

const NextImgGroup = styled.div`
  display: flex;
  margin-top: 8px;
  cursor: pointer;

  @media ${device.mobile} {
    width: 100%;
    padding: 0 8px;
    overflow-x: scroll;
  }

  img {
    width: 55px;
    height: 55px;
    object-fit: cover;
    margin-right: 4px;
    transition: all 0.2s ease;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

const TextGroup = styled.div`
  flex-shrink: 0;
  height: 100%;

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const InfoBox = styled.div`
  width: 500px;
  margin: 28px 0;

  @media ${device.mobile} {
    width: 100%;
    padding: 0 8px;
  }
`;

const InfoTitle = styled(SubTitle)`
  font-size: 18px;

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const InfoTable = styled.table`
  width: 100%;
  padding: 20px;
  margin-bottom: 12px;
  border-top: 1px solid var(--color-gray-light);

  td {
    border-bottom: 1px solid var(--color-gray-light);
    padding: 24px;

    @media ${device.mobile} {
      font-size: 14px;
    }
  }

  tr td:first-of-type {
    font-size: 14px;
    font-weight: bold;
    color: var(--color-gray-normal);

    @media ${device.mobile} {
      font-size: 12px;
    }
  }
`;

const Process = styled.button``;
const Reservation = styled.button``;

const BtnBox = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;

  ${Process}, ${Reservation} {
    align-items: center;
    width: 120px;
    height: 40px;
    text-align: center;
    font-size: 14px;
    line-height: 3.2;
    letter-spacing: -0.5px;
    margin-left: 12px;
    border-radius: 20px;
    background-color: var(--color-yellow-normal);
    transition: all 0.2s;

    &:hover {
      background-color: var(--color-yellow-light);
    }
  }
`;

const Heart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  svg {
    transition: all 0.2s;
    margin-top: 4px;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

const DescGroup = styled.div`
  width: 1200px;

  @media ${device.mobile} {
    width: 100%;
  }
`;

const DescTitle = styled(SubTitle)`
  font-size: 24px;
  padding: 12px;
  border-bottom: 1px solid var(--color-gray-light);

  @media ${device.mobile} {
    font-size: 20px;
  }
`;

const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 58px 0;
`;

const VideoNotice = styled.span`
  margin-bottom: 20px;
  font-size: 18px;
  font-family: Gmarket_Light;

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const DescTxt = styled.p`
  width: 100%;
  margin-top: 48px;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const YoutubeBox = styled.div`
  @media ${device.mobile} {
    width: 100%;

    iframe {
      width: 100%;
      height: 300px;
    }
  }
`;
