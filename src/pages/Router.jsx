import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import AllMbtiDetailPage from "./MbtiListPage/AllMbtiDetailPage";
import UserMbtiDetailPage from "./MbtiListPage/UserMbtiDetailPage";
import PostDetailPage from "./PostPage/PostDetailPage";
import QuestionUploadPage from "./QuestionUploadPage/QuestionUploadPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/question" element={<QuestionUploadPage />} />
        <Route path="/postmbti" element={<AllMbtiDetailPage />} />
        <Route path="/postmbti/:user" element={<UserMbtiDetailPage />} />
        <Route path="/postdetail/:postId" element={<PostDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
