import { Outlet } from "react-router-dom";

import { LayoutContainer } from "./styles";

const DefaultLayout = () => {
  return (
    <>
      <LayoutContainer>
        <header>Header</header>
        <Outlet />
      </LayoutContainer>
    </>
  );
};

export default DefaultLayout;
