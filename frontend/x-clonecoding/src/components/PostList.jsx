// 전체 게시글 보여주는 페이지
import React from 'react';
import styled from 'styled-components';
import PostListItem from './PostListItem';


function PostList () {
  return(
    <>
    <PostListItem />
    <PostListItem />
    </>
  );
}

export default PostList;