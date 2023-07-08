import { React } from "react";
import { Link } from "react-router-dom";
import { ListWrapper, ListHeader } from "./MbtiListStyle";
import MbtiListPage from "../../../pages/MbtiListPage/MbtiListPage";

export default function MbtiList({ user = "" }) {
  return (
    <ListWrapper>
      <ListHeader>
        {user === "ENFP" ? (
          <>
            <h2>{user}에게 도착한 질문</h2>
            <span>
              <Link to={`/postmbti/${user}`} state={{ user: user }}>
                더 보기
              </Link>
            </span>
          </>
        ) : (
          <>
            <h2>모든 유형의 질문</h2>
            <span>
              <Link to={`/postmbti`} state={{ user: "ENFP" }}>
                더 보기
              </Link>
            </span>
          </>
        )}
      </ListHeader>
      <MbtiListPage user={user} />
    </ListWrapper>
  );
}
