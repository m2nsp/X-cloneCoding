INSERT INTO users (user_id, name, phone_num, birth, password, description, profileImg) VALUES
('user1', '김남우', '010-1234-5678', '1990-01-01', 'password123', '안녕하세요 남우입니다.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhcgcglPpLjsInn8x8i8nojmxkIqkSWTJwg&s'),
('user2', '민서', '010-9876-5432', '1992-05-10', 'password456', '민서 자기소개입니다.', 'https://i.pinimg.com/236x/2f/77/c2/2f77c20041d08124a1f8ba8a56e31792.jpg');

INSERT INTO tweets (tweet_id, content, writer_id, like_cnt, comment_cnt, created_date, modified_date) VALUES
(1, '첫 번째 트윗입니다!', 'user1', 5, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, '두 번째 트윗입니다!', 'user2', 3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);