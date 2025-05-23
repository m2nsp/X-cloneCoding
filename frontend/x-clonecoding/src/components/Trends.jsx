// components/Trends.jsx

import React from 'react';
import styled from 'styled-components';

const TrendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const SubscribeBox = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 7px;
`;

const SubscribeTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  padding: 10px 0 10px;
`

const SubscribeText = styled.div`
  font-size: 15px;
  color: #aaa;
  margin-bottom: 13px;
`;

const SubscribeButton = styled.button`
  background: #1d9bf0;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 15px;
  font-weight: bold;
  padding: 8px 20px;
  cursor: pointer;
`;

const TrendsSection = styled.div`
  background: #16181c;
  border-radius: 16px;
  padding: 18px 18px 10px 18px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const TrendItem = styled.div`
  margin-bottom: 14px;
  border-bottom: 1px solid #222;
  padding-bottom: 10px;
`;

const Category = styled.p`
  color: #71767b;
  font-size: 13px;
  margin-bottom: 2px;
`;

const Hashtag = styled.p`
  font-weight: bold;
  font-size: 15px;
  margin: 0 0 2px 0;
`;

const PostCount = styled.p`
  font-size: 13px;
  color: #71767b;
  margin: 0
`;

const Trends = () => {
  return (
    <TrendsContainer>
      <SubscribeBox>
        <SubscribeTitle>Subscribe to Premium</SubscribeTitle>
        <SubscribeText>
          Subscribe to unlock new features and if eligible, receive a share of ads revenue.
        </SubscribeText>
        <SubscribeButton>Subscribe</SubscribeButton>
      </SubscribeBox>
      <TrendsSection>
        <Title>Trends for you</Title>
        <TrendItem>
          <Category>Music · Trending</Category>
          <Hashtag>싱크로유</Hashtag>
          <PostCount>12.7K posts</PostCount>
        </TrendItem>
        <TrendItem>
          <Category>Music · Trending</Category>
          <Hashtag>#스트레이키즈</Hashtag>
          <PostCount>223K posts</PostCount>
        </TrendItem>
        <TrendItem>
          <Category>Trending in South Korea</Category>
          <Hashtag>티켓 양도</Hashtag>
          <PostCount>3,871 posts</PostCount>
        </TrendItem>
        <TrendItem>
          <Category>Music · Trending</Category>
          <Hashtag>#윤두준</Hashtag>
          <PostCount>8,094 posts</PostCount>
        </TrendItem>
        <TrendItem>
          <Category>Korean music · Trending</Category>
          <Hashtag>도경수 노래</Hashtag>
        </TrendItem>
        <TrendItem>
          <Category>Music · Trending</Category>
          <Hashtag>#아미들_남준이에게_돌아갈_결심</Hashtag>
          <PostCount>111K posts</PostCount>
        </TrendItem>
        <TrendItem>
          <Category>Trending in South Korea</Category>
          <Hashtag>규현 디엠</Hashtag>
        </TrendItem>
      </TrendsSection>
    </TrendsContainer>
  );
};

export default Trends;
