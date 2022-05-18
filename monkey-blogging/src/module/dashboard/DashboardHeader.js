import { Button } from "components/button";
import { useAuth } from "contexts/auth-context";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
const DashboardHeaderStyles = styled.div`
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  .logo {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 18px;
    font-weight: 600;
    img {
      max-width: 40px;
    }
  }
  .header-avatar {
    width: 52px;
    height: 52px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100rem;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

const DashboardHeader = () => {
  const { userInfo } = useAuth();
  return (
    <DashboardHeaderStyles>
      <NavLink to="/" className="logo">
        <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
        <span className="hidden lg:inline-block">Monkey Blogging</span>
      </NavLink>
      <div className="header-right">
        <Button to="/manage/add-post" className="header-button" height="52px">
          Write new post
        </Button>
        <Link to="/profile" className="header-avatar">
          <img src={userInfo?.avatar} alt="" />
        </Link>
      </div>
    </DashboardHeaderStyles>
  );
};

export default DashboardHeader;
