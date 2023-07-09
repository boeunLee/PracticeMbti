import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { profile } from "../../mock/mockData";
import UserSimpleInfo from "../../components/common/UserSimpleInfo/UserSimpleInfo";

const ListBox = styled.ul`
  list-style: none;
`;

export default function MbtiListPage({ user }) {
  return (
    <ListBox>
      {profile.map((profile) => (
        <li key={profile.id}>
          <Link
            to={`postdetail/${profile.id}`}
            state={{
              author: profile.author,
              username: profile.username,
              userMbti: profile.userMbti,
              mbti: profile.mbti,
              context: profile.title,
              commentLen: profile.comment.length,
            }}
          >
            {user === "ENFP" && profile.mbti === "ENFP" ? (
              <UserSimpleInfo
                mbti={profile.mbti}
                title={profile.title}
                commentLen={profile.comment.length}
              />
            ) : (
              user !== "ENFP" &&
              profile.mbti !== "ENFP" && (
                <UserSimpleInfo
                  mbti={profile.mbti}
                  title={profile.title}
                  commentLen={profile.comment.length}
                />
              )
            )}
          </Link>
        </li>
      ))}
    </ListBox>
  );
}
