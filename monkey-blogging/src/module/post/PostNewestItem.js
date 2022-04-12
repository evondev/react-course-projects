import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
const PostNewestItemStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: 0;
  }
  .post {
    &-image {
      display: block;
      flex-shrink: 0;
      width: 180px;
      height: 130px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
      }
    }
    &-category {
      margin-bottom: 8px;
    }

    &-title {
      margin-bottom: 8px;
    }
  }
`;
const PostNewestItem = () => {
  return (
    <PostNewestItemStyles>
      <div className="post-image">
        <img
          src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
          alt=""
        />
      </div>
      <div className="post-content">
        <PostCategory type="secondary">Kiến thức</PostCategory>
        <PostTitle>
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </PostTitle>
        <PostMeta></PostMeta>
      </div>
    </PostNewestItemStyles>
  );
};

export default PostNewestItem;
