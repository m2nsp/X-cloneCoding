// 전체 게시글 보여주는 페이지
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostListItem from './PostListItem';
import axiosInstance from '../libs/axiosInstance';


function PostList () {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { // Home 게시글 불러오기
    axiosInstance.get('/home')
      .then(res => {
        console.log('res.data:', res.data); // 여기가 배열이어야 함
        setPosts(res.data.tweets);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setPosts([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
  return <div style={{ color:"white", textAlign:"center", marginTop:"40px"}}>Loading...</div>;
  }

  if (posts.length === 0) {
  return <div style={{ color: "white", textAlign: "center", marginTop: "40px" }}>게시글이 없습니다.</div>;
  }

  return(
    <>
      {posts.map(post => (
        <PostListItem key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;