import styled from "styled-components";

export default function Header() {
  return (
    <Nav>
      <img src="https://placehold.co/150x60" alt="" />
      <MainCategory>
        <MainCategoryLi>
          INFO
          <SubCategory>
            <SubCategoryLi>센터소개</SubCategoryLi>
            <SubCategoryLi>FAQ</SubCategoryLi>
          </SubCategory>
        </MainCategoryLi>
        <MainCategoryLi>
          FINDFAMILY
          <SubCategory>
            <SubCategoryLi>입양동물소개</SubCategoryLi>
            <SubCategoryLi>입양절차</SubCategoryLi>
            <SubCategoryLi>임시보호프로그램</SubCategoryLi>
          </SubCategory>
        </MainCategoryLi>
        <MainCategoryLi>반려견놀이터</MainCategoryLi>
      </MainCategory>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 16px;
`;

const MainCategory = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: auto;
`;

const MainCategoryLi = styled.li`
  position: relative;
  width: 200px;
  height: 100%;
  text-align: center;
  line-height: 60px;
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
  top: 60px;
  width: 100%;
  color: black;
  font-size: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;

const SubCategoryLi = styled.li`
  width: 100%;
  height: 40px;
  line-height: 40px;

  &:hover {
    color: var(--color-white);
    background-color: var(--color-orange-light);
  }
`;
