import React, { FC } from "react";

import Header from "../components/Header";

const MainLayout: FC = ({ children }) => (
  <>
    <Header title="Football News" />
    {children}
  </>
);

export default MainLayout;
