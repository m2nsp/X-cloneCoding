// 전체 게시글 페이지에 들어가는 게시글

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Delete from './Delete.jsx';
import { FaRegComment, FaRetweet, FaRegHeart, FaRegBookmark } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';



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
  margin: 6px 0 0 0;
`;

const FunctionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

function PostListItem () {
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
          <ItemProfileImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhcgcglPpLjsInn8x8i8nojmxkIqkSWTJwg&s" alt="프로필 사진" />
          <ContentContainer>
            <Top>
              <PostUserNameId>
                <PostWriterName>짱구</PostWriterName>
                <PostWriterId>@crayonshinzzang</PostWriterId>
              </PostUserNameId>
              <DeleteButton onClick={openModal}>···</DeleteButton>
            </Top>
            <StyleLink to="/post/:id">
              <PostContent>
                예시 글입니다.
              </PostContent>
            </StyleLink>
          </ContentContainer>
        </PostItemInfo>
        <FunctionButtons>
            <FaRegComment size={15} />
            <FaRetweet size={15} />
            <FaRegHeart size={15} />
            <FaRegBookmark size={15} />
            <FiShare size={15} />
        </FunctionButtons>
      </PostItem>

      {/* 모달 조건부 렌더링 */}
      {showDeleteModal && <Delete onCancel={closeModal} />}
    </>
  );
}

export default PostListItem;