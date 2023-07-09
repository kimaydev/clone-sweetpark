import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import { Color, Size } from "./GlobalStyle";

// 레이아웃
export const Wrap = styled.div`
  & div > section {
    height: 90vh;
  }
`;
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
        & > li:nth-of-type(1) {
          font-family: "esamanruMedium";
          font-size: 3.2rem;
        }
        & > li:nth-of-type(2) {
          font-family: "yg-jalnan";
          font-size: 8rem;
          margin: 15px 0 25px;
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
`;
export const SweetParkContents = styled.div`
  display: flex;
  align-items: center;
  & > ul {
    margin-right: 40px;
    & > li:nth-of-type(1) {
      font-family: "esamanruMedium";
      font-size: 2.6rem;
    }
    & > li:nth-of-type(2) {
      font-family: "yg-jalnan";
      font-size: 5.2rem;
      line-height: 1.3;
      margin: 15px 0 25px;
    }
    & > li:nth-of-type(3) {
      font-size: 2.2rem;
      line-height: 1.3;
      color: ${Color.Gray};
    }
  }
`;
export const SweetParkBtn = styled(Link)`
  display: inline-block;
  font-family: "esamanruMedium";
  font-size: 1.7rem;
  padding: 15px 25px;
  border: 0.05rem solid ${Color.Pink};
  color: ${Color.Pink};
  margin-top: 40px;
  border-radius: 40px;
  transition: 0.2s ease-in-out;
  & > i {
    margin-left: 10px;
    vertical-align: -1px;
  }
  &:hover {
    background: ${Color.Pink};
    color: ${Color.White};
  }
`;

// 푸터
