import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { profile, comment } from "../../mock/mockData";
import UserSimpleInfo from "../../components/common/UserSimpleInfo/UserSimpleInfo";

const ListBox = styled.ul`
  list-style: none;
`;

export default function MbtiListPage({ user }) {
  return (
    <ListBox>
      {profile.map((profile, index) => (
        <li key={profile.id}>
          <Link
            to={`postdetail/${profile.id}`}
            state={{
              username: profile.username,
              userMbti: profile.userMbti,
              mbti: profile.mbti,
              context: profile.title,
            }}
          >
            {user === "ENFP" && profile.mbti === "ENFP" ? (
              <UserSimpleInfo
                mbti={profile.mbti}
                title={profile.title}
                commentLen={comment.length}
              />
            ) : (
              user !== "ENFP" &&
              profile.mbti !== "ENFP" && (
                <UserSimpleInfo
                  mbti={profile.mbti}
                  title={profile.title}
                  commentLen={comment.length}
                />
              )
            )}
          </Link>
        </li>
      ))}
    </ListBox>
  );
}
