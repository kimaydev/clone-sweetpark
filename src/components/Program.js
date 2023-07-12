import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import {
  ContentsInner,
  Inner,
  LinkBtn,
  ProgramContents,
  ProgramImg,
  ProgramTxt,
  ProgramWrap,
  SectionSubTitle,
  SectionTitle,
} from "../style/MainStyle";

const Program = () => {
  return (
    <ProgramWrap>
      <Inner>
        <ContentsInner>
          <ProgramContents>
            <ul>
              <li>
                <SectionTitle>프로그램</SectionTitle>
              </li>
              <li>
                <SectionSubTitle>
                  우리 아이에게
                  <br />
                  잊지 못할 하루를 선물하세요.
                </SectionSubTitle>
              </li>
              <li>
                <LinkBtn to="/">스위트파크</LinkBtn>
                <LinkBtn to="/">냠냠연구소</LinkBtn>
              </li>
            </ul>
            <div>
              <ProgramImg>
                <img
                  src="https://via.placeholder.com/980x620"
                  alt="스위트파크"
                />
              </ProgramImg>
              <ProgramTxt>
                <ul>
                  <li>
                    <h4>스위트파크</h4>
                    <p>
                      식품 마을 탐방을 통해 제품 생산 과정을 경험하고,
                      <br />
                      바른 식생활과 치아 건강의 중요성도 배워보는 견학
                      프로그램이에요.
                    </p>
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
              </ProgramTxt>
            </div>
          </ProgramContents>
        </ContentsInner>
      </Inner>
    </ProgramWrap>
  );
};

export default Program;
