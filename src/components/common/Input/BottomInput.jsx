import React from "react";
import Comment from "../../../images/icon-message-small.svg";
import { BottomInputWrapper, BottomInputBox } from "./BottomInputStyle";

export default function BottomInput() {
  return (
    <BottomInputWrapper>
      <BottomInputBox>
        <img src={Comment} alt="댓글" />
        <input placeholder="댓글 남기기" />
      </BottomInputBox>
    </BottomInputWrapper>
  );
}
