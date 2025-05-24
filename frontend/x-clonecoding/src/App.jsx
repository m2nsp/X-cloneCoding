import React from 'react';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';
import Trends from './components/Trends';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background: black;
  color: white;
  overflow: hidden;
`;

const LeftSidebar = styled.div`
  width: 260px;
  background-color: black;
  border-right: 1px solid #333;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
`;

const RightSidebar = styled.div`
  width: 350px;
  background: transparent;
  border-right: 1px solid #222;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  z-index: 10;
  padding: 20px 0 0;
`;

const Content = styled.main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  background: black;
  margin-left: 260px;
  margin-right: 350px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App () {
  return (
    <Wrapper>
      <LeftSidebar>
        <Navigation />
      </LeftSidebar>
      <Content>
        <Outlet />
      </Content>
      <RightSidebar>
        <Trends />
      </RightSidebar>
    </Wrapper>
  );
}

export default App;