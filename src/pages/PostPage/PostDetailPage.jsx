import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout";
import Button from "../../components/common/Button/Button";
import CommentPage from "../CommentPage/CommentPage";
import UserSimpleName from "../../components/common/UserSimpleInfo/UserSimpleName";
import Response from "./Response";
import { PostDetailBox, ContextBox, MoreComment } from "./PostDetailPageStyle";

export default function PostDetailPage({ children }) {
  const location = useLocation();

  const [showAllComments, setShowAllComments] = useState(false);

  const handleShowAllComments = () => {
    setShowAllComments((prev) => !prev);
  };

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
    <BasicLayout>
      <PostDetailBox>
        <Button size="lg" color={getStyledMbti(location.state.mbti)}>
          {location.state.mbti} 에게 질문
        </Button>
        <ContextBox>
          <p> {location.state.context}</p>
          <UserSimpleName
            color={getStyledMbti(location.state.userMbti)}
            userMbti={location.state.userMbti}
            username={location.state.username}
          />
        </ContextBox>
        <Response
          heartCnt={6}
          commentLen={location.state.commentLen}
          isComment={false}
        />
        <MoreComment type="button" onClick={handleShowAllComments}>
          댓글 {location.state.commentLen}개 모두 보기
        </MoreComment>
        <CommentPage show={showAllComments} author={location.state.author}>
          {children}
        </CommentPage>
      </PostDetailBox>
    </BasicLayout>
  );
}
