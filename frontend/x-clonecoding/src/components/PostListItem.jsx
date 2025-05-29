// 전체 게시글 페이지에 들어가는 게시글

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Delete from './Delete.jsx';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';



const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 16px 12px 16px;
  border-bottom: 1px solid #222;
  background: black;
`;

const PostItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 30px;
  background: black;
`

const ItemProfileImg = styled.img`
  width: 44px;
  height: 40px;
  border-radius: 100px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  flex: 1;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostUserNameId = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const PostWriterName = styled.p`
  font-size: 15px;
  color: white;
  font-weight: bold;
  margin-top: 0;
  padding-top: 0;
`;

const PostWriterId = styled.p`
  font-size: 14px;
  color: grey;
  margin-top: 0;
  padding: 0 0 7px 0;
`;

const DeleteButton = styled.button`
  font-size: 20px;
  color: grey;
  margin-top: 0;
  padding: 0 10px 15px 0;
  border: none;
  background: black;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
`;

const PostContent = styled.p`
  font-size: 16px;
  color: white;
  margin: 0;
`;

const FunctionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 32px;
  margin-top: 0;
`;

const FunctionButtonItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #aaa;
  font-size: 15px;
`;

const ElapsedTime = styled.div`
  font-size: 13px;
  color: #aaa;
  margin-left: 10px;
`;

function PostListItem ({ post }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const openModal = () => {
    setShowDeleteModal(true);
  };

  const closeModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <PostItem>
        <PostItemInfo>
          <ItemProfileImg src={post.authorProfileImg} alt="프로필 사진" />
          <ContentContainer>
            <Top>
              <PostUserNameId>
                <PostWriterName>{post.authorNickname}</PostWriterName>
                <PostWriterId>@{post.authorId}</PostWriterId>
              </PostUserNameId> 
              <DeleteButton onClick={openModal}>···</DeleteButton>
            </Top>
            <StyleLink to={`/post/${post.id}`}>
              <PostContent>
                {post.content}
              </PostContent>
            </StyleLink>
          </ContentContainer>
        </PostItemInfo>
        <FunctionButtons>
          <FunctionButtonItem>
            <FaRegComment size={15} /> {post.commentCnt}
          </FunctionButtonItem>
          <FunctionButtonItem>
            <FaRegHeart size={15} /> {post.likeCnt}
          </FunctionButtonItem>
          <FunctionButtonItem>
            <ElapsedTime>{post.elapsedTime}</ElapsedTime>
          </FunctionButtonItem>
        </FunctionButtons>
      </PostItem>
      {/* 모달 조건부 렌더링 */}
      {showDeleteModal && <Delete postId={post.id} userId={post.authorId} onCancel={closeModal} />}
    </>
  );
}

export default PostListItem;