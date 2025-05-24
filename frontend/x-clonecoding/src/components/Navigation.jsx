// 메인 홈 페이지 왼쪽 내비게이션 바
// button이랑 프로필 떨어뜨려야됨
// button 누르면 각 페이지로 이동

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaXTwitter, FaCircleUser } from "react-icons/fa6";
import { FiHome, FiBookmark, FiBell, FiMail, FiMoreHorizontal } from 'react-icons/fi';
import { BsStars, BsPeople } from 'react-icons/bs';

// 내비게이션 바

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 10px;
  background: black;
`;

const NavigationContents = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
`;

const XIcon = styled.div`
  margin: 20px 0 30px 10px;
`;

const NavItem = styled.li`
  margin-bottom: 5px;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 18px;
  color: ${({ active }) => (active ? 'white' : '#d9d9d9')};
  background: ${({ active }) => (active ? '#181818' : 'none')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  text-decoration: none;
  border-radius: 30px;
  padding: 12px 18px;
  &:hover {
    background: #222;
    color: white;
  }
`;

const PostButton = styled.button`
  width: 90%;
  margin: 18px 0;
  padding: 13px 0;
  background: #1d9bf0;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #1877c9;
  }
`;

const ProfileSection = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0 20px 0;
  padding: 8px 12px;
  border-radius: 30px;
  text-decoration: none;
  color: white;
  &:hover {
    background: #222;
  }
`;

// 프로필 이미지
const ProfileImg = styled.img`
  display: inline-block;
  width: 42px;
  height: 42px;
  border-radius: 100px;
  object-fit: cover;
`;


// 프로필 이름, 아이디
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileTextName = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 0;
`;

const ProfileTextId = styled.p`
  font-size: 12px;
  color: lightgrey;
  margin-top: 2px;
`;

function Navigation () {
  return (
    <>
      <NavigationContainer>
        <XIcon>
          <FaXTwitter size={27} color="white" />
        </XIcon>
        <NavigationContents>
          <NavItem>
            <NavLink to="/" active={location.pathname==="/"}><FiHome />Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#"><BsStars />Explore</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#"><FiBell />Notifications</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#"><FiMail />Messages</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#"><BsPeople />Communities</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#"><FiBookmark />Bookmarks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile" active={location.pathname==="/profile"}><FaCircleUser />Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#"><FiMoreHorizontal />More</NavLink>
          </NavItem>
        </NavigationContents>
        <PostButton>Post</PostButton>
        <ProfileSection to="/profile">
          <ProfileImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhcgcglPpLjsInn8x8i8nojmxkIqkSWTJwg&s" alt="프로필 사진" />
          <ProfileInfo>
            <ProfileTextName>짱구</ProfileTextName>
            <ProfileTextId>@crayonshinzzang</ProfileTextId>
          </ProfileInfo>
        </ProfileSection>
      </NavigationContainer>
    </>
  );
}

export default Navigation;