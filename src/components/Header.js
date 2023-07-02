import React from "react";
import { Link } from "react-router-dom";

import {
  HeaderWrap,
  Inner,
  Logo,
  NavWrap,
  SitemapWrap,
} from "../style/MainStyle";

const Header = () => {
  return (
    <>
      <HeaderWrap>
        <Inner>
          {/* 로고 */}
          <Logo>
            <Link to="/">
              <img
                src="https://via.placeholder.com/117x75"
                alt="롯데스위트파크"
              />
            </Link>
          </Logo>
          {/* 메인메뉴 */}
          <NavWrap>
            <ul>
              <li>
                <Link to="/">SweetPark</Link>
              </li>
              <li>
                <Link to="/">예약신청</Link>
              </li>
              <li>
                <Link to="/">참여후기</Link>
              </li>
              <li>
                <Link to="/">고객센터</Link>
              </li>
            </ul>
          </NavWrap>
          {/* 퀵메뉴 */}
          <SitemapWrap>
            <li>
              <button>
                <img src="https://via.placeholder.com/22" alt="언어변경" />
              </button>
            </li>
            <li>
              <Link to="/">롯데중앙연구소</Link>
            </li>
            <li>
              <button>
                <img src="https://via.placeholder.com/24" alt="사이트맵보기" />
              </button>
            </li>
          </SitemapWrap>
        </Inner>
      </HeaderWrap>
    </>
  );
};

export default Header;
