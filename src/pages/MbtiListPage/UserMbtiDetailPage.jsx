import React from "react";
import { Link } from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout";
import { profile, comment } from "../../mock/mockData";
import UserSimpleInfo from "../../components/common/UserSimpleInfo/UserSimpleInfo";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const ListBox = styled.ul`
  margin-top: 50px;
  list-style: none;
`;

export default function UserMbtiDetailPage({ user }) {
  const location = useLocation();
  return (
    <BasicLayout>
      <ListBox>
        {profile.map((profile, index) => (
          <li key={profile.id}>
            {profile.mbti === location.state.user && (
              <Link
                to={`/postdetail/${profile.id}`}
                state={{
                  username: profile.username,
                  userMbti: profile.userMbti,
                  mbti: profile.mbti,
                  context: profile.title,
                }}
              >
                <UserSimpleInfo
                  mbti={profile.mbti}
                  title={profile.title}
                  commentLen={comment.length}
                />
              </Link>
            )}
          </li>
        ))}
      </ListBox>
    </BasicLayout>
  );
}
