import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import {
  ContentsInner,
  Inner,
  LinkBtn,
  SectionSubTitle,
  SectionTitle,
  SweetParkContents,
  SweetParkWrap,
} from "../style/MainStyle";

const SweetPark = () => {
  return (
    <SweetParkWrap>
      <Inner>
        <ContentsInner>
          <SweetParkContents>
            <ul>
              <li>
                <SectionSubTitle>
                  맛있는 먹거리로 가득한 달콤한 공원!
                </SectionSubTitle>
              </li>
              <li>
                <SectionTitle>스위트파크(SweetPark)</SectionTitle>
              </li>
              <li>
                스위트파크(SweetPark)는 롯데어린이식품체험관으로,
                <br />
                ‘맛있는 먹거리로 가득한 달콤한 공원’에 여행을 떠날 수 있도록
                구성한
                <br />
                edutainment 공간입니다.
              </li>
              <li>
                <LinkBtn to="/">
                  스위트파크란?
                  <i>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </i>
                </LinkBtn>
              </li>
            </ul>
            <div>
              <img
                src="https://via.placeholder.com/720x630"
                alt="롯데스위트파크"
              />
            </div>
          </SweetParkContents>
        </ContentsInner>
      </Inner>
    </SweetParkWrap>
  );
};

export default SweetPark;
