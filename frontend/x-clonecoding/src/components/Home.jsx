// 메인 홈 페이지

import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import PostList from './PostList';
import Post from './Post';

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: black;
  min-height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  border-right: 1px solid #222;
  border-left: 1px solid #222;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 55px;
`;

const Topbar1 = styled.p`
  height: 55px;
  width: 50%;
  text-align: center;
  border-bottom: 3px solid #1d9bf0;
  font-size: 20px;
  font-weight: bold;
  position: sticky;
  top: 0;
  z-index: 2;
`;

const Topbar2 = styled.p`
  height: 55px;
  width: 50%;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: grey;
  position: sticky;
  top: 0;
  z-index: 2;
`;

function Home () {
  return (
    <>
      <HomeContainer>
        <Header>
          <Topbar1>For you</Topbar1>
          <Topbar2>Following</Topbar2>
        </Header>
        <Post />
        <PostList />
      </HomeContainer>
    </>
  );
}

export default Home;