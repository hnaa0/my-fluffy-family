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
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

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
                <Link to="/info/centerinfo">
                  <button>방문예약</button>
                </Link>
                <Link to="/findfamily/adoptprocess">
                  <button>입양절차안내</button>
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
                  {/* <iframe
                    width="1100"
                    height="620"
                    src={`//www.youtube.com/embed/${youtubeUrl(
                      data[0].INTRCN_MVP_URL
                    )}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe> */}
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

const BtnBox = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;

  button {
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
