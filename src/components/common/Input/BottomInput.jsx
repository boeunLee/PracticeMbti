import { React } from "react";
import Comment from "../../../images/icon-message-small.svg";
import {
  BottomInputWrapper,
  BottomInputBox,
  SubmitBtn,
} from "./BottomInputStyle";

export default function BottomInput({ onChange, onSubmit }) {
  return (
    <BottomInputWrapper>
      <BottomInputBox>
        <img src={Comment} alt="댓글" />
        <input type="text" placeholder="댓글 남기기" onChange={onChange} />
        <SubmitBtn onClick={onSubmit}>업로드</SubmitBtn>
      </BottomInputBox>
    </BottomInputWrapper>
  );
}
