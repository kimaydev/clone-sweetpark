import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import { Color, Size } from "./GlobalStyle";

// 레이아웃
export const Wrap = styled.div``;
export const Inner = styled.div`
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 2%;
`;
export const ContentsInner = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;
// 섹션제목
export const SectionTitle = styled.h2`
  font-family: "yg-jalnan";
  font-size: 5.2rem;
  line-height: 1.3;
  margin: 15px 0 25px;
`;
// 섹션부제목
export const SectionSubTitle = styled.h3`
  font-family: "esamanruMedium";
  font-size: 2.6rem;
`;
// 링크버튼
export const LinkBtn = styled(Link)`
  display: inline-block;
  font-family: "esamanruMedium";
  font-size: 1.7rem;
  padding: 15px 25px;
  margin-top: 40px;
  border: 0.05rem solid ${Color.Pink};
  color: ${Color.Pink};
  border-radius: 40px;
  transition: 0.2s ease-in-out;
  min-width: 190px;
  box-sizing: border-box;
  text-align: center;
  & > i {
    margin-left: 10px;
    vertical-align: -1px;
  }
  &:hover {
    background: ${Color.Pink};
    color: ${Color.White};
  }
`;

// 헤더
export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  width: 100%;
  height: ${Size.Height};
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.05rem;
    background: ${Color.BorderColorWhite};
  }
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`;
export const Logo = styled.h1``;
export const NavWrap = styled.nav`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-width: 730px;
  width: 100%;
  & ul {
    display: flex;
    align-items: center;
    li {
      width: 100%;
      & > a {
        display: block;
        height: ${Size.Height};
        line-height: ${Size.Height};
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
      }
    }
  }
`;
export const SitemapWrap = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
    & > a {
      display: block;
      font-size: 1.6rem;
      font-weight: 500;
      border: 0.05rem solid ${Color.Black};
      padding: 13px;
      border-radius: 30px;
    }
  }
`;
// 비주얼
export const VisualWrap = styled.section`
  height: 90vh;
  & > div {
    position: relative;
    background: pink;
    height: 100%;
    & > a {
      display: block;
      ul {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        & > li {
        }
        & > li h2 {
          font-size: 8rem;
          line-height: 1;
        }
        & > li h3 {
          font-size: 3.2rem;
        }
        & > li:nth-of-type(3) {
          font-size: 2.2rem;
          line-height: 1.3;
        }
      }
    }
  }
`;
// 스위트파크
export const SweetParkWrap = styled.section`
  display: flex;
  align-items: center;
  padding: ${Size.SectionPaddingL};
`;
export const SweetParkContents = styled.div`
  display: flex;
  align-items: center;
  & > ul {
    margin-right: 40px;
    & > li:nth-of-type(3) {
      font-size: 2.2rem;
      line-height: 1.3;
      color: ${Color.Gray};
    }
  }
`;
// VR
export const VrWrap = styled.section`
  /* 배경색상 추후 백그라운드이미지로 변경 */
  background: #ffe84c;
  padding: ${Size.SectionPaddingM};
`;
export const VrContents = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 600px;
    height: 191px;
    background: url("https://via.placeholder.com/600x191") no-repeat center;
    background-size: contain;
    bottom: -40px;
    right: 0;
  }
  ul {
    position: relative;
    z-index: 1;
    li {
      h2 {
        font-size: 4.4rem;
        color: ${Color.Blue};
        margin-bottom: 0;
      }
      a {
        background: ${Color.White};
        border-color: ${Color.White};
        color: ${Color.Blue};
        &:hover {
          background: ${Color.Blue};
          border-color: ${Color.Blue};
          color: ${Color.White};
        }
      }
    }
  }
`;

// 푸터
