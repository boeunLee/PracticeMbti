import React from "react";
import { Link } from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout";
import { profile } from "../../mock/mockData";
import UserSimpleInfo from "../../components/common/UserSimpleInfo/UserSimpleInfo";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const ListBox = styled.ul`
  margin-top: 50px;
  list-style: none;
`;
export default function AllMbtiDetailPage({ user }) {
  const location = useLocation();
  return (
    <BasicLayout>
      <ListBox>
        {profile.map((profile) => (
          <li key={profile.id}>
            {profile.mbti !== location.state.user && (
              <Link
                to={`/postdetail/${profile.id}`}
                state={{
                  author: profile.author,
                  username: profile.username,
                  userMbti: profile.userMbti,
                  mbti: profile.mbti,
                  context: profile.title,
                  commentLen: profile.comment.length,
                }}
              >
                <UserSimpleInfo
                  mbti={profile.mbti}
                  title={profile.title}
                  commentLen={profile.comment.length}
                />
              </Link>
            )}
          </li>
        ))}
      </ListBox>
    </BasicLayout>
  );
}
