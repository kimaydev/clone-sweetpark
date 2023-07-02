import styled from "@emotion/styled";
import { Color, Size } from "./GlobalStyle";

// 레이아웃
export const Wrap = styled.div``;
export const Inner = styled.div`
  position: relative;
  max-width: 1920px;
  width: 95%;
  margin: 0 auto;
`;

// 헤더
export const HeaderWrap = styled.header`
  position: relative;
  height: ${Size.Height};
  background: ${Color.White};
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.05rem;
    background: ${Color.BorderColor};
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

// 푸터
