// 게시글 삭제
import React from 'react';
import styled from 'styled-components';
import axiosInstance from "../libs/axiosInstance";

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 1000;
  inset: 0;
  background: rgba(91, 112, 131, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DeleteModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  background: #222;
  border-radius: 18px;
  padding: 30px 28px 22px 28px;
  color: white;
  box-shadow: 0 2px 18px rgba(0, 0, 0, 0.18);
  align-items: center;
`;

const DeleteQText = styled.div`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const DeleteGuideText = styled.p`
  font-size: 15px;
  color: #aaa;
  margin-bottom: 24px;
  text-align: center;
`;

const ButtonSection = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const DeleteButton = styled.button`
  flex: 1;
  background: #f4212e;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 0;
  cursor: pointer;
`;

const CancelButton = styled.button`
  flex: 1;
  background: transparent;
  color: white;
  border: 1px solid #aaa;
  border-radius: 30px;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 0;
  cursor: pointer;
`;

function Delete ({ postId, userId, onCancel }) {
  const handleDelete = async () => {
    try {
      await axiosInstance.delete('/tweets/delete', {
        data: {
          tweetId: postId,
          userId: userId,
        },
      });
      onCancel();  // 모달 닫기
      window.location.reload();  // 삭제 후 새로고침 또는 상태 갱신
    } catch (err) {
      alert('삭제 실패');
    }
  };

  return (
    <>
    <ModalOverlay>
      <DeleteModalContainer>
        <DeleteQText>Delete post?</DeleteQText>
        <DeleteGuideText>This can't be undone and is will be removed from youre profile, the timeline of any accounts that follow you, and from search results</DeleteGuideText>
        <ButtonSection>
          <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
        </ButtonSection>
      </DeleteModalContainer>
    </ModalOverlay>
    </>
  );
}

export default Delete;