import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import mff from "../assets/mff-logo.png";
import { device } from "../styles/theme";
import { useRef, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const handleCategory = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.innerText === "INFO") {
      navigate("/info/centerinfo");
    } else if (e.currentTarget.innerText === "FINDFAMILY") {
      navigate("/findfamily/animals");
    }
  };
  const $hamburgerRef = useRef<HTMLUListElement>(null);
  const [sideMenu, setSideMenu] = useState(false);

  const handleSideMenu = () => {
    if ($hamburgerRef.current && sideMenu === false) {
      setSideMenu(true);
      $hamburgerRef.current.style.transform = "translateX(-200px)";
    } else if ($hamburgerRef.current && sideMenu === true) {
      setSideMenu(false);
      $hamburgerRef.current.style.transform = "translateX(0)";
    }
  };

  return (
    <Nav>
      <Link to="/">
        <Logo src={mff} alt="my fluffy family logo" />
      </Link>
      <HamburgerMenu>
        <MenuButton onClick={handleSideMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </MenuButton>
        <HamburgerUl ref={$hamburgerRef}>
          <CloseButton onClick={handleSideMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </CloseButton>
          <div>
            <HamburgerLi>
              <div
                onClick={(e) => {
                  handleCategory(e);
                  handleSideMenu();
                }}
              >
                INFO
              </div>
              <ul>
                <Link onClick={handleSideMenu} to="/info/centerinfo">
                  <li>센터소개</li>
                </Link>
                <Link onClick={handleSideMenu} to="/info/faq">
                  <li>FAQ</li>
                </Link>
              </ul>
            </HamburgerLi>
            <HamburgerLi>
              <div
                onClick={(e) => {
                  handleCategory(e);
                  handleSideMenu();
                }}
              >
                FINDFAMILY
              </div>
              <ul>
                <Link onClick={handleSideMenu} to="/findfamily/animals">
                  <li>입양동물소개</li>
                </Link>
                <Link onClick={handleSideMenu} to="/findfamily/adoptprocess">
                  <li>입양절차</li>
                </Link>
                <Link onClick={handleSideMenu} to="/findfamily/fosterprogram">
                  <li>임시보호프로그램</li>
                </Link>
              </ul>
            </HamburgerLi>
            <Link onClick={handleSideMenu} to="/playground">
              <HamburgerLi>PLAYGROUND</HamburgerLi>
            </Link>
          </div>
        </HamburgerUl>
      </HamburgerMenu>
      <MainCategory>
        <MainCategoryLi>
          <div onClick={handleCategory}>INFO</div>
          <SubCategory>
            <Link to="/info/centerinfo">
              <SubCategoryLi>센터소개</SubCategoryLi>
            </Link>
            <Link to="/info/faq">
              <SubCategoryLi>FAQ</SubCategoryLi>
            </Link>
          </SubCategory>
        </MainCategoryLi>
        <MainCategoryLi>
          <div onClick={handleCategory}>FINDFAMILY</div>
          <SubCategory>
            <Link to="/findfamily/animals">
              <SubCategoryLi>입양동물소개</SubCategoryLi>
            </Link>
            <Link to="/findfamily/adoptprocess">
              <SubCategoryLi>입양절차</SubCategoryLi>
            </Link>
            <Link to="/findfamily/fosterprogram">
              <SubCategoryLi>임시보호프로그램</SubCategoryLi>
            </Link>
          </SubCategory>
        </MainCategoryLi>
        <Link to="/playground">
          <MainCategoryLi>PLAYGROUND</MainCategoryLi>
        </Link>
      </MainCategory>
    </Nav>
  );
}

const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 16px;
  width: 100%;
  background-color: var(--color-white);

  @media ${device.mobile} {
    position: fixed;
    top: 0;
    z-index: 100;
    padding: 0;
    height: 60px;
  }
`;

const Logo = styled.img`
  width: auto;
  height: 80px;

  @media ${device.mobile} {
    height: 60px;
  }
`;

const MainCategory = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: auto;

  @media ${device.mobile} {
    display: none;
  }
`;

const MainCategoryLi = styled.li`
  position: relative;
  width: 200px;
  height: 100%;
  text-align: center;
  line-height: 4;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-bottom: 2px solid var(--color-orange-light);
    color: var(--color-orange-light);
  }

  &:hover > ul {
    display: block;
  }
`;

const SubCategory = styled.ul`
  z-index: 10;
  background-color: var(--color-white);
  display: none;
  position: absolute;
  top: 80px;
  width: 100%;
  color: black;
  font-size: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;

const SubCategoryLi = styled.li`
  width: 100%;
  height: 48px;
  line-height: 3;

  &:hover {
    color: var(--color-white);
    background-color: var(--color-orange-light);
  }
`;

const HamburgerMenu = styled.div`
  display: hidden;
  width: 40px;
  height: 40px;

  @media ${device.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: 12px;
  }
`;

const MenuButton = styled.button`
  svg {
    fill: var(--color-orange-dark);
  }
`;

const HamburgerUl = styled.ul`
  position: absolute;
  top: 0;
  right: -200px;
  z-index: 100;
  width: 200px;
  height: 100vh;
  padding-left: 12px;
  color: var(--color-white);
  background-color: var(--color-orange-dark);
  transition: all 0.5s ease-in-out;

  & > div {
    margin-top: 76px;
  }
`;

const HamburgerLi = styled.li`
  font-size: 18px;
  margin-bottom: 32px;

  ul {
    font-size: 14px;
    margin-top: 8px;

    li {
      font-family: Gmarket_Light;
      margin-bottom: 12px;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  svg {
    fill: var(--color-white);
  }
`;
