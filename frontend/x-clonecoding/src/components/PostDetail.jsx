// 게시글 상세 보기

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FaRegComment, FaRetweet, FaRegHeart, FaRegBookmark } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';
import axiosInstance from "../libs/axiosInstance";

const PostDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  background-color: black;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-right: 1px solid #222;
  border-left: 1px solid #222;
  border-bottom: 1px solid #222;
`;

const PostHeader = styled.div`
  height: 60px;
  color: white;
  background-color: black;
  display: flex;
  flex-direction: row;
  padding: 0;
  padding-top: 10px;
  margin: 0;
  border-bottom: 1px solid #222;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color:white;
  margin: 12px 18px 15px 12px;
  font-size: 22px;
`;

const CurrentPage = styled.p`
  color: white;
  margin: 5px;
  padding: 3px;
  font-size: 20px;
  font-weight: bold;
`;

const PostDetailItem = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid #222;
`;

const DetailProfileImg = styled.img`
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;

const PostDetailUser = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 0px;
`;

const UserNameId = styled.div`
  display: flex;
  flex-direction: column;
`

const PostDetailWriterName = styled.p`
  color: white;
  font-size: 16px;
  padding-top: 10px;
  margin: 2px;
`;

const PostDetailId = styled.p`
  color: lightgrey;
  font-size: 12px;
  padding-top: 0px;
  margin: 0px;
  margin-bottom: 3px;
`

const PostDetailContent = styled.p`
  color: white;
  font-size: 16px;
  padding-top: 0px;
  padding-left: 10px;
  margin: 5px;
`;

const TranslateButton = styled.p`
  color: #1d9bf0;
  font-size: 13px;
  background: black;
  border: none;
  margin: 0;
  padding: 0;
  text-align: left;
  padding-top: 5px;
  padding-left: 15px;
  margin-bottom: 5px;
  width: 100px;
`;

const FunctionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  padding-bottom: 10px;
`;

const CommentSection = styled.div`
  display: flex;
  min-height: 55px;
  padding: 20px 10px 10px 18px;
  border-bottom: 1px solid #222;
`;

const CommentUserImg = styled.img`
  border-radius: 100px;
  width: 44px;
  height: 44px;
  margin-right: 12px;
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

const ReplyButton = styled.button`
  border-radius: 30px;
  background: #1d9bf0;
  color: white;
  font-size: 15px;
  font-weight: bold;
  width: 70px;
  height: 35px;
  border: none;
  padding: 0 5px;
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    background: #1877c9;
  }
`;

function PostDetail () {
  const { tweetId } = useParams();
  const [tweet, setTweet] = useState(null);

  useEffect(() => {
    axios.get(`/tweets/${tweetId}`)
      .then(res => setTweet(res.data))
      .catch(err => console.error(err));
  }, [tweetId]);

  if (!tweet) return <div style={{color: "white"}}>Loading...</div>;

  return (
    <>
      <PostDetailContainer>
        <PostHeader>
          <StyledLink to="/" className="BackButton">
            <AiOutlineArrowLeft size={24} />
          </StyledLink>
          <CurrentPage>Post</CurrentPage>
        </PostHeader>
        
        <PostDetailItem>
          <PostDetailUser>
            <DetailProfileImg src={tweet.profileImgUrl} alt="프로필 사진" />
            <UserNameId>
              <PostDetailWriterName>{tweet.writerName}</PostDetailWriterName>
              <PostDetailId>{tweet.writerId}</PostDetailId>
            </UserNameId>
          </PostDetailUser>
          <PostDetailContent>
            {tweet.content}
          </PostDetailContent>
          <TranslateButton>Translate post</TranslateButton>
          <FunctionButtons>
            <FaRegComment size={20} />
            <FaRetweet size={20} />
            <FaRegHeart size={20} />
            <FaRegBookmark size={20} />
            <FiShare size={20} />
          </FunctionButtons>
        </PostDetailItem>

        <CommentSection>
          <CommentUserImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhcgcglPpLjsInn8x8i8nojmxkIqkSWTJwg&s" alt="comment프로필" />
          <Input
            placeholder="Post your reply"
          />
          <ReplyButton>Reply</ReplyButton>
        </CommentSection>

        {tweet.comments && tweet.comments.length > 0 && tweet.comments.map((comment, idx) => (
          <PostDetailItem key={idx}>
            <PostDetailUser>
              <DetailProfileImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhcgcglPpLjsInn8x8i8nojmxkIqkSWTJwg&s" alt="댓글 프로필" />
              <UserNameId>
                <PostDetailWriterName>{comment.commentorName}</PostDetailWriterName>
                <PostDetailId>{comment.commentorId}</PostDetailId>
              </UserNameId>
            </PostDetailUser>
            <PostDetailContent>
              {comment.content}
            </PostDetailContent>
          </PostDetailItem>
        ))}
      </PostDetailContainer>
    </>
  );
}

export default PostDetail;


