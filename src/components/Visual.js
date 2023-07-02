import React from "react";
import { Link } from "react-router-dom";

import { VisualWrap, Inner, ContentsInner } from "../style/MainStyle";

const Visual = () => {
  return (
    <VisualWrap>
      <Inner>
        <Link to="/">
          <ContentsInner>
            <ul>
              <li>롯데어린이식품체험관</li>
              <li>SweetPark</li>
              <li>
                맛있는 먹거리로 가득한, 달콤한 공원으로 떠나는 여행!
                <br />
                롯데의 식품을 테마로 한 Edutainment 공간에 오신 것을 환영합니다.
              </li>
            </ul>
          </ContentsInner>
        </Link>
      </Inner>
    </VisualWrap>
  );
};

export default Visual;
