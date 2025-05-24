// 새로운 게시글 추가

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaRegImage, FaSmile, FaCamera, FaPollH, FaPlusCircle } from 'react-icons/fa';
import { BsFiletypeGif } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { IoMdGlobe } from 'react-icons/io';

const Wrapper = styled.div`
  border-bottom: 1px solid #222;
  padding: 50px 16px 0 16px;
  background: black;
`

const WriteContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Input = styled.textarea`
  flex: 1;
  padding: 10px 0;
  border-bottom: 1px solid black;
  font-size: 18px;
  background: black;
  color: white;
  border: none;
  resize: none;
  outline: none;
  min-height: 44px;
`;

const ProfileImage = styled.img`
  border-radius: 100px;
  width: 44px;
  height: 44px;
  margin-right: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 20px 12px 10px;
  color: #1d9bf0;
`;

const PostFunctionButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 40%;
  padding-top: 10px;
`;

const PublicPostBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 33%;
`;

const FunctionButtonRow = styled.div`
  padding-top: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: space-around;
  width: 50%;
`;

const PostButton = styled.button`
  border-radius: 30px;
  background: #1d9bf0;
  color: white;
  font-size: 15px;
  font-weight: bold;
  width: 65px;
  border: none;
  padding: 7px 0;
  margin-right: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background: #1877c9;
  }
`;


function Post () {
  const [text, setText] = useState("");

  const inputRef = useRef(null);

  const handleChange = (e) => {
    StyleSheetContext(e.target.value);
  };


  return (
    <>
      <Wrapper>
        <WriteContainer>
          <ProfileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhcgcglPpLjsInn8x8i8nojmxkIqkSWTJwg&s" alt="프로필"/>  {/* 프로필 이미지 */}
          <Input
            ref={inputRef}
            onChange={handleChange}
            value={text}
            placeholder="What is happening?"
          />
        </WriteContainer>
        <ButtonContainer>
          <PostFunctionButton>
            <FaRegImage size={17} />
            <BsFiletypeGif size={17} />
            <FaPollH size={17} />
            <FaSmile size={17} />
            <FaCamera size={17} />
            <GoLocation size={17} />
          </PostFunctionButton>
          <PublicPostBtn>
            <FunctionButtonRow>
              <IoMdGlobe size={17} />
              <FaPlusCircle size={17} />
            </FunctionButtonRow>
            <PostButton>Post</PostButton>
          </PublicPostBtn>
        </ButtonContainer>
      </Wrapper>
    </>
  );
}

export default Post;