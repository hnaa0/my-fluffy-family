import { useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import AppRouter from "./Router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import axios from "axios";
import animalStore from "./store/animal";
import photoStore from "./store/photo";

export interface AnimalsDataType {
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
}

export interface PhotoDataType {
  ANIMAL_NO: number; // 동물번호
  PHOTO_NO: number; // 사진번호
  PHOTO_URL: string; // 사진url
  PHOTO_KND: string; // 사진종류
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_DATA_API_AUTH_KEY;
    const remote = axios.create();

    const all: AnimalsDataType[] = [];
    const cat: AnimalsDataType[] = [];
    const dog: AnimalsDataType[] = [];

    const getAnimals = async () => {
      const URL = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/TbAdpWaitAnimalView/1/100`;
      const res = await remote.get(URL);
      const animalsArr: AnimalsDataType[] = res.data.TbAdpWaitAnimalView.row;

      animalsArr.forEach((animal) => {
        all.push(animal);
        if (animal.SPCS === "DOG") {
          dog.push(animal);
        } else if (animal.SPCS === "CAT") {
          cat.push(animal);
        }
      });

      dispatch(animalStore.actions.fetchAll({ data: all }));
      dispatch(animalStore.actions.fetchCat({ data: cat }));
      dispatch(animalStore.actions.fetchDog({ data: dog }));
    };

    const getAnimalsPhoto = async () => {
      const URL = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/TbAdpWaitAnimalPhotoView/1/1000`;
      const res = await remote.get(URL);
      const animalsPhotosArr: PhotoDataType[] =
        res.data.TbAdpWaitAnimalPhotoView.row;

      dispatch(photoStore.actions.fetchPhoto({ data: animalsPhotosArr }));
    };
    getAnimals();
    getAnimalsPhoto();
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}
