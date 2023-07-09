import React from "react";
import {
  ContentsInner,
  Inner,
  LinkBtn,
  SectionSubTitle,
  SectionTitle,
  VrContents,
  VrWrap,
} from "../style/MainStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Vr = () => {
  return (
    <VrWrap>
      <Inner>
        <ContentsInner>
          <VrContents>
            <ul>
              <li>
                <SectionSubTitle>
                  우리 아이들의 상상력을 자극할 공간!
                </SectionSubTitle>
              </li>
              <li>
                <SectionTitle>
                  스위트파크를 VR로 생생하게 만나보세요.
                </SectionTitle>
              </li>
              <li>
                <LinkBtn to="/">
                  더 알아보기
                  <i>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </i>
                </LinkBtn>
              </li>
            </ul>
          </VrContents>
        </ContentsInner>
      </Inner>
    </VrWrap>
  );
};

export default Vr;
