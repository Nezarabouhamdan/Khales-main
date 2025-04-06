"use client";
import * as React from "react";
import styled from "styled-components";


const AboutButton = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick} role="button" tabIndex={0}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  align-self: stretch;
  border-radius: 99px;
  background-color: rgba(102, 161, 9, 1);
  margin-top: 40px;
  min-height: 52px;
  width: 189px;
  max-width: 100%;
  padding: 11px 16px;
  gap: 8px;
  font-family: Radio Canada Big, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(92, 145, 8, 1);
  }

  &:focus {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`;

export default AboutButton;
