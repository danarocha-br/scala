import React from "react";
import { Sidebar } from "../Sidebar";
import { Navbar } from "../Navbar";

import * as S from "./styles";

type Page = {
  children: React.ReactNode;
};

export const Page = ({ children }: Page) => {
  return (
    <div className={S.page()}>
      <Sidebar />

      <div className={S.content()}>
        <Navbar />
        <main className={S.main()}>{children}</main>
      </div>
    </div>
  );
};
