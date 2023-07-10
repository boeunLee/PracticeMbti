import { React, useState, useEffect } from "react";
import BottomInput from "../../components/common/Input/BottomInput";
import { profile } from "../../mock/mockData";
import UserSimpleName from "../../components/common/UserSimpleInfo/UserSimpleName";
import {
  CommentWrapper,
  InputWrapper,
  NewCommentWrapper,
} from "./CommentPageStyle";
import Response from "../PostPage/Response";

export default function CommentPage({ show, author }) {
  const [message, setMessage] = useState("");
  const [myMessages, setMyMessages] = useState([]);
  const [arrMessages, setarrMessages] = useState([]);
  const [isUser, setIsUser] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setMessage(value);
  };
  useEffect(() => {
    setMyMessages((prevMessages) => [...prevMessages, message]);
  }, [message]);

  const handleSubmitInput = (e) => {
    e.preventDefault();
    setIsUser(true);
    if (message.trim() !== "") {
      const newMessage = {
        userMbti: "ENFP",
        username: "익명",
        content: message,
      };
      setMyMessages((prevMessages) => [...prevMessages, newMessage]);
      const newMsgArray = [...arrMessages, newMessage];
      setarrMessages(newMsgArray);
      setMessage("");
    }
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
        {isUser &&
          arrMessages.map((message, index) => (
            <NewCommentWrapper>
              <li>
                <UserSimpleName
                  color={getStyledMbti(message.userMbti)}
                  userMbti={message.userMbti}
                  username={message.username}
                />
                <p>{message.content}</p>
                <Response heartCnt={0} isComment={true} />
              </li>
            </NewCommentWrapper>
          ))}

        {/* 댓글업로드 */}
        <InputWrapper>
          <BottomInput
            onChange={handleInputChange}
            onSubmit={handleSubmitInput}
            value={message}
          />
        </InputWrapper>
      </CommentWrapper>
    </>
  );
}
