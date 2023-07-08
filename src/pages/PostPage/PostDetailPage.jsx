import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout";
import Button from "../../components/common/Button/Button";
import CommentPage from "../CommentPage/CommentPage";
import UserSimpleName from "../../components/common/UserSimpleInfo/UserSimpleName";
import { comment } from "../../mock/mockData";
import Comment from "../../images/icon-message.svg";
import More from "../../images/icon-more-small.svg";
import {
  PostDetailBox,
  ContextBox,
  ResponseHeader,
  MoreComment,
  StyledHeart,
  HeartButton,
} from "./PostDetailPageStyle";

export default function PostDetailPage({ children }) {
  const location = useLocation();

  const [showAllComments, setShowAllComments] = useState(false);
  const [isHearted, setIsHearted] = useState(false);
  const [heartCount, setHeartCount] = useState(6);

  const handleHeart = () => {
    if (!isHearted) {
      setHeartCount((prev) => prev + 1);
    } else {
      setHeartCount((prev) => prev - 1);
    }
    setIsHearted((prev) => !prev);
  };

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
        <ResponseHeader>
          <li>
            <HeartButton type="button" aria-label="하트" onClick={handleHeart}>
              <StyledHeart isHearted={isHearted} />
            </HeartButton>
            <span>{heartCount}</span>
          </li>
          <li>
            <img src={Comment} alt="댓글" />
            <span>{comment.length}</span>
          </li>
          <li>
            <img src={More} alt="더보기" />
          </li>
        </ResponseHeader>
        <MoreComment type="button" onClick={handleShowAllComments}>
          댓글 {comment.length}개 모두 보기
        </MoreComment>
        <CommentPage show={showAllComments}>{children}</CommentPage>
      </PostDetailBox>
    </BasicLayout>
  );
}
