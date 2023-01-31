import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import {Container} from "react-bootstrap";

const Layout: FC = () => {
  return (
    <div>
      <Header/>
      <Container>
        <Outlet/>
      </Container>
    </div>
  );
};

export default Layout;