/** @format */

import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import { NavBar } from "../HeaderNavigationComponents/NavBar";

const CommonBackground = styled.div`
  background-color: ${(props) => props.theme.colors.white};
`;

export const SharedLayout = () => {
  return (
    <CommonBackground>
      <NavBar />
      <div className='main'>
        <Outlet />
      </div>
    </CommonBackground>
  );
};
