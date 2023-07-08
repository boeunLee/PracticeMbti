import React from "react";
import Header from "../../components/feed/Header/Header";
import BasicLayout from "../../layout/BasicLayout";
import MbtiList from "../../components/feed/MbtiList/MbtiList";

export default function MainPage() {
  return (
    <BasicLayout>
      <Header />
      <MbtiList user="ENFP" />
      <MbtiList />
    </BasicLayout>
  );
}
