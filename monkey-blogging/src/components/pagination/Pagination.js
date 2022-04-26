import React from "react";
import styled from "styled-components";
const PaginationStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  .pagination {
    &-list {
      display: flex;
      align-items: center;
      gap: 0 10px;
    }
    &-prev,
    &-next,
    &-item {
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      font-size: 16px;
      border-radius: 10px;
      transition: all 0.1s linear;
      &:hover {
        color: white;
        background-color: ${(props) => props.theme.primary};
      }
    }
    &-next,
    &-prev {
      background-color: #ffffff;
      box-shadow: 0px 3px 6px rgba(131, 146, 166, 0.1);
    }
    &-item.is-current {
      color: white;
      background-color: ${(props) => props.theme.primary};
    }
  }
`;

const Pagination = () => {
  return (
    <PaginationStyles>
      <span className="pagination-prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </span>
      <ul className="pagination-list">
        <li className="pagination-item">1</li>
        <li className="pagination-item is-current">2</li>
        <li className="pagination-item">...</li>
        <li className="pagination-item">3</li>
        <li className="pagination-item">4</li>
        <li className="pagination-item">5</li>
      </ul>
      <span className="pagination-next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </PaginationStyles>
  );
};

export default Pagination;
