// 프로필

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import PostListItem from './PostListItem';
import axiosInstance from "../libs/axiosInstance";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-right: 1px solid #222;
  border-left: 1px solid #222;
  min-height: 100vh;
  background: black;
`;

const ProfileHeader = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #222;
  background: rgba(0,0,0,0.8);
  position: sticky;
  top: 0;
  z-index: 2;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  font-size: 22px;
  margin-left: 12px;
  margin-right: 18px;
  color: white;
`;

const ProfileName = styled.p`
  color: white;
  font-size: 17px;
  font-weight: bold;
`;

const ProfileImgContainer = styled.div`
  background: #222 url('https://casf.com.au/wp-content/uploads/2022/01/silver_grey.png');
  height: 180px;
  width: 100%;
  position: relative;
`;

const ProfileBigImg = styled.img`
  border: 4px solid black;
  border-radius: 100px;
  width: 90px;
  height: 90px;
  position: absolute;
  left: 20px;
  bottom: -45px;
  background: #222;
`;

const EditButton = styled.button`
  float: right;
  margin-top: 200px;
  margin-right: 25px;
  padding: 7px 18px;
  border: 1px solid #aaa;
  border-radius: 30px;  
  background: transparent;
  color: white;
  font-weight: 500;
  font-size: 13px;
  padding: 8px 16px;
  cursor: pointer;
`;

const ProfileInfo = styled.div`
  padding: 15px;
  color: white;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 45px;
  margin-left: 10px;
  margin-bottom: 0;
  padding: 0;
`;

const Id = styled.p`
  font-size: 15px;
  font-weight: 200;
  color: lightgrey;
  margin-left: 10px;
  margin-top: 2px;
  padding-top: 0;
`;

const SignInDate = styled.p`
  color: lightgrey;
  margin: 5px 0;
  font-size: 15px;
  font-weight: 200;
  margin-left: 10px;
`;

const FollowFollowing = styled.div`
  display: flex;
  margin-left: 10px;
  gap: 20px;
`;

const Follow = styled.p`
  font-size: 15px;
  color: lightgrey;
`;

const Follower = styled.p`
  font-size: 15px;
  color: lightgrey;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 45px;
  border-bottom: 1px solid #222;
`;

const ButtonChoice = styled.p`
  height: 30px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  color: #aaa;
  position: sticky;
  top: 0;
  z-index: 2;
`;

const ButtonChoicePost = styled.p`
  height: 30px;
  text-align: center;
  border-bottom: 2px solid #1d9bf0;
  font-size: 15px;
  font-weight: bold;
  position: sticky;
  top: 0;
  z-index: 2;
`;

function Profile () {
  const [profileInfo, setProfileInfo] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axiosInstance.get('/users/fubi');
        setProfileInfo(data);
      } catch (err) {
        alert("사용자의 정보를 가져올 수 없습니다");
      }
    };
    fetchProfile();
  }, [userId]);

  if (!profileInfo) return null;  // 데이터 로딩 전

  return (
    <>
    <ProfileContainer>
      <ProfileHeader>
        <HomeLink to="/"><AiOutlineArrowLeft size={24} /></HomeLink>
        <ProfileName>{profileInfo.userName}</ProfileName>
      </ProfileHeader>
      <ProfileImgContainer>
        <ProfileBigImg src={profileInfo.profileImg} alt="프로필 사진" />
        <EditButton>Edit profile</EditButton>
      </ProfileImgContainer>
      <ProfileInfo>
        <Name>{profileInfo.userName}</Name>
        <Id>{profileInfo.userId}</Id>
        <SignInDate><FaRegCalendarAlt size={12}/> Joined January 2024</SignInDate>
        <FollowFollowing>
          <Follow><b>0</b> Following</Follow>
          <Follower><b>0</b> Followers</Follower>
        </FollowFollowing>
      </ProfileInfo>
      <ButtonRow>
        <ButtonChoicePost>Posts</ButtonChoicePost>
        <ButtonChoice>Replies</ButtonChoice>
        <ButtonChoice>Highlights</ButtonChoice>
        <ButtonChoice>Articles</ButtonChoice>
        <ButtonChoice>Media</ButtonChoice>
        <ButtonChoice>Likes</ButtonChoice>
      </ButtonRow>
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </ProfileContainer>
    </>
  );
}

export default Profile;