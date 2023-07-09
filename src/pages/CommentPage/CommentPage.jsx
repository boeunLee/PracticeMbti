import { React, useState } from "react";
import BottomInput from "../../components/common/Input/BottomInput";
import { profile } from "../../mock/mockData";
import UserSimpleName from "../../components/common/UserSimpleInfo/UserSimpleName";
import { CommentWrapper, InputWrapper } from "./CommentPageStyle";
import Response from "../PostPage/Response";

export default function CommentPage({ show, author }) {
  // const [isHearted, setIsHearted] = useState(false);
  // const [heartCount, setHeartCount] = useState(0);

  // const handleHeart = () => {
  //   if (!isHearted) {
  //     setHeartCount((prev) => prev + 1);
  //   } else {
  //     setHeartCount((prev) => prev - 1);
  //   }
  //   setIsHearted((prev) => !prev);
  // };

  const getStyledMbti = (mbti) => {
    if (mbti.includes("N")) {
      if (mbti.includes("F")) {
        return "NF";
      } else if (mbti.includes("T")) {
        return "NT";
      }
    } else if (mbti.includes("S")) {
      if (mbti.includes("J")) {
        return "SJ";
      } else if (mbti.includes("P")) {
        return "SP";
      }
    }
  };
  return (
    <>
      <CommentWrapper>
        {profile.map((profile) => {
          if (profile.author === author) {
            return profile.comment.map(
              (comment, index) =>
                (show || index < 2) && (
                  <li key={comment.id}>
                    <UserSimpleName
                      color={getStyledMbti(comment.userMbti)}
                      userMbti={comment.userMbti}
                      username={comment.username}
                    />
                    <p>{comment.message}</p>
                    <Response heartCnt={1} isComment={true} />
                  </li>
                )
            );
          }
        })}
        <InputWrapper>
          <BottomInput />
        </InputWrapper>
      </CommentWrapper>
    </>
  );
}
